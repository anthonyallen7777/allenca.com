import React from "react";
import classes from './SectionFour.module.css';

const SectionFour = () => {
    const submitFormHandler = (event) => {
        event.preventDefault();
    }

    return (
        <div className={classes.SectionFourContainer} id="ContactMe">
            <div className={classes.ContactMeContainer}>
                <div className={classes.ContactInfoContainer}>
                    <div className={classes.PhoneNumberAndEmailContainer}>
                        <p>Phone: </p>
                        <p>Email: </p>
                    </div>
                    <div className={classes.ActualContactInfoContainer}>
                        <p>(346) 495-5161</p>
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
                            <div className={classes.NameInputContainer}>
                                <label form="name">Name</label>
                                <input type="text" id="name" placeholder="Your name.." />
                            </div>
                            <div className={classes.SubjectInputContainer}>
                                <label form="subject">Subject</label>
                                <input type="text" id="subject" placeholder="Subject.." />
                            </div>
                            <div className={classes.EmailInputContainer}>
                                <label form="subject">Email</label>
                                <input type="email" id="email" placeholder="Email.." />
                            </div>
                            <div className={classes.EmailBodyInputContainer}>
                                <textarea type="text" id="emailBody" placeholder="Email body.." />
                            </div>
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