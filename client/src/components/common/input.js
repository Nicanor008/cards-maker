import React from 'react'

export const InputComponent = props => {
    return (
        <div className="field">
            <label className="label">
                {props.labelName}
                {props.error && (
                    <span className="errorLabel">::Required field</span>
                )}
            </label>
            <div className="control has-icons-left has-icons-right">
                <input
                    className={`input ${
                        props.error ? `is-danger` : `is-success`
                    }`}
                    type="text"
                    placeholder={props.placeholderText}
                    onChange={props.onchange}
                    name="name"
                />
                <span className="icon is-small is-left">
                    <i className={props.leftInputIcon}></i>
                </span>
            </div>
        </div>
    )
}

// text area panel
export const TextAreaInputComponent = props => {
    return (
        <div className="field">
            <label className="label">
                Message
                {props.error && (
                    <span className="errorLabel"> ::Required field</span>
                )}
            </label>
            <div className="control">
                <textarea
                    className={`textarea ${props.error && `is-danger`}`}
                    name="message"
                    placeholder="Event Card message"
                    onChange={props.onchange}
                ></textarea>
            </div>
        </div>
    )
}

// checkbox
export const CheckBoxComponent = props => {
    return (
        <div className="field">
            <div className="control">
                <label className="checkbox" htmlFor="checkbox">
                    <input
                        type="checkbox"
                        id="checkbox"
                        name="borderPresent"
                        onChange={props.onchange}
                    />{' '}
                    Add Unique Border
                </label>
            </div>
        </div>
    )
}
