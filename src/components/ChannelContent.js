import React from "react";
import { qsParam } from "../lib/vanillaTools";
import NewPost from "./NewPost";
import MessageList from "./shared/MessageList";

class ChannelContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [], newone: "" };
  }

  componentDidMount() {
    this.refresh();
  }

  refresh() {
    const apiUrl = process.env.REACT_APP_SERVER_URL;

    fetch(`${apiUrl}/channels/${this.props.selected}/messages`, {
      method: "GET",
      headers: { Authorization: this.props.token },
    })
      .then((response) => this.onChannelInfo(response, this))
      .catch((err) => this.onError(err));
  }

  render() {
    return (
      <section className="messages">
        <h1>
          <a
            className="back-link"
            href={`${qsParam("return_url")}`}
            title="Back to channels list"
          >
            &lt;
          </a>
          &nbsp;
          <span className="channel-name">{qsParam("name")}</span>
        </h1>
        <MessageList messages={this.state.messages} />
        <div className="woi">{this.state.newone}</div>
        <NewPost
          channel={this.props.selected}
          onMessageSent={(msg) => this.onMessageSent(msg)}
          token={this.props.token}
        />
      </section>
    );
  }

  onChannelInfo(response, parent) {
    response.json().then(function (json) {
      parent.setState({ messages: json, newone: "" });
    });
  }

  onError(error) {
    console.error(error);
  }

  onMessageSent(msg) {
    this.setState({ newone: msg });
    this.refresh();
  }
}

export default ChannelContent;
