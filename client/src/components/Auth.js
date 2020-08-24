import React from "react";
import { connect } from "react-redux";

const Auth = (props) => {
  switch (props.auth) {
    case null:
      return <></>;
    case false:
      return <>{props.notLogged}</>;
    default:
      return <>{props.logged}</>;
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Auth);
