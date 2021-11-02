import React from "react";

import "./home.css";
import Product from "../product/Product";

function Home() {
  return (
    <div className="home">
      <div class="product-details">
        <Product />
      </div>
    </div>
  );
}

export default Home;
