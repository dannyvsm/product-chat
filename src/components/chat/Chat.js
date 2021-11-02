import React, { useState } from "react";
import { GrSend } from "react-icons/gr";
// import ProductImg from "../../imgs/whiteshirt.jpg";

const Chat = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  return (
    <div className="chat-window">
      <div className="header">Chat with me</div>
      <div className="msg-area">
        {/* <img src={ProductImg} alt="a white shirt" className="chat-img" />
          <p>hey whats up</p> */}
      </div>
      <form className="msg-footer" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="what would you like to know?"
          className="user-msg"
          onChange={handleChange}
        />
        <button>
          <GrSend />
        </button>
      </form>
    </div>
  );
};

export default Chat;
