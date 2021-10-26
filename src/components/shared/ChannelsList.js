import "../../styles/channelsList.css";

function ChannelList(props) {
  return (
    <div>
      <ul className="channels-list">
        {props.channels.map((channel) => (
          <ChannelEntry key={channel["id"]} channel={channel} returnto={props.returnto} />
        ))}
      </ul>
    </div>
  );
}

function ChannelEntry(props) {
  return (
    <li>
      <div>
        <a href={`/channel?id=${props.channel["id"]}&name=${props.channel["name"]}&return_url=${props.returnto}`}>
          {props.channel["name"]}
        </a>
      </div>
      <div>{props.channel["description"]}</div>
    </li>
  );
}

export default ChannelList;
