import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export const InputComponent = (props) => {
    return (
        <div className="field">
            <label className="label">
                {props.labelName}
                {props.error && (
                    <span className="errorLabel">::Required field</span>
                )}
            </label>
            <div className="control">
                <input
                    className={`input ${
                        props.error ? `is-danger` : ``
                    }`}
                    type={props.textInputType ? props.textInputType : `text`}
                    placeholder={props.placeholderText}
                    onChange={props.onchange}
                    name={props.inputName}
                    onKeyPress={props.onkeypress}
                />
            </div>
        </div>
    )
}

// text area panel
export const TextAreaInputComponent = (props) => {
    return (
        <div className="field">
            <label className="label">
                {props.labelName}
                {props.error && (
                    <span className="errorLabel"> ::Required field</span>
                )}
            </label>
            <div className="control">
                <ReactQuill
                    theme="snow"
                    value={props.value}
                    onChange={props.onchange}
                    placeholder={props.placeholder}
                />
            </div>
        </div>
    )
}

// checkbox
export const CheckBoxComponent = (props) => {
    return (
        <div className="field">
            <div className="control">
                <label className="checkbox" htmlFor="checkbox">
                    <input
                        type="checkbox"
                        id="checkbox"
                        name={props.name}
                        onChange={props.onchange}
                    />{' '}
                    {props.checkboxName}
                </label>
            </div>
        </div>
    )
}

// select border dropdown
export const DropdownBorderComponent = (props) => {
    return (
        <div className="field">
            <label className="label">Border Style</label>
            <div className="select">
                <select onChange={props.onSelectChange} name="border">
                    <option value={props.border}>{props.border}</option>
                    <option value=""></option>
                    <option value="dotted">Dotted</option>
                    <option value="solid">Solid</option>
                    <option value="double">double</option>
                    <option value="groove">groove</option>
                    <option value="ridge">ridge</option>
                    <option value="inset">inset</option>
                    <option value="outset">outset</option>
                </select>
            </div>
        </div>
    )
}

// select border width dropdown
export const DropdownBorderWidth = (props) => {
    return (
        <div className="field">
            <label className="label">Border width</label>
            <div className="select">
                <select onChange={props.onSelectChange} name="borderWidth">
                    <option value={props.borderWidth}>
                        {props.borderWidth}
                    </option>
                    <option value=""></option>
                    <option value="1px">1px</option>
                    <option value="2px">2px</option>
                    <option value="3px">3px</option>
                    <option value="4px">4px</option>
                    <option value="5px">5px</option>
                    <option value="6px">6px</option>
                    <option value="7px">7px</option>
                    <option value="8px">8px</option>
                    <option value="9px">9px</option>
                    <option value="10px">10px</option>
                </select>
            </div>
        </div>
    )
}
