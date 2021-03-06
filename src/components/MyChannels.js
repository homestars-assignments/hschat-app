import React from "react";
import ChannelList from "./shared/ChannelsList";

class AllChannels extends React.Component {
  constructor(props) {
    super(props);
    this.state = { channels: [] };
  }

  componentDidMount() {
    const apiUrl = process.env.REACT_APP_SERVER_URL;

    fetch(`${apiUrl}/channels?joined=true`, {
      method: "GET",
      headers: {
        Authorization: this.props.token      }
    })
      .then((response) => this.onChannels(response, this))
      .catch((err) => this.onError(err));
  }

  render() {
    return <ChannelList channels={this.state.channels} returnto='/' join='false' />;
  }

  onChannels(response, parent) {
    response.json().then(function (json) {
      parent.setState({ channels: json });
    });
  }

  onError(error) {
    console.error(error);
  }
}

export default AllChannels;
