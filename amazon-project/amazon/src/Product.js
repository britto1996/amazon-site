import { Button } from "@material-ui/core";
import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="container">
      <div className="product__info">
        <span className="title">kajal wear</span>
        <span className="price">INR 2,500</span>
        <div className="rating">⭐⭐⭐⭐</div>

        <img
          className="product__images"
          src="https://cdn.shopify.com/s/files/1/1384/4105/files/kajal-agarwal-saree_2048x2048.jpg?v=1530957578"
        />

        <div className="action__section">
          <button className="add__to__cart__button">Add to cart</button>
        </div>
      </div>

      <div className="product__info">
        <span className="title">kajal wear</span>
        <span className="price">INR 2,500</span>
        <div className="rating">⭐⭐⭐⭐</div>

        <img
          className="product__images"
          src="https://cdn.shopify.com/s/files/1/1384/4105/files/kajal-agarwal-saree_2048x2048.jpg?v=1530957578"
        />

        <div className="action__section">
          <button className="add__to__cart__button">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
