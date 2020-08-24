import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class SurveyList extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    switch (this.props.surveys) {
      case null:
        return;
      default:
        if (this.props.surveys.length === 0) {
          return (
            <h5 style={{ textAlign: "center" }}>
              It seems you haven't created any survey just yet
            </h5>
          );
        }
        return this.props.surveys.reverse().map((survey) => {
          return (
            <div className="card" key={survey._id}>
              <div className="card-content">
                <span className="card-title">{survey.title}</span>
                <p>{survey.body}</p>
                <p className="right">
                  Sent on: {new Date(survey.dateSent).toLocaleDateString()}
                </p>
              </div>
              <div className="card-action">
                <a>Yes: {survey.yes}</a>
                <a>No: {survey.no}</a>
              </div>
            </div>
          );
        });
    }
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    surveys: state.surveys,
  };
};

export default connect(mapStateToProps, actions)(SurveyList);
