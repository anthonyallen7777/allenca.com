import React from "react";
import { NavLink } from "react-router-dom";
import ProfilePic from '../ProfilePic/ProfilePic';

import classes from './NavBar.module.css';

const navBar = () => {
    return (
        <header className={classes.NavBar}>
            <div className={classes.ProfilePic}>
                <ProfilePic />
            </div>
            <nav>
                <ul>
                    <li>
                        <h1><NavLink to="/">Christopher Allen</NavLink></h1>
                    </li>
                    <li>
                        <p><NavLink to="/projects/">projects</NavLink></p>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default navBar;