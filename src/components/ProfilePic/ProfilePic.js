import React from "react";
import classes from './ProfilePic.module.css';
import pic from '../../assets/profilepic200x200.png';

const profilePic = () => {
    return (
        <div className={classes.ProfilePic}>
            <img src={pic} alt="Christopher Allen Profile Pic" />
        </div>
    );
};

export default profilePic;