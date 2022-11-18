import React from "react";
import classes from './SectionTwo.module.css';

//Logos
import {FaReact} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io'
import {DiHtml5, DiCss3, DiNodejs} from 'react-icons/di';

const SectionTwo = () => {
    return (
        <div className={classes.SectionTwoContainer} id="AboutMe">
            <div className={classes.AboutMe}>
                <div className={classes.AboutMeTitle}>
                    <p>About Me</p>
                </div>
                <p>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Quis blandit turpis cursus in. Nullam non nisi est sit amet facilisis. Suscipit tellus mauris a diam maecenas sed enim ut.</p>
            </div>
            <div className={classes.TechStackContainer}>
                <div className={classes.TechStackTitle}>
                    <p>Tech Stacks</p>
                </div>
                <div className={classes.TechStackIcons}>
                    <FaReact className={classes.Icon} />
                    <IoLogoJavascript className={classes.Icon}  />
                    <DiHtml5 className={classes.Icon}  />
                    <DiCss3 className={classes.Icon}  />
                    <DiNodejs className={classes.Icon}  />
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;