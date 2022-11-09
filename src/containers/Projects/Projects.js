import React from "react";
import classes from './Projects.module.css';

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const projects = () => {
    return (
        <div className={classes.ProjectPageMainDiv}>
            <NavBar />
            <main className={classes.ProjectBody}>
                <h3>No projects yet!</h3>
            </main>
            <Footer />
        </div>
    );
};

export default projects;