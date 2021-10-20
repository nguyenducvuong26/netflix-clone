import ReactDOM from "react-dom";
import React, { useContext } from "react";
import classes from "./ModalHelper.module.css";
import { DetailsContext } from "../../store/details";
import { CSSTransition } from "react-transition-group";
import { Backdrop, Modal } from "./Modal";

const DetailsModal = () => {
    const { movieDetails } = useContext(DetailsContext);
    return (
        <CSSTransition
            in={!!movieDetails}
            timeout={500}
            mountOnEnter
            unmountOnExit
            classNames={{
                enter: "",
                enterActive: classes.appear,
                exit: "",
                exitActive: classes.disappear,
            }}
        >
            <Modal />
        </CSSTransition>
    );
};

function ModalHelper() {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop />,
                document.getElementById("backdrop")
            )}
            {ReactDOM.createPortal(
                <DetailsModal />,
                document.getElementById("modal")
            )}
        </React.Fragment>
    );
}

export default ModalHelper;
