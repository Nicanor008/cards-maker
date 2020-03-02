import React from "react";

export const InputComponent = props => {
  return (
    <div className="field">
      <label className="label">{props.labelName}</label>
      <div className="control has-icons-left has-icons-right">
        <input
          className="input is-success"
          type="text"
          placeholder={props.placeholderText}
        />
        <span className="icon is-small is-left">
          <i className={props.leftInputIcon}></i>
        </span>

        {/* fire this icon after or as user throttles */}
        {/* <span className="icon is-small is-right">
          <i className="fas fa-check"></i>
        </span> */}
      </div>

      {/* result window(either true or false) */}
      {/* <p className="help is-success">This username is available</p> */}
    </div>
  );
};

// text area panel
export const TextAreaInputComponent = () => {
  return (
    <div className="field">
      <label className="label">Message</label>
      <div className="control">
        <textarea className="textarea" placeholder="Textarea"></textarea>
      </div>
    </div>
  );
};

// checkbox
export const CheckBoxComponent = () => {
  return (
    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox" />{" "} Add Background Color
        </label>
      </div>
    </div>
  );
};
