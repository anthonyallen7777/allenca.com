import React, { useEffect, useRef, useState } from "react";
import SectionOneProfile from '../../assets/SectionOneProfile.png';
import LinkedInLogo from '../../assets/LI-In-Bug.png';
import GithubLogo from '../../assets/GitHub-Mark-32px.png';
//CSS
import CSSTransition from 'react-transition-group/CSSTransition';
import '../../css/SectionOneTextAnimation.css';
import '../../css/SectionOneProfileAnimation.css';
import classes from './SectionOne.module.css';

const textAnimationTiming = {
    enter: 1000,
    exit: 1000
}

const profileAnimationTiming = {
    enter: 3000
}

const SectionOne = () => {
    const profileRefMain = useRef(null);
    const profileRef1 = useRef(null);
    const profileRef2 = useRef(null);
    const profileRef3 = useRef(null);
    const profileRef4 = useRef(null);
    const profileTextOne = useRef(null);
    const profileTextTwo = useRef(null);
    const [showTextAnimation, setShowTextAnimation] = useState(true);
    const [showAnimation, setShowAnimation] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
        //text animation
        setInterval(() => {
            setShowTextAnimation(true);
            setTimeout(() => {
                setShowTextAnimation(false);
            }, 1999);
        }, 3000);

        //picture animation
        setTimeout(() => {
            setShowAnimation(true);
        }, 1000);
    }, []);

    let content = null;
    if (!loading) {
        content = (
            <div className={classes.SectionOneContainer} id="Landing">
                <div className={classes.LeftSide}>
                    <div className={classes.HelloAndTitle}>
                        <div className={classes.HelloText}>
                            <CSSTransition
                            in={showTextAnimation}
                            timeout={textAnimationTiming}
                            classNames={'fade-sectionOneFirstText'}
                            nodeRef={profileTextOne}
                            >
                                <p ref={profileTextOne}>Hello, my name is</p>
                            </CSSTransition>
                        </div>
                        <div className={classes.TitleContainer}>
                            <p>Christopher</p>
                            <p>Allen</p>
                        </div>
                    </div>
                    <div className={classes.SectionOneInfoContainer}>
                        <div className={classes.Iam}>
                            <CSSTransition
                            in={showTextAnimation}
                            timeout={textAnimationTiming}
                            classNames={'fade-sectionOneFirstText'}
                            nodeRef={profileTextTwo}
                            >
                                <p ref={profileTextTwo}>I am a</p>
                            </CSSTransition>
                        </div>
                        
                        <p className={classes.ReactTitle}>React Developer</p>
                        <div className={classes.Location}>
                            <p>From Magnolia, TX</p>
                            <span
                            className={[classes.LocationLogo, "material-icons"].join(' ')}
                            >location_on</span>
                        </div>
                        <div className={classes.SectionOneLinks}>
                            <a
                            href="https://www.linkedin.com/in/ChrisAnthonyAllen"
                            target="_blank" rel="noreferrer noopener">
                                <img
                                className={classes.Logo}
                                src={LinkedInLogo} alt="LinkedIn Logo" />
                            </a>
                            <a
                            href="https://github.com/anthonyallen7777"
                            target="_blank" rel="noreferrer noopener">
                                <img
                                className={classes.Logo}
                                src={GithubLogo} alt="Github Logo" />
                            </a>
                            <a href="#ContactMe">
                                <span
                                className={[classes.Logo, "material-icons"].join(' ')}
                                >mail</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.RightSide}>
                    <div className={classes.ProfileContainer}>
                        <CSSTransition
                        mountOnEnter
                        in={showAnimation}
                        timeout={profileAnimationTiming}
                        classNames={'fade-sectionOneProfile4'}
                        nodeRef={profileRef4}
                        >
                            <img src={SectionOneProfile}
                            className={classes.SectionOneProfileFilter4}
                            ref={profileRef4}
                            alt="Filtered Profile4" />
                        </CSSTransition>
                        <CSSTransition
                        mountOnEnter
                        in={showAnimation}
                        timeout={profileAnimationTiming}
                        classNames={'fade-sectionOneProfile3'}
                        nodeRef={profileRef3}
                        >
                            <img src={SectionOneProfile}
                            className={classes.SectionOneProfileFilter3}
                            ref={profileRef3}
                            alt="Filtered Profile3" />
                        </CSSTransition>
                        <CSSTransition
                        mountOnEnter
                        in={showAnimation}
                        timeout={profileAnimationTiming}
                        classNames={'fade-sectionOneProfile2'}
                        nodeRef={profileRef2}
                        >
                            <img src={SectionOneProfile}
                            className={classes.SectionOneProfileFilter2}
                            ref={profileRef2}
                            alt="Filtered Profile2" />
                        </CSSTransition>
                        <CSSTransition
                        mountOnEnter
                        in={showAnimation}
                        timeout={profileAnimationTiming}
                        classNames={'fade-sectionOneProfile1'}
                        nodeRef={profileRef1}
                        >
                            <img src={SectionOneProfile}
                            className={classes.SectionOneProfileFilter1}
                            ref={profileRef1}
                            alt="Filtered Profile1" />
                        </CSSTransition>
                        <CSSTransition
                        mountOnEnter
                        in={showAnimation}
                        timeout={profileAnimationTiming}
                        classNames={'fade-sectionOneProfileMain'}
                        nodeRef={profileRefMain}
                        >
                            <img src={SectionOneProfile}
                            className={classes.SectionOneProfileMain}
                            ref={profileRefMain}
                            alt="A profile Christopher Allen" />
                        </CSSTransition>
                    </div>
                </div>
            </div>
        );
    }
    
    return content;
};

export default SectionOne;