import React, { Component } from 'react';
import css from '../Modal/Modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    const { onClose } = this.props;
    window.addEventListener('keydown', e => {
      console.log(e.code);
      if (e.code === 'Escape') {
        onClose()
      }
    });
  }

  render() {
    const { imgData } = this.props;
    console.log(imgData);

    return createPortal(
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src={imgData.src} alt={imgData.alt} />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
