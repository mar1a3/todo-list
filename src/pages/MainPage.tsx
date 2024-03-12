import React, { useState } from 'react';
import { Navigation } from '../components/Navigation/Navigation';
import {Header} from '../components/Header/Header';


import './style.css';
import { Input } from '../components/Input/Input';
import {TodoItem} from '../components/TodoItem/TodoItem';

import NoContent from '../assets/icons/to-do-list.png';
import { ITodoItem } from '../types/types';

export const MainPage = () => {
    const [inputStr, setInputStr] = useState('');
    const [todoList, setTodoList] = useState<ITodoItem[]>([]);

    const handleInputChange = (value: string) => {
        setInputStr(value);
      };

    const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        if (!value.trim()) return;
        setTodoList((prev) => [
            ...prev,
            {
                id: Math.random(),
                title: value,
                isDone: false,
            },
        ]);
        setInputStr('');
    };

    const handleChangeTodo = (item: ITodoItem) => {
        const indexTodo = todoList.findIndex((todo) => item.id === todo.id);

        const newTodoItem = {
            id: item.id,
            title: item.title,
            isDone: !item.isDone,
        };

        setTodoList((prev) => {
            const newTodoList = [
                ...prev.slice(0, indexTodo),
                newTodoItem,
                ...prev.slice(indexTodo + 1),
            ];
            return newTodoList;
        });
    };

    return (
            <Navigation/>
            <div className="content">
            <Header />
            <div className="search-bar">
            <Input
                onInputChange={handleInputChange}
                onPressEnter={handlePressEnter}
                value={inputStr}
            />
            </div>
            <div className="tasks-block">
                <ul>
                    {todoList.map(item => (
                        <TodoItem
                            key={Math.random()}
                            item={item}
                            onChange={handleChangeTodo}
                        />
                    ))}
                    {!todoList.length && (
                        <div className={'no-todo'}>
                            <p>Задач пока нет</p>
                            <img src={NoContent} alt="" />
                        </div>
                    )}
                </ul>
            </div>
            </div>
    );
};


// для коммита
