import React from "react";

import "./home.css";
import Product from "../product/Product";

const Home = () => {
  return (
    <div className="home">
      <div class="products">
        <Product />
      </div>
    </div>
  );
};

export default Home;
