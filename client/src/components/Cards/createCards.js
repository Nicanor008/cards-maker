import React from "react";
import { Editor } from '@tinymce/tinymce-react';
import CKEditor from 'ckeditor4-react';
import { InputComponent, TextAreaInputComponent, CheckBoxComponent } from "../common/input";

function CreateCards() {

  const handleEditorChange = (e) => {
    const { handleEditorChange } = this.props;
    handleEditorChange(e.target.getContent());
  };

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
          <Editor
        initialValue={''}
        init={{
          plugins: 'link lists image',
          toolbar:
            'fontsizeselect bold italic underline alignleft aligncenter alignright alignjustify bullist numlist outdent indent image',
        }}
        onChange={handleEditorChange}
      />
      {/* <CKEditor
                    data="<p>Hello from CKEditor 4!</p>"
                /> */}
          <CheckBoxComponent />


  <button class="button is-danger is-outlined is-fullwidth is-focused">Danger</button>
        </div>
        <div className="column">
          <center>Input Result Window</center>
        </div>
      </div>
    </div>
  );
};

export default CreateCards;
