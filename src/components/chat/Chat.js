import React from "react";
import "./chat.css";
import Chatbot from "react-chatbot-kit";

import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";
import config from "./config";

const Chat = () => {
  return (
    <div className="chatbot">
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />
    </div>
  );
};

export default Chat;
