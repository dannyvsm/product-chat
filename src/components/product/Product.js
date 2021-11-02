import React, { useState } from "react";
import Chat from "../chat/Chat";
import ProductImg from "../../imgs/whiteshirt.jpg";

function Product() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="product-card">
      <div className="p-name">
        <h2>Plain White Tee</h2>
      </div>
      <div className="p-sum">
        <p>One of our classics</p>
      </div>
      <div className="p-img">
        <img src={ProductImg} />
      </div>
      <div className="p-btns">
        <button onClick={() => setShowChat(true)}>Talk to me!</button>
        {showChat ? <Chat /> : null}
      </div>
    </div>
  );
}

export default Product;
