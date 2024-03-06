import React, { FC } from 'react';
import { Checkbox } from 'antd';
import './style.css';
import { ITodoItem } from '../../types/types';

interface ITodoItemProps {
    item: ITodoItem;
    onChange: (item: ITodoItem) => void;
}

const TodoItem: FC<ITodoItemProps> = ({ item, onChange }) => {
    const handleChange = () => {
        onChange(item);
    };

    const isDoneStyle = item.isDone ? 'done ul li' : '';

    return (
        <li className={`${isDoneStyle}`} onClick={handleChange}>
            <p className={`${isDoneStyle}`}>{item.title}</p>
            <Checkbox checked={item.isDone} />
        </li>
    );
};

export default TodoItem;