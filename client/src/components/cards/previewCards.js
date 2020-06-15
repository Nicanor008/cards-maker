import React from 'react'
import TodoListPicture from '../../images/todoList.svg'
import Modal from '../modal'
import DecoratedLine from '../../images/DecoratedLine.svg'
import SetInnerHTML from '../../utils/setInnerHTML'

export const PreviewCards = (props) => {
    return (
        <div>
            <center>
                <h1 className="title">Preview Card</h1>
                <div
                    style={{
                        border: `${props.borderWidth} ${props.border} ${props.borderColor}`,
                        margin: '1rem',
                        borderRadius: '2px',
                    }}
                    id="preview"
                >
                    <br />
                    {props.name === '' ? (
                        <center>
                            <img
                                alt="Arrange Data"
                                src={TodoListPicture}
                                width="400"
                            />
                        </center>
                    ) : (
                        <>
                            {SetInnerHTML(props.name, '0.5rem')}
                            <img src={DecoratedLine} alt="Horizontal line" />
                            {SetInnerHTML(props.message, '0.5rem')}
                        </>
                    )}
                    <br />
                </div>
            </center>

            {props.message && (
                <>
                    <button className="button is-info is-pulled-right previewButtons">
                        Share
                    </button>
                    <button className="button is-primary is-pulled-right previewButtons">
                        Download
                    </button>
                    <button
                        className="button is-success is-pulled-right previewButtons"
                        onClick={props.onViewModal}
                    >
                        View
                    </button>
                    {/* <Link
                        to="/template"
                        className="button is-success is-pulled-right previewButtons"
                    >
                        Choose Templates
                    </Link> */}

                    {/* modal */}
                    <Modal
                        show={props.modalOpen}
                        handleClose={props.onCloseModal}
                    >
                        <div
                            style={{
                                border: `${props.borderWidth} ${props.border} ${props.borderColor}`,
                                margin: '1rem',
                                borderRadius: '2px',
                                padding: '2rem',
                                backgroundColor: `${props.backgroundColor}`
                            }}
                        >
                            <center>
                                {SetInnerHTML(props.name)}
                                <img
                                    src={DecoratedLine}
                                    alt="Horizontal line"
                                />
                                {SetInnerHTML(props.message)}
                            </center>
                        </div>
                    </Modal>
                </>
            )}
        </div>
    )
}
