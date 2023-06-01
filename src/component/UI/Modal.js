import classes from './Modal.module.css';
import React from 'react'
import ReactDOM from 'react-dom';

const Backdrop = props => {
     return (<div className={classes.backdrop} onClick={props.comfirm}></div>)
}

const ModalOverLay = props => {
     return (
          <div className={classes.modal}>
               <div className={classes.content}>
                    {props.children}
               </div>
          </div>
     )
}

const portalElement = document.getElementById('overlay-root')

const Modal = props => {
     return (
          <>
               {ReactDOM.createPortal(<Backdrop comfirm={props.comfirm} />, portalElement)}
               {ReactDOM.createPortal(
                    <ModalOverLay>
                         {props.children}
                    </ModalOverLay>
                    , portalElement)}
          </>
     )
}

export default Modal;