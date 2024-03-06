import React, { useState } from 'react';
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header/Header';

import { Input } from 'antd';
import TodoItem from '../components/TodoItem/TodoItem';
import NoContent from '../components/Navigation/icons/add-task.png';

import { ITodoItem } from '../types/types';
import './style.css';

const MainPage = () => {
    const [inputStr, setInputStr] = useState('');
    const [todoList, setTodoList] = useState<ITodoItem[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputStr(value);
    };

    const handlePressEnter = (e: any) => {
        const value = e.target.value;
        if (!value.trim()) return;
        setTodoList(prev => [
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
        const indexTodo = todoList.findIndex(todo => item.id === todo.id);

        const newTodoItem = {
            id: item.id,
            title: item.title,
            isDone: !item.isDone,
        };

        setTodoList(prev => {
            const newTodoList = [
                ...prev.slice(0, indexTodo),
                newTodoItem,
                ...prev.slice(indexTodo + 1),
            ];
            return newTodoList;
        });
    };

    return (
        <body>
            <Navigation/>
            <div className="content">
            <Header />
            <div className="search-bar">
            <Input
                onPressEnter={handlePressEnter}
                onChange={handleChange}
                value={inputStr}
                placeholder="Type the task"
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
        </body>
    );
};

export { MainPage };
