import React from 'react'
import './modal.css'
import CloseIcon from '../../images/closeIcon.svg'
import { Loader } from '../common/loader'

const Modal = ({ handleClose, show, children, loading }) => {
    return (
        <div className={show ? 'modal display-block' : 'modal display-none'}>
            {loading ? (
                <Loader />
            ) : (
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
            )}
        </div>
    )
}

export default Modal
