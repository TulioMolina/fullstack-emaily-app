import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails, { sanitizeEmails } from "../../utils/validateEmails";
import formFields from "./formFields";

class SurveyForm extends Component {
  renderFields() {
    return formFields.map(({ name, label }) => (
      <Field component={SurveyField} name={name} label={label} key={name} />
    ));
  }

  onFormSubmit = (values) => {
    values.recipients = sanitizeEmails(values.recipients);
    this.props.onSurveySubmit();
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit((values) =>
            this.onFormSubmit(values)
          )}
        >
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors = {};
  errors.recipients = validateEmails(values.recipients || "");
  formFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a value`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false,
})(SurveyForm);
