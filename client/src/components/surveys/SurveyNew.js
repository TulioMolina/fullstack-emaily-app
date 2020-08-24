import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends React.Component {
  state = { showFormReview: false };

  onSurveySubmit = () => {
    this.setState({ showFormReview: true });
  };

  onCancel = () => {
    this.setState({ showFormReview: false });
  };

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <h5 style={{ textAlign: "center" }}>You must log in</h5>;
      default:
        if (!this.state.showFormReview) {
          return <SurveyForm onSurveySubmit={this.onSurveySubmit} />;
        }
        return <SurveyFormReview onCancel={this.onCancel} />;
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(
  reduxForm({
    form: "surveyForm",
  })(SurveyNew)
);
