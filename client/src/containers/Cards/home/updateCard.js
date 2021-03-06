'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    TextAreaInputComponent,
    DropdownBorderComponent,
    DropdownBorderWidth,
    CheckBoxComponent,
} from '../../../components/common/input'
import * as Actions from '../../../store/actions/cards'
import '../cards.css'
import Picker from 'vanilla-picker'
import ReactQuill from 'react-quill'
import { PreviewCards } from '../../../components/cards/previewCards'
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css'
import { formats, modules } from '../../../utils/textAreaFormats'

class UpdateCardPage extends Component {
    singleCard = this.props
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
    }

    componentDidMount() {
        const { FetchSingleCard } = this.props
        const id = this.props.match.params.id
        return FetchSingleCard(id)
    }

    componentDidUpdate(prevProps) {
        const { singleCard } = this.props

        if (singleCard.data !== prevProps.singleCard.data) {
            this.setState({
                name: singleCard.data.name,
                message: singleCard.data.message,
                isPublic: singleCard.data.isPublic,
                tags: singleCard.data.tags,
                backgroundColor: singleCard.data.backgroundColor,
            })
        }
    }

    onCheckBoxChange = (data) => {
        this.setState({
            isPublic: !this.state.isPublic,
        })
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onEnterTags = (e) => {
        const { tags } = this.state
        if (e.target.name === 'tag' && e.charCode === 13) {
            tags.push(e.target.value)
        }
    }

    onTitleNameChange = (html) => {
        this.setState({ name: html })
    }

    onTextAreaChange = (html) => {
        this.setState({ message: html })
    }

    onSubmitCard = () => {
        const { UpdateCardAction } = this.props
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
        } = this.state
        const data = {
            name,
            message,
            backgroundColor,
            border: `${borderWidth} ${border} ${borderColor}`,
            useTemplate,
            isPublic,
            tags,
        }
        const id = this.props.match.params.id
        return UpdateCardAction(data, id)
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
        } else if (e.target.name === 'backgroundColor') {
            const popupCustom = new Picker({
                parent: PreviewWrapper,
                popup: 'left',
                color: 'rgb(248, 103, 175)',
                editorFormat: 'rgba',
                onChange: (color) => {
                    this.setState({ backgroundColor: color.hex })
                    PreviewWrapper.style.backgroundColor = color.rgbaString
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
        const { cards, singleCard, updateCard } = this.props
        const {
            name,
            message,
            border,
            borderWidth,
            borderColor,
            backgroundColor, tags
        } = this.state
        return (
            <div className="container columnDescriptionWrapper">
                <div className="columns">
                    <div className="column">
                        {/* title input */}
                        {singleCard.data && (
                            <>
                            <h6 className="title">Edit Event Card</h6>
                                <TextAreaInputComponent
                                    onchange={this.onTitleNameChange}
                                    error={cards.name === ''}
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
                                        <label className="label">
                                            Border Color
                                        </label>
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
                                            name="backgroundColor"
                                            style={{
                                                backgroundColor:
                                                    singleCard.data
                                                        .backgroundColor,
                                            }}
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
                                updateCard.loading && `is-loading`
                            }`}
                            onClick={() => this.onSubmitCard()}
                        >
                            Update Card
                        </button>
                        </>
                        )}
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
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    cards: state.updateCard,
    singleCard: state.singleCard,
    updateCard: state.updateCard
})

const mapDispatchToProps = {
    FetchSingleCard: Actions.FetchSingleCardRequest,
    UpdateCardAction: Actions.UpdateCardRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCardPage)
