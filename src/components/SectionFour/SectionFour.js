import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import classes from './SectionFour.module.css';

import Modal from "../Modal/Modal";

const SectionFour = () => {
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [emailModalContent, setEmailModalContent] = useState(null);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_rr4njjb', 'template_a7eavgk', form.current, 'F17aNPGtv-ZhXXlcs')
            .then((result) => {
            setShowEmailModal(true);
            setEmailModalContent('Thank you for your inquiry! It has been received!');
                console.log(result.text);
            }, (error) => {
            setShowEmailModal(true);
            setEmailModalContent('Oops! There seems to have been an error! Please check you entered your info correctly.');
                console.log(error.text);
            });
    };

    let modal = null;
    if (showEmailModal) {
        modal = <Modal
        setShow={setShowEmailModal}
        content={emailModalContent}/>
    }

    return (
        <div className={classes.SectionFourContainer} id="ContactMe">
            {modal}
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
                        <form
                        className={classes.Form}
                        onSubmit={sendEmail}
                        ref={form}>
                            <div className={classes.NameInputContainer}>
                                <label>Name</label>
                                <input type="text"
                                id="from_name"
                                name="from_name"
                                placeholder="Your name.." />
                            </div>
                            <div className={classes.SubjectInputContainer}>
                                <label>Subject</label>
                                <input type="text"
                                id="subject"
                                name="subject"
                                placeholder="Subject.." />
                            </div>
                            <div className={classes.EmailInputContainer}>
                                <label>Email</label>
                                <input type="email"
                                id="from_email"
                                name="from_email"
                                placeholder="Email.." />
                            </div>
                            <div className={classes.EmailMessageInputContainer}>
                                <textarea type="text"
                                id="message"
                                name="message"
                                placeholder="message.." />
                            </div>
                            <div className={classes.SendEmail}>
                                <input type="submit" value="Send" />
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