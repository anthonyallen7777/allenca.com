import React, { useEffect, useRef } from "react";
import classes from './Modal.module.css';

const Modal = (props) => {
    const { onClickOutside, setShow, content } = props;
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            onClickOutside && onClickOutside();
            setShow(false);
        }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
        document.removeEventListener('click', handleClickOutside, true);
        };
    }, [onClickOutside, props, setShow]);

    let modalContent = <p>Loading...</p>;

    if (content) {
        modalContent = content;
    }

    return (
        <div className={classes.ModalContainer} ref={ref}>
            {modalContent}
        </div>
    );
};

export default Modal;