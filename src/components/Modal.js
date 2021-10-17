import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
import { useDispatch } from "react-redux";
import { modalHandler } from "../Redux/Action/actions";

const Backdrop = () => {
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch(modalHandler({ heading: "", courses: [] }));
  };
  return <div className={classes.backdrop} onClick={closeModalHandler}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {createPortal(<Backdrop />, portalElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
