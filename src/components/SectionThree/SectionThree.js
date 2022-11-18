import React from "react";
import classes from './SectionThree.module.css';
import JstSentencesSnapshot from '../../assets/JstSentencesSnapshot.png';

const SectionThree = () => {
    return (
        <div className={classes.SectionThreeContainer} id="Projects">
            <div className={classes.CurrentProjectsTitle}>
                <p>My Current Projects</p>
            </div>
            <div className={classes.ProjectsContainer}>
                <div className={classes.JstSentencesContainer}>
                    <div className={classes.ProjectTitleContainer}>
                        <div className={classes.ProjectTitle}>
                            <p>JstSentences</p>
                        </div>
                        <p className={classes.ProjectTitleBorderDiv}></p>
                    </div>
                    <div className={classes.ProjectSnapshot}>
                        <img src={JstSentencesSnapshot} alt="JstSentences Project Snapshot" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionThree;