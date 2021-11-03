import React, { useState } from "react";

import "./product.css";
import Chat from "../chat/Chat";
import ProductImg from "../../imgs/whiteshirt.jpg";

const Product = () => {
  const [showChat, setShowChat] = useState(false);
  const toggle = (e) => {
    setShowChat(!showChat);
  };

  return (
    <div className="product-card">
      <div className="p-name">
        <h2>Plain White Tee</h2>
      </div>
      <div className="p-sum">
        <p>One of our classics</p>
      </div>
      <div className="p-img">
        <img src={ProductImg} className="product-img" />
      </div>
      <div className="p-btns">
        //toggles the chat window
        <button onClick={() => setShowChat(true)}>Talk to me!</button>
        {showChat ? <Chat /> : null}
      </div>
    </div>
  );
};

export default Product;
