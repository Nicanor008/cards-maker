'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ChromePicker } from 'react-color'
import {
    InputComponent,
    TextAreaInputComponent,
    CheckBoxComponent,
} from '../../components/common/input'
import * as Actions from '../../store/actions/cards'
import './cards.css'

import TodoList from '../../images/todoList.svg'

class CreateCards extends Component {
    state = {
        name: '',
        message: '',
        borderPresent: false,
        textColor: '',
        textStyle: '',
        borderStyle: '',
        borderPresent: '',
        displayColorPicker: false,
    }

    onInputChange = e => {
        if (e.target.name === 'borderPresent' && e.target.value === 'on') {
            this.setState({
                borderPresent: !this.state.borderPresent,
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value,
            })
        }
    }

    onSubmitCard = () => {
        const { AddNewCard } = this.props
        let {
            name,
            message,
            borderPresent,
            textColor,
            textStyle,
            borderStyle,
        } = this.state
        const data = {
            name,
            message,
            borderPresent,
            textColor,
            textStyle,
            borderStyle,
        }
        return AddNewCard(data)
    }

    onChange = color => {
        console.log(color)
    }

    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    }

    handleClose = () => {
        this.setState({ displayColorPicker: false })
    }

    render() {
        const { cards } = this.props
        const { name, message, borderPresent } = this.state
        const popover = {
            position: 'absolute',
            zIndex: '2',
        }
        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        }
        return (
            <div className="container columnDescriptionWrapper">
                <div className="columns">
                    <div className="column">
                        <InputComponent
                            labelName="Activity Name"
                            placeholderText="e.g. Wedding or Birthday"
                            leftInputIcon="fa fa-calendar"
                            onchange={this.onInputChange}
                            error={cards.name === ''}
                        />
                        <TextAreaInputComponent
                            onchange={this.onInputChange}
                            error={cards.message === ''}
                        />
                        <div className="columns">
                            <div className="column">
                                <>
                                    <button
                                        onClick={this.handleClick}
                                        className="button is-primary"
                                    >
                                        Pick Color
                                    </button>
                                    {this.state.displayColorPicker ? (
                                        <div style={popover}>
                                            <div
                                                style={cover}
                                                onClick={this.handleClose}
                                            />
                                            <ChromePicker />
                                        </div>
                                    ) : null}
                                </>
                            </div>
                            <div className="column">
                                <CheckBoxComponent
                                    onchange={this.onInputChange}
                                />
                            </div>
                        </div>

                        <button
                            className={`button is-danger is-outlined is-fullwidth is-focused ${cards.loading &&
                                `is-loading`}`}
                            onClick={() => this.onSubmitCard()}
                        >
                            Create Card
                        </button>
                    </div>
                    <div className="column">
                        {name === '' ? (
                            <center>
                                <img
                                    alt="Arrange Data"
                                    src={TodoList}
                                    width="400"
                                />
                            </center>
                        ) : (
                            <div>
                                <center>
                                    <h1 className="title">Preview Card</h1>
                                    <div
                                        className={
                                            borderPresent && `previewWrapper`
                                        }
                                    >
                                        <br />
                                        <h1>{name}</h1>
                                        <br />
                                        <p>{message}</p>
                                        <br />
                                    </div>
                                </center>
                                {message && (
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
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({ cards: state.cardsReducer })

const mapDispatchToProps = {
    AddNewCard: Actions.CardsRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCards)
