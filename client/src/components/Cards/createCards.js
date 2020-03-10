import React from 'react'
import {
    InputComponent,
    TextAreaInputComponent,
    CheckBoxComponent,
} from '../common/input'

function CreateCards() {
    return (
        <div className="container columnDescriptionWrapper">
            <div className="columns">
                <div className="column">
                    <InputComponent
                        labelName="Activity Name"
                        placeholderText="e.g. Wedding or Birthday"
                        leftInputIcon="fa fa-calendar"
                    />
                    <TextAreaInputComponent />
                    <CheckBoxComponent />

                    <button class="button is-danger is-outlined is-fullwidth is-focused">
                        Danger
                    </button>
                </div>
                <div className="column">
                    <center>Input Result Window</center>
                </div>
            </div>
        </div>
    )
}

export default CreateCards
