import { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const Backdrop = () => {
    return <div className={classes.backdrop} onClick={props.onClick}></div>;
  };

  const ModalView = (props) => {
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
  };
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("modalview")
      )}
      ;
      {ReactDom.createPortal(
        <ModalView>{props.children}</ModalView>,
        document.getElementById("modalview")
      )}
      ;
    </Fragment>
  );
};
export default Modal;
