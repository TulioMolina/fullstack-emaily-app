import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";

const SurveyFormReview = ({ onCancel, surveyFormValues }) => {
  const fields = formFields.map(({ name, label }) => (
    <div key={name}>
      <label>{label}</label>
      <div>{surveyFormValues[name]}</div>
    </div>
  ));
  return (
    <div>
      <h5>Please confirm your survey entries</h5>
      <div>
        <div>{fields}</div>
      </div>
      <button className="yellow darken-3 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

const mapStateToProps = ({
  form: {
    surveyForm: { values },
  },
}) => {
  return {
    surveyFormValues: values,
  };
};

export default connect(mapStateToProps)(SurveyFormReview);
