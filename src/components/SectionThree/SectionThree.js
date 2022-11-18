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
                            <a
                            href="https://jstsentences.web.app/"
                            target="_blank" rel="noreferrer noopener"
                            >
                            <p>JstSentences</p>
                            </a>
                        </div>
                        <p className={classes.ProjectTitleBorderDiv}></p>
                    </div>
                    <div className={classes.ProjectSnapshot}>
                        <a
                        href="https://jstsentences.web.app/"
                        target="_blank" rel="noreferrer noopener"
                        >
                        <img src={JstSentencesSnapshot} alt="JstSentences Project Snapshot" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionThree;