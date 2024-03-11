import React from 'react';
import './style.css';
import todayTasks from './icons/sun.png';
import checkMark from './icons/check-mark.png';
import list from './icons/to-do-list.png';
import warning from './icons/warning.png';



const Navigation: React.FC = () => {
    return (
        <nav className={"navigation"}>
            <div className={"menu-circle"}></div>
            <div className={"user-info"}>
                <img
                    src="https://avatars.githubusercontent.com/u/25149080?s=400&u=5dc8acab357e1972b89e684422d85464693c93aa&v=4"
                    alt="avatar"
                />
                <p>mar1a3@gmail.com</p>
            </div>
            <ul>
                <li className={"nav-item"}>
                    <a href="/#">
                        <img src={todayTasks} alt=""></img>
                        <p>Today tasks</p>
                    </a>
                </li>

                <li className={"nav-item"}>
                    <a href="/#">
                        <img src={checkMark} alt=""></img>
                        <p>Done</p>
                    </a>
                </li>

                <li className={"nav-item"}>
                    <a href="/#">
                        <img src={list} alt=""></img>
                        <p>Planned</p>
                    </a>
                </li>

                <li className={"nav-item"}>
                    <a href="/#">
                        <img src={warning} alt=""></img>
                        <p>Not completed</p>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
