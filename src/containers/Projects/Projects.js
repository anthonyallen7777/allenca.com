import React from "react";
import classes from './Projects.module.css';

import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const projects = () => {
    return (
        <React.Fragment>
            <header>
                <NavBar />
            </header>
            <main className={classes.Body}>
                <h3>No projects yet!</h3>
            </main>
            <footer>
                <Footer />
            </footer>
        </React.Fragment>
    );
};

export default projects;