import React from 'react';
import './style.css';
import notification from '../Navigation/icons/notification.png';
import user from '../Navigation/icons/user (2).png';
const Header = () => {
    return (
        <div className={"tasks"}>
        <div className={"h1"}>
            <h1>Tasks</h1>
          </div>
          <div className={"nav-items"}>
            <div className={"notification"}>
            <img src={notification} alt="notification"></img>
          </div>
          <div className={"user"}>
            <img src={user} alt="user"></img>
          </div>
        </div>
        </div>
    );
};

export default Header;