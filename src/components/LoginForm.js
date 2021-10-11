import React from "react";

import "../styles/forms.css";
class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          <fieldset>
            <label htmlFor="email">Email:</label>
            <input name="email" type="text" />
          </fieldset>

          <fieldset>
            <label htmlFor="email">Password:</label>
            <input name="password" type="text" />
          </fieldset>

          <div className="actions">
            <button type="button">Signup</button>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    );
  }

  handleLogin(e) {
    e.preventDefault(); // Don't really submit
    console.log('🚀');
    console.log(process.env.SERVER_URL);
    console.log(process.env);
  }
}

export default LoginForm;
