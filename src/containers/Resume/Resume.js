import React from "react";

import NavBar from "../../components/NavBar/NavBar";
import ResumeBody from "../../components/ResumeBody/ResumeBody";
import Footer from "../../components/Footer/Footer";

const resume = () => {
    return (
        <React.Fragment>
            <header>
                <NavBar />
            </header>
            <main>
                <ResumeBody />
            </main>
            <footer>
                <Footer />
            </footer>
        </React.Fragment>
    );
};

export default resume;