import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import { Input } from "@material-ui/core";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={"https://i.imgur.com/7I9Was5.png"} />
      </Link>
      <div className="header__option__address">
        <LocationOnIcon />
        <div className="header__option">
          <p className="option__line__one">Hello</p>
          <p className="option__line__two">Select your address</p>
        </div>
      </div>
      <div className="header__search">
        <Input className="header__search__input" type="text" />
        <div className="header__search__icon__container">
          <SearchIcon />
        </div>
      </div>
      <div className="header__nav__items">
        <div className="header__option">
          <div className="option__line__one">Hello,btm</div>
          <div className="option__line__two">Account & lists</div>
        </div>
        <div className="header__option">
          <div className="option__line__one">Returns</div>
          <div className="option__line__two">& Orders</div>
        </div>
        <div className="header__option__cart">
          <Link>
            <ShoppingBasketIcon />
            <div className="cart__count">0</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
