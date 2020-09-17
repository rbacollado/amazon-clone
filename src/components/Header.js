import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase.js";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  const [{ cart, user }] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__search">
        <input className="search__input" type="text" />
        <SearchIcon className="search__logo" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuth} className="header__opt">
            <span className="header__line1">
              {user ? `Hello ${user.email}` : "Hello Guest"}
            </span>
            <span className="header__line2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__opt">
          <span className="header__line1">Returns</span>
          <span className="header__line2">& Orders</span>
        </div>

        <div className="header__opt">
          <span className="header__line1">Your</span>
          <span className="header__line2">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optCart">
            <ShoppingCartIcon className="header__cart" />
            <span className="header__line2 header__cartCount">
              {cart?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
