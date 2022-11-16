import React from "react";
import classes from './ResumeBody.module.css';
import JstSentencesSnapshot from '../../assets/JstSentencesSnapshot.png';

const resumeBody = () => {
    return (
        <main className={classes.ResumeBody}>
            <div>
            <h3>This is a repository of my projects!</h3>
            <h4>Check them out!</h4>
            </div>
            <div className={classes.CurrentProjectsContainer}>
                <div className={classes.CurrentProjectsText}>
                    <h2>Current projects:</h2>
                </div>
                <div className={classes.JstSentencesContainer}>
                    <p>JstSentences</p>
                    <img className={classes.Snapshot}
                    src={JstSentencesSnapshot}
                    alt="JstSentences project snapshot" />
                </div>
            </div>
        </main>
    );
};

export default resumeBody;