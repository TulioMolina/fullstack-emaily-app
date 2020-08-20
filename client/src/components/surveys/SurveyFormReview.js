import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import formFields from "./formFields";
import { submitSurvey } from "../../actions";

const SurveyFormReview = ({
  onCancel,
  surveyFormValues,
  submitSurvey,
  history,
}) => {
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
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green btn-flat white-text right"
        onClick={() => submitSurvey(surveyFormValues, history)}
      >
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    surveyFormValues: state.form.surveyForm.values,
  };
};

export default connect(mapStateToProps, { submitSurvey })(
  withRouter(SurveyFormReview)
);
