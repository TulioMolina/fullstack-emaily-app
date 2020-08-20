import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
  state = { showFormReview: false };

  onSurveySubmit = () => {
    this.setState({ showFormReview: true });
  };

  onCancel = () => {
    this.setState({ showFormReview: false });
  };

  renderContent() {
    if (!this.state.showFormReview) {
      return <SurveyForm onSurveySubmit={this.onSurveySubmit} />;
    }
    return <SurveyFormReview onCancel={this.onCancel} />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default SurveyNew;