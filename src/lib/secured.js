import React from "react";
import { Redirect } from "react-router";

// HOC secured, to render redirection to login if user is not logged in, for
// any wrapped component that need current user info to work.
function secured(WrappedComponent) {
  return class extends React.Component {
    render() {
      return this.props.loggedIn ? (
        <WrappedComponent {...this.props} />
      ) : (
        <Redirect to="/login" message="You must login first..." />
      );
    }
  };
}

export default secured;
