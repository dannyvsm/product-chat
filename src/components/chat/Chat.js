import React, { useState } from "react";

//import components
import Message from "../messages/Message";
import Form from "../form/Form";
// import ProductImg from "../../imgs/whiteshirt.jpg";

const Chat = () => {
  //setting the state for chat messages
  const [messages, setMessages] = useState([]);

  //returns the messages sent
  const sendMsg = (message) => {
    if (!message.text) {
      return;
    }

    const newMessages = [message, ...messages];

    setMessages(newMessages);
  };

  return (
    //defining the chat area
    <div className="chat-window">
      <div className="chat-area">
        <div className="msg-history">
          <Message message={messages} className="message" />
          {/* <img src={ProductImg} alt="a white shirt" />
          <p>hello</p> */}
        </div>
        <div className="user-input">
          <Form onSubmit={sendMsg} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
