import React from "react";
import Product from "./Product";
function Home() {
  return (
    <div className="container">
      <img className="banner" src="https://i.imgur.com/SYHeuYM.jpg" />

      <div className="content">
        <Product />
      </div>
    </div>
  );
}

export default Home;
