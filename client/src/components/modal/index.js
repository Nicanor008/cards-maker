import React from 'react'
import './modal.css'
import CloseIcon from '../../images/closeIcon.svg'
import { Loader } from '../common/loader'

const Modal = ({ handleClose, show, children, loading, isAuth }) => {
    return (
        <div className={show ? 'modal display-block' : 'modal display-none'}>
            {loading ? (
                <Loader />
            ) : (
                <section className="modal-main">
                    <div className="modalHeader">
                        {isAuth ? (
                            <div className="ModifyIcons">
                                <button class="button">
                                    <span class="icon">
                                        <i
                                            class="fa fa-pencil viewCardIcons"
                                            aria-hidden="true"
                                        ></i>
                                    </span>
                                    <span>Edit</span>
                                </button>

                                <button class="button">
                                    <span class="icon">
                                        <i
                                            className="fa fa-trash viewCardIcons"
                                            aria-hidden="true"
                                        ></i>
                                    </span>
                                    <span>Delete</span>
                                </button>
                            </div>
                        ): <p><b>View Event Card</b></p>
                        }
                        <img
                            src={CloseIcon}
                            alt="Close Icon"
                            className="closeModalBtn"
                            onClick={handleClose}
                        />
                    </div>
                    {children}
                </section>
            )}
        </div>
    )
}

export default Modal
