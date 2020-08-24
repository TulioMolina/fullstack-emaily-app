import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import Auth from "./Auth";

class Header extends React.Component {
  renderNotLogged() {
    return (
      <li>
        <a href="/auth/google">Login with Google</a>
      </li>
    );
  }

  renderLogged() {
    if (this.props.auth === null) {
      return;
    }
    return [
      <li key="0">
        <Payments />
      </li>,
      <li style={{ margin: "0 10px" }} key="1">
        Credits: {this.props.auth.credits}
      </li>,
      <li key="2">
        <Link to="/surveys">{this.props.auth.name}</Link>
      </li>,
      <li key="3">
        <a href="/api/logout">Logout</a>
      </li>,
    ];
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Emaily
          </Link>
          <ul className="right">
            <Auth
              logged={this.renderLogged()}
              notLogged={this.renderNotLogged()}
            />
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
