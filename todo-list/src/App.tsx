import React, { MouseEventHandler, PropsWithChildren, useState } from 'react';
import './styles/main.css';
import myImage from './styles/1.jpg';

interface Task {
    id: number;
    text: string;
    isChecked: boolean;
}

const App: React.FC = () => {

    const [image, setImage] = React.useState(true);
    const [inputValue, setInputValue] = React.useState<string>('');
    const [tasks, setTask] = React.useState<[]>([]);

    const handleInput = (React.ChangeEventHandler<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const addTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (inputValue) {
            const taskId = Math.random();
            setTask(prevTasks => ({
                ...prevTasks,
                [taskId]: { id: taskId, text: inputValue, isChecked: false },
            }));
            setInputValue('');
            setImage(false);
        }
    };

    const handleCheckbox = (taskId: number) => {
        setTask(prevTasks => ({
            ...prevTasks,
            [taskId]: {
                ...prevTasks[taskId],
                isChecked: !prevTasks[taskId].isChecked,
            },
        }));
    };

    return (
        <div className="App">
            <h1>
                <div className="title">Todo list</div>
            </h1>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInput}
                    name="message"
                    placeholder="Type the task"
                ></input>
                <button onClick={addTask} className="add">
                    add
                </button>
            {!setTask.length && (
                <div className="img-field">
                    You don't have any tasks yet 😬
                    <img src={myImage} alt="Description" />
                </div>
            )}
            <div className="tasks">
                {Object.values(tasks).map(task => (
                    <div key={task.id} className="task">
                        {/* если чекбокс с галкой, то крашу инпут классом done */}
                        <p className={task.isChecked ? 'done' : ''}>
                            {task.text}
                        </p>
                        <input
                            type="checkbox"
                            checked={task.isChecked}
                            onChange={() => handleCheckbox(task.id)}
                            className="arrow"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
