import React from "react";
import { $ } from "../lib/vanillaTools";

import "../styles/forms.css";
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleLogin(e)}>
          <fieldset>
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </fieldset>

          <fieldset>
            <label htmlFor="email">Password:</label>
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </fieldset>

          <div className="actions">
            <button type="button">Signup</button>
            <button type="submit" id="login-btn">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }

  handleLogin(e) {
    this.toggleLogin(false);
    e.preventDefault(); // Don't really submit

    const apiUrl = process.env.REACT_APP_SERVER_URL;
    const valid = (str) => str && str.length > 0;

    if (!valid(this.state.email) || !valid(this.state.password))
      return this.toggleLogin(true);

    fetch(`${apiUrl}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `email=${this.state.email}&password=${this.state.password}`,
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        this.onLoginOk(this, response)
      })
      .catch((err) => this.onLoginError(err))
      .finally(() => this.toggleLogin(true));
  }

  onLoginOk(t, response) {
    response.json().then(function(json) {
      t.props.onTokenReceived(json.token);
    });
  }

  onLoginError(err) {
    alert(err.message);
    console.error(err);
  }

  toggleLogin(enable) {
    $("login-btn").disabled = !enable;
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value.toString().trim() });
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value });
  }
}

export default LoginForm;
