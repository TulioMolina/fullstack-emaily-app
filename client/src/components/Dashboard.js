import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import SurveyList from "./surveys/SurveyList";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <h5>You must log in</h5>;
      default:
        return (
          <div>
            <SurveyList />
            <div className="fixed-action-btn">
              <Link to="/surveys/new" className="btn-floating btn-large red">
                <i className="material-icons">add</i>
              </Link>
            </div>
          </div>
        );
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

export default connect(mapStateToProps, actions)(Dashboard);
