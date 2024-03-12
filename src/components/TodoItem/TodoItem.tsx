import React, { FC } from 'react';
import { Checkbox } from 'antd';
import './style.css';
import { ITodoItem } from '../../types/types';

interface ITodoItemProps {
    item: ITodoItem;
    onChange: (item: ITodoItem) => void;
}

export const TodoItem: FC<ITodoItemProps> = ({ item, onChange }) => {
    const handleChange = () => {
        onChange(item);
    };

    const isDoneStyle = item.isDone ? 'done' : '';

    return (
        <li className={`tasks-block-li ${isDoneStyle}`} onClick={handleChange}>
            <p className={`${isDoneStyle}`}>{item.title}</p>
            <Checkbox checked={item.isDone} />
        </li>
    );
};

