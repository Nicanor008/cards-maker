import React from 'react'
import './modal.css'
import CloseIcon from '../../images/closeIcon.svg'
import { Loader } from '../common/loader'
import { Link } from 'react-router-dom'
// // import ShareButton from '../cards/shareButton'

const Modal = ({
    handleClose,
    show,
    children,
    loading,
    isAuth,
    onClickDelete,
    id,
}) => {
    return (
        <div className={show ? 'modal display-block' : 'modal display-none'}>
            {loading ? (
                <Loader />
            ) : (
                <section className="modal-main">
                    <div className="modalHeader">
                        {isAuth ? (
                            <div className="ModifyIcons">
                                <Link
                                    to={`/update-card/${id}`}
                                    className="button"
                                >
                                    <span className="icon">
                                        <i
                                            className="fa fa-pencil viewCardIcons"
                                            aria-hidden="true"
                                        ></i>
                                    </span>
                                    <span>Edit</span>
                                </Link>

                                <button
                                    className="button"
                                    onClick={() => onClickDelete(id)}
                                >
                                    <span className="icon">
                                        <i
                                            className="fa fa-trash viewCardIcons"
                                            aria-hidden="true"
                                        ></i>
                                    </span>
                                    <span>Delete</span>
                                </button>
                            </div>
                        ) : (
                            <p>
                                <b>View Event Card</b>
                            </p>
                        )}
                        <div>
                            <img
                                src={CloseIcon}
                                alt="Close Icon"
                                className="closeModalBtn"
                                onClick={handleClose}
                            />
                            
                        </div>
                    </div>
                    {children}
                </section>
            )}
        </div>
    )
}

export default Modal
