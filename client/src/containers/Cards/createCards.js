'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import toastr from 'toastr'
import {
    TextAreaInputComponent,
    DropdownBorderComponent,
    DropdownBorderWidth,
    CheckBoxComponent,
} from '../../components/common/input'
import * as Actions from '../../store/actions/cards'
import './cards.css'
import Picker from 'vanilla-picker'
import ReactQuill from 'react-quill'
import { PreviewCards } from '../../components/cards/previewCards'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import { formats, modules } from '../../utils/textAreaFormats'
import Datetime from 'react-datetime'
import '../../assets/react-date-time.css'

class CreateCards extends Component {
    state = {
        tags: [],
        name: '',
        message: '',
        border: 'groove',
        borderWidth: '1px',
        borderColor: 'pink',
        backgroundColor: '',
        useTemplate: false,
        isPublic: false,
        modalOpen: false,
        eventDateTime: '',
        nameError: 0,
    }

    onCheckBoxChange = () => {
        this.setState({
            isPublic: !this.state.isPublic,
        })
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onDateTimeInputChange = (target) => {
        this.setState({
            eventDateTime: target._d,
        })
    }

    onEnterTags = (e) => {
        const { tags } = this.state
        if (e.target.name === 'tag' && e.charCode === 13) {
            tags.push(e.target.value)
        }
    }

    onTitleNameChange = (html) => {
        this.setState({ nameError: html.length, name: html })
    }

    onTextAreaChange = (html) => {
        this.setState({ message: html })
    }

    onSubmitCard = () => {
        const { AddNewCard } = this.props

        if(!localStorage.getItem('token')){
            return toastr.warning('Login to Create An Event Card', 'Failed')
        }
        let {
            name,
            message,
            backgroundColor,
            border,
            useTemplate,
            borderWidth,
            borderColor,
            isPublic,
            tags,
            eventDateTime,
            nameError,
        } = this.state
        const data = {
            name,
            message,
            backgroundColor,
            border: `${borderWidth} ${border} ${borderColor}`,
            useTemplate,
            isPublic,
            tags,
            eventDateTime,
        }
        if (nameError > 140) {
            return toastr.error(
                'Character Maximum Limit is exceeded on the Event title',
                'Failed!!'
            )
        }
        return AddNewCard(data)
    }

    ColorPicker = (e) => {
        const PreviewWrapper = document.getElementById('preview')
        if (e.target.name === 'borderColor') {
            const popupCustom = new Picker({
                parent: PreviewWrapper,
                popup: 'left',
                color: 'rgb(248, 103, 175)',
                editorFormat: 'rgba',
                onChange: (color) => {
                    this.setState({ borderColor: color.hex })
                    PreviewWrapper.style.borderColor = color.rgbaString
                },
            })
            return popupCustom.openHandler()
        } else {
            const popupCustom = new Picker({
                parent: PreviewWrapper,
                popup: 'left',
                color: 'rgb(248, 103, 175)',
                editorFormat: 'rgba',
                onChange: (color) => {
                    this.setState({ backgroundColor: color.hex })
                    PreviewWrapper.style.backgroundColor = color.rgbaString
                    PreviewWrapper.style.borderBlockEndColor = color.rgbaString
                },
            })
            return popupCustom.openHandler()
        }
    }

    handleChangeTags = (tags, e) => {
        this.setState({ tags })
    }

    showModal = () => {
        this.setState({ modalOpen: true })
    }

    hideModal = () => {
        this.setState({ modalOpen: false })
    }

    render() {
        const { cards } = this.props
        const {
            name,
            message,
            border,
            borderWidth,
            borderColor,
            tags,
            backgroundColor,
            nameError,
            eventDateTime
        } = this.state
        const yesterday = Datetime.moment().subtract(1, 'day')
        return (
            <div className="container columnDescriptionWrapper">
                <div className="columns">
                    <div className="column">
                        {/* title input */}
                        <p className="title" style={{ marginBottom: 0 }}>
                            Create Event Card
                        </p>
                        {!localStorage.getItem('token') && 
                        <span
                            className="subtitle"
                            style={{ fontSize: 'small' }}
                        >
                            You Must Login to Create an Event Card. This is just
                            a playground
                        </span>}
                        <TextAreaInputComponent
                            onchange={this.onTitleNameChange}
                            error={cards.name === ''}
                            nameError={nameError}
                            value={name}
                            labelName="Event Card Title"
                            placeholder="Event Card Title"
                        />

                        {/* message input */}
                        <label className="label">Message</label>
                        <ReactQuill
                            onChange={this.onTextAreaChange}
                            error={cards.message === ''}
                            value={message}
                            placeholder="Event Message. Make it as juicy as possible"
                            theme="snow"
                            modules={modules}
                            formats={formats}
                        />

                        {/* date details */}
                        <div className="dateTimeDetails">
                            <label className="label">
                                When is this Event happening?
                            </label>
                            <Datetime
                                inputProps={{
                                    placeholder: 'MM/DD/YYYY hh:mm AM',
                                }}
                                name="eventDateTime"
                                onChange={this.onDateTimeInputChange}
                                isValidDate={function (current) {
                                    return current.isAfter(yesterday)
                                }}
                            />
                        </div>

                        {/* border properties */}
                        <div
                            className="columns"
                            style={{ paddingTop: '0.5rem' }}
                        >
                            <div className="column">
                                <DropdownBorderWidth
                                    onSelectChange={this.onInputChange}
                                    borderWidth={borderWidth}
                                />
                            </div>
                            <div className="column">
                                <DropdownBorderComponent
                                    onSelectChange={this.onInputChange}
                                    border={border}
                                />
                            </div>
                            <div className="column">
                                <label className="label">Border Color</label>
                                <button
                                    onClick={this.ColorPicker}
                                    className="button is-pink"
                                    name="borderColor"
                                    style={{
                                        backgroundColor: `${borderColor}`,
                                    }}
                                >
                                    {borderColor}
                                </button>
                            </div>
                        </div>

                        {/* background color */}
                        <div className="columns">
                            <div className="column">
                                <button
                                    onClick={this.ColorPicker}
                                    className="button is-primary"
                                >
                                    Card Background Color
                                </button>
                            </div>
                            <div
                                className="column"
                                style={{ paddingTop: '1.3rem' }}
                            >
                                {/* post publicly */}
                                <CheckBoxComponent
                                    onchange={this.onCheckBoxChange}
                                    checkboxName="Public"
                                    name="isPublic"
                                />
                            </div>
                        </div>

                        <TagsInput
                            value={tags}
                            onChange={this.handleChangeTags}
                            placeholder="Card Tags"
                        />
                        <br />
                        <button
                            className={`button is-danger is-outlined is-fullwidth is-focused ${
                                cards.loading && `is-loading`
                            }`}
                            onClick={() => this.onSubmitCard()}
                        >
                            Create Card
                        </button>
                    </div>
                    {/* preview the created card */}
                    <div className="column">
                        <PreviewCards
                            name={name}
                            message={message}
                            border={border}
                            borderWidth={borderWidth}
                            borderColor={borderColor}
                            onViewModal={this.showModal}
                            modalOpen={this.state.modalOpen}
                            onCloseModal={this.hideModal}
                            backgroundColor={backgroundColor}
                            eventDateTime={eventDateTime}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ cards: state.cardsReducer })

const mapDispatchToProps = {
    AddNewCard: Actions.CardsRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateCards)
