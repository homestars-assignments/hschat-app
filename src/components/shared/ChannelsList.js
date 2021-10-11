function ChannelList(props) {
  return (
    <div>
      <ul className="channels-list">
        {props.channels.map((channel) => <ChannelEntry key={channel['id']} channel={channel} />)}
      </ul>
    </div>
  );
}

function ChannelEntry(props) {
  return <li>
      <div><a href="#">{props.channel['name']}</a></div>
      <div>{props.channel['description']}</div>
  </li>
}

export default ChannelList;