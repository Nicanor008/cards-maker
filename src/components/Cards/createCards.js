import React from "react";
import { InputComponent, TextAreaInputComponent } from "../common/input";

const CreateCards = () => {
  return (
    <div className="container columnDescriptionWrapper">
      <div className="columns">
        <div className="column">
          <InputComponent
            labelName="Activity"
            placeholderText="e.g. Wedding or Birthday"
            leftInputIcon="fa fa-calendar"
          />
          <TextAreaInputComponent />
        </div>
        <div className="column">
          <center>Input Result Window</center>
        </div>
      </div>
    </div>
  );
};

export default CreateCards;
