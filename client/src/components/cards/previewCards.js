import React from 'react'
import TodoListPicture from '../../images/todoList.svg'
import Modal from '../modal'
import DecoratedLine from '../../images/DecoratedLine.svg'
import SetInnerHTML from '../../utils/setInnerHTML'

export const PreviewCards = (props) => {
    return (
        <div>
            <h1 className="title">Preview Card</h1>
            <div
                style={{
                    border: `${props.borderWidth} ${props.border} ${props.borderColor}`,
                    margin: '1rem',
                    borderRadius: '2px',
                    backgroundColor: `${props.backgroundColor}`,
                    padding: '1rem',
                }}
                id="preview"
            >
                <br />
                {props.name === '' ? (
                    <img alt="Arrange Data" src={TodoListPicture} width="400" />
                ) : (
                    <>
                        {SetInnerHTML(props.name, '0.5rem')}
                        <img
                            src={DecoratedLine}
                            alt="Horizontal line"
                            className="is-5by3"
                        />
                        {SetInnerHTML(props.message, '0.5rem')}
                    </>
                )}
                <br />
            </div>

            {props.message && (
                <>
                    {/* <button className="button is-pulled-right previewButtons">
                        <ShareButton />
                    </button>
                    <button className="button is-primary is-pulled-right previewButtons">
                        Download
                    </button> */}
                    <button
                        className="button is-success is-pulled-right previewButtons"
                        onClick={props.onViewModal}
                        style={{ marginRight: '1rem' }}
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
                                backgroundColor: `${props.backgroundColor}`,
                            }}
                        >
                            {SetInnerHTML(props.name)}
                            <img src={DecoratedLine} alt="Horizontal line" />
                            {SetInnerHTML(props.message)}
                        </div>
                    </Modal>
                </>
            )}
        </div>
    )
}
