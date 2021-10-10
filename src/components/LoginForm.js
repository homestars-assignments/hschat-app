import React from 'react';

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <fieldset>
            <label htmlFor="email">Email:</label>
            <input name="email" type="text" />
          </fieldset>
          
          <fieldset>
            <label htmlFor="email">password:</label>
            <input name="password" type="text" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default LoginForm;