import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import SurveyList from "./surveys/SurveyList";
import Auth from "./Auth";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderNotLogged() {
    return <h5 style={{ textAlign: "center" }}>You must log in</h5>;
  }

  renderLogged() {
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

  render() {
    return (
      <div>
        <Auth logged={this.renderLogged()} notLogged={this.renderNotLogged()} />
      </div>
    );
  }
}

export default connect(null, actions)(Dashboard);
