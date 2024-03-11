
import React from 'react';
import './style.css';

import {InputComponentProps} from '../../types/types';

export const Input:React.FC<InputComponentProps> =({ onInputChange, onPressEnter, value })=>{

  const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
      const value = e.target.value;
      onInputChange(value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onPressEnter(e);
    }
  };

  return(
        <div className="search-bar">
        <input type="text" placeholder="Type the task" value={value} onInput={handleChange} onKeyDown={handleKeyPress} />
      </div>
  );
};

