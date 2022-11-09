import React from "react";
import FooterName from "./FooterName/FooterName";
import FooterLinks from "./FooterLinks/FooterLinks";
import WebsiteAttribution from './WebsiteAttribution/WebsiteAttribution';

import classes from './Footer.module.css';

const footer = () => {
    return (
        <footer className={classes.Test}>
            <div className={classes.Footer}>
                <FooterName />
                <FooterLinks />
                <WebsiteAttribution />
            </div>
        </footer>
    );
};

export default footer;