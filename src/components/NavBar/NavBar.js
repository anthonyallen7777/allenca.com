import React from "react";
import { NavLink } from "react-router-dom";
import profile from '../../assets/profilepic200x200.png';

import classes from './NavBar.module.css';

const navBar = () => {
    return (
        <header className={classes.Header}>
            <div className={classes.NavBar}>
                <NavLink to="/">
                    <img className={classes.ProfilePic} src={profile} alt="Christopher Allen's profile" />
                </NavLink>
                <NavLink to="/" className={classes.PName}>Christopher Allen</NavLink>
                {/* <nav className={classes.Navigation}>
                    <ul>
                        <li>
                            <p><NavLink className={classes.Link} to="/projects/">Projects</NavLink></p>
                        </li>
                    </ul>
                </nav> */}
            </div>
        </header>
    );
};

export default navBar;