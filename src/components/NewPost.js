import React from "react";
import { $ } from "../lib/vanillaTools";

import "../styles/forms.css";
class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };

    this.onChangeBody = this.onChangeBody.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handlePost(e)}>
          <fieldset>
            <label htmlFor="body">New message:</label>
            <textarea cols="30" rows="5" id="body" name="body" onChange={this.onChangeBody} value={this.state.body}></textarea>
          </fieldset>

          <div className="actions">
            <button type="submit" id="post-btn">
              Send
            </button>
          </div>
        </form>
      </div>
    );
  }

  handlePost(e) {
    this.togglePost(false);
    e.preventDefault(); // Don't really submit

    const apiUrl = process.env.REACT_APP_SERVER_URL;
    const valid = (str) => str && str.length > 0;

    if (!valid(this.state.body))
      return this.togglePost(true);

    fetch(`${apiUrl}/channels/${this.props.channel}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", 'Authorization': this.props.token },
      body: `body=${this.state.body}`
    })
      .then((response) => {
        if (!response.ok) throw new Error(response.statusText);
        this.onPostedOk(this, response)
      })
      .catch((err) => this.onPostError(err))
      .finally(() => this.togglePost(true));
  }

  onPostedOk(t, response) {
    response.json().then(function(json) {
      t.props.onMessageSent(json.body);
      t.setState({ body: "" });
    });
  }

  onPostError(err) {
    alert(err.message);
    console.error(err);
  }

  togglePost(enable) {
    $("post-btn").disabled = !enable;
  }

  onChangeBody(e) {
    this.setState({ body: e.target.value.toString().trim() });
  }
}

export default NewPost;
