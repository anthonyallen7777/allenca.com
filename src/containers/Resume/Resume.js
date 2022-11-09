import React from "react";
import classes from './Resume.module.css';
import NavBar from "../../components/NavBar/NavBar";
import ResumeBody from "../../components/ResumeBody/ResumeBody";
import Footer from "../../components/Footer/Footer";

const resume = () => {
    return (
        <div className={classes.ResumePageMainDiv}>
            <NavBar />
            <ResumeBody />
            <Footer />
        </div>
    );
};

export default resume;