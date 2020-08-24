import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
import Auth from "../Auth";

class SurveyNew extends React.Component {
  state = { showFormReview: false };

  onSurveySubmit = () => {
    this.setState({ showFormReview: true });
  };

  onCancel = () => {
    this.setState({ showFormReview: false });
  };

  renderNotLogged() {
    return <h5 style={{ textAlign: "center" }}>You must log in</h5>;
  }

  renderLogged() {
    if (this.props.auth === null) {
      return;
    }
    if (this.props.auth.credits === 0) {
      return (
        <h5 style={{ textAlign: "center" }}>
          You need one credit to create a survey
        </h5>
      );
    }
    if (!this.state.showFormReview) {
      return <SurveyForm onSurveySubmit={this.onSurveySubmit} />;
    }
    return <SurveyFormReview onCancel={this.onCancel} />;
  }

  render() {
    return (
      <Auth logged={this.renderLogged()} notLogged={this.renderNotLogged()} />
    );
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
