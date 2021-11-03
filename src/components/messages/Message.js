import React, { useState } from "react";

const Message = ({ messages }) => {
  return messages.map((message, index) => (
    <div key={message.id}>{message.text}</div>
  ));
};

export default Message;
