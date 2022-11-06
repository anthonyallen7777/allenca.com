import React from "react";
import githubLogo from '../../../assets/GitHub-Mark-32px.png';
import LinkedInLogo from '../../../assets/LI-In-Bug.png';
import classes from './FooterLinks.module.css';

const footerLinks = () => (
    <div className={classes.FooterLinks}>
        <ul>
            <li>
                <a href="https://github.com/anthonyallen7777" target="_blank" rel="noreferrer noopener">
                    <img src={githubLogo} alt="Github Logo" />
                    <span>anthonyallen7777</span>
                </a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/ChrisAnthonyAllen" target="_blank" rel="noreferrer noopener">
                    <img src={LinkedInLogo} alt="LinkedIn Logo" />
                    <span>chris-allen</span>
                </a>
            </li>
        </ul>
    </div>
);

export default footerLinks;