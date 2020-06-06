import React from 'react'
import { Link } from 'react-router-dom'
import TodoListPicture from '../../images/todoList.svg'
// const test = <p>me test</p>

export const PreviewCards = (props) => {
    return (
        <div>
            {props.borderColor === '' ? (
                <center>
                    <img alt="Arrange Data" src={TodoListPicture} width="400" />
                </center>
            ) : (
                <>
                {/* {props.name.replace(/^"(.*)"$/, '$1')}*/}
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
                            {props.name}
                            <br />
                            {props.message}
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
                            <button className="button is-success is-pulled-right previewButtons">
                                View
                            </button>
                            <Link
                                to="/template"
                                className="button is-success is-pulled-right previewButtons"
                            >
                                Choose Templates
                            </Link>
                        </>
                    )}
                </>
            )}
        </div>
    )
}
