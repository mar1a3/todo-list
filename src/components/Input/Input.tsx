import React from 'react';
import './style.css';
import {InputConponentProps} from '../../types/types';

export const Input: React.FC<InputConponentProps> = ({onInputChange,onPressEnter,value}) => {

    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        const inputValue = e.target.value;
        onInputChange(inputValue);
    }
    const handleKeyPress =(e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key === 'Enter'){
            onPressEnter(e);
        }
    }

    return (
        <div className="search-bar">
        <input type="text" placeholder="Type the task" onChange={handleChange} onKeyDown={handleKeyPress} value={value}/>
      </div>
    );
};
