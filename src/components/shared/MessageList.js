function MessageList(props) {
  return (
    <div>
      <ul className="channels-list">
        {props.messages.map((message) => <MessageEntry key={message['id']} message={message} />)}
      </ul>
    </div>
  );
}

function MessageEntry(props) {
  return <li>
      <div className='author'><a href={`mailto:${props.message['user']['email']}`}>{props.message['user']['name']}</a></div>
      <div className='message'>{props.message['body']}</div>      
  </li>
}

export default MessageList;