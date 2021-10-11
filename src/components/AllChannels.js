import React from "react";

class AllChannels extends React.Component {
  constructor(props) {
    super(props);
    this.state = { channels: [] };
  }

  componentDidMount() {
    const apiUrl = process.env.REACT_APP_SERVER_URL;
    window.fetch(`${apiUrl}/channels`, {
      method: "GET",
      headers: { Authorization: this.props.token },
    })
      .then((response) => this.onChannels(response))
      .catch((err) => this.onError(err));
  }

  render() {
    return (
      <div>
        <ul>
          <li>Channel 1</li>
          <li>Channel 2</li>
          <li>Channel 3</li>
          <li>Channel 3</li>
          <li>Channel 3</li>
          <li>Channel 3</li>
          <li>Channel 3</li>
        </ul>
      </div>
    );
  }

  onChannels(response) {
    response.json().then(function(json) {
      console.log(json);
    });
  }

  onError(error) {
    console.error(error);
  }
}

export default AllChannels;
