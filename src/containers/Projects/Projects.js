import React from "react";
import classes from './Projects.module.css';

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const projects = () => {
    return (
        <React.Fragment>
            <NavBar />
            <main className={classes.Body}>
                <h3>No projects yet!</h3>
            </main>
            <Footer />
        </React.Fragment>
    );
};

export default projects;