import React from 'react'
import './modal.css'
import CloseIcon from '../../images/closeIcon.svg'
import { Loader } from '../common/loader'
import { Link } from 'react-router-dom'
// // import ShareButton from '../cards/shareButton'
// import jsPDF from 'jspdf'
// import { DownloadCard } from '../../containers/Cards/downloadCard'

const onClickDownload = (props) => {
    // var doc = new jsPDF({
    //     orientation: 'portrait',
    //   })

    //   doc.setFont('courier')
       
    //   doc.text(props.name, 10, 10)
    //   doc.text(props.message, 10, 20)
    //   doc.text('Third Hello world!', 10, 30)
    //   doc.text('Forth Hello world!', 10, 40)
    //   doc.text('Test On Second', 10, 50)
    //   doc.text('Test On 3rd', 10, 60)
    // //   doc.save('two-by-four.pdf')
    // return console.log(">>>>>>>>>>>........>>>>>>>>>>....got it..............>>>......", props)
}

const Modal = ({
    handleClose,
    show,
    children,
    loading,
    isAuth,
    onClickDelete,
    id,
    downloadCardDetails
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

                                {/* <button
                                    className="button"
                                    onClick={() =>  onClickDownload(downloadCardDetails)}
                                >
                                    <span className="icon">
                                        <i
                                            className="fa fa-trash viewCardIcons"
                                            aria-hidden="true"
                                        ></i>
                                    </span>
                                    <span>Download</span>
                                </button> */}
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
