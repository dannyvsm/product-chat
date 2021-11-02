import React from "react";
import ProductImg from "../../imgs/whiteshirt.jpg";

function Chat() {
  return (
    <div className="chat-window">
      <div className="chat-area">
        <div className="host-msg">
          <img src={ProductImg} alt="a white shirt" />
          <p>hey whats up</p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
