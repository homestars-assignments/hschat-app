import React from 'react';

class LoginOutScreen extends React.Component {

  componentDidMount() {
    this.props.onByeBye();
  }

  render() {
    return (
      <div>
        <p>Logged out...</p>
        <p><a href="/login">Back to login</a></p>
      </div>
    );
  }
}

export default LoginOutScreen;