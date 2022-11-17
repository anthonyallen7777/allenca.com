import React from "react";
import classes from './SectionFour.module.css';

const SectionFour = () => {
    const submitFormHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className={classes.SectionFourContainer}>
            <div className={classes.ContactMeContainer}>
                <div className={classes.ContactInfoContainer}>
                    <div className={classes.PhoneNumberContainer}>
                        <div className={classes.ContactInfoTitle}>
                            <p>Phone: </p>
                        </div>
                        <p>(346) 495-5161</p>
                    </div>
                    <div className={classes.EmailContainer}>
                        <div className={classes.ContactInfoTitle}>
                            <p>Email: </p>
                        </div>
                        <p>business.anthony.allen@gmail.com</p>
                    </div>
                </div>
                <div className={classes.ContactMeFormContainer}>
                    <div className={classes.ContactMeTitle}>
                        <p>Contact Me</p>
                    </div>
                    <div className={classes.SendMe}>
                        <p>Send me an email</p>
                    </div>
                    <div className={classes.FormContainer}>
                        <form className={classes.Form} onSubmit={submitFormHandler}>
                            <label form="name">Name</label>
                            <input type="text" id="name" placeholder="Your name.." />
                            <label form="subject">Subject</label>
                            <input type="text" id="subject" placeholder="Subject.." />
                            <textarea type="text" id="emailBody" placeholder="Email body.." />
                        </form>
                    </div>
                </div>
            </div>
            <div className={classes.Footer}>
                <div className={classes.NameContainer}>
                    <p>Christopher Allen</p>
                    <p>Christopher Allen</p>
                </div>
                <div className={classes.PersonalSiteContainer}>
                    <p>Personal site of Christopher Allen 😄</p>
                </div>
            </div>
        </div>
    );
};

export default SectionFour;