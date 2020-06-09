import React from 'react'
import './modal.css'
import CloseIcon from '../../images/closeIcon.svg'

const Modal = ({ handleClose, show, children }) => {
    return (
        <div className={show ? 'modal display-block' : 'modal display-none'}>
            <section className="modal-main">
                <img
                    src={CloseIcon}
                    alt="Close Icon"
                    className="closeModalBtn"
                    onClick={handleClose}
                />
                <br />
                {children}
            </section>
        </div>
    )
}

export default Modal
