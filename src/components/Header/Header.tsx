import React from 'react';
import './style.css';
import Notification from '../../assets/icons/notification.png';
import User from '../../assets/icons/user.png';

export const Header = () => {
      return (
          <div className={"tasks"}>
          <div className={"h1"}>
              <h1>Tasks</h1>
            </div>
            <div className={"nav-items"}>
              <div className={"notification"}>
              <img src={Notification} alt="notification"/>
            </div>
            <div className={"user"}>
              <img src={User} alt="user"/>
            </div>
          </div>
          </div>
      );
  };

