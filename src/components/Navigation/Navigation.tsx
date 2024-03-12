import React from 'react';
import './style.css';
import TodayTasks from '../../assets/icons/add-task.png';
import CheckMark from '../../assets/icons/check-mark.png';
import List from '../../assets/icons/to-do-list.png';
import Warning from '../../assets/icons/warning.png';


export const Navigation: React.FC = () => {
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
                        <img src={TodayTasks} alt=""/>
                        <p>Today tasks</p>
                    </a>
                </li>

                <li className={"nav-item"}>
                    <a href="/#">
                        <img src={CheckMark} alt=""/>
                        <p>Done</p>
                    </a>
                </li>

                <li className={"nav-item"}>
                    <a href="/#">
                        <img src={List} alt=""/>
                        <p>Planned</p>
                    </a>
                </li>

                <li className={"nav-item"}>
                    <a href="/#">
                        <img src={Warning} alt=""/>
                        <p>Not completed</p>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
