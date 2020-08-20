import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmails";

const FIELDS = [
  { name: "title", label: "Survey Title" },
  { name: "subject", label: "Survey Subject" },
  { name: "body", label: "Email Body" },
  { name: "emails", label: "Recipient List" },
];

class SurveyForm extends Component {
  renderFields() {
    return FIELDS.map(({ name, label }) => (
      <Field component={SurveyField} name={name} label={label} key={name} />
    ));
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
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
  errors.emails = validateEmails(values.emails || "");
  FIELDS.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a value`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: "surveyForm",
})(SurveyForm);
