import React from "react";
import classes from './SectionTwo.module.css';

//Logos
import {FaReact} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io'
import {DiHtml5, DiCss3, DiNodejs, DiFirebase} from 'react-icons/di';

const SectionTwo = () => {
    return (
        <div className={classes.SectionTwoContainer} id="AboutMe">
            <div className={classes.AboutMe}>
                <div className={classes.AboutMeTitle}>
                    <p>About Me</p>
                </div>
                <div className={classes.AboutMeContainer}>
                    <p>Ever since I was a kid I was interested in building stuff. I got introduced to programming after that but it was quickly cut short due to life circumstances. I've worked sales and retail jobs here and there since then but never had the opportunity to follow what I truly wanted, programming. I finally sat down and said to myself I want to do this. I want to follow a path I actually care about. So over the course of about a year I put my head to the book and learned what I was so interested in early on, building stuff.</p>
                </div>
            </div>
            <div className={classes.TechStackContainer}>
                <div className={classes.TechStackTitle}>
                    <p>My Tech Stack</p>
                </div>
                <div className={classes.TechStackIcons}>
                    <div className={classes.IndividualStack}>
                        <DiHtml5 className={classes.Icon}  />
                        <p>React</p>
                    </div>
                    <div className={classes.IndividualStack}>
                        <DiCss3 className={classes.Icon}  />
                        <p>CSS</p>
                    </div>
                    <div className={classes.IndividualStack}>
                        <IoLogoJavascript className={classes.Icon}  />
                        <p>Javascript</p>
                    </div>
                    <div className={classes.IndividualStack}>
                        <DiNodejs className={classes.Icon}  />
                        <p>NodeJS</p>
                    </div>
                    <div className={classes.IndividualStack}>
                        <FaReact className={classes.Icon} />
                        <p>React</p>
                    </div>
                    <div className={classes.IndividualStack}>
                        <DiFirebase className={classes.Icon}  />
                        <p>Firebase</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;