import React from "react";
import "./header.css";

/*icon imports*/
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />

      <div className="header__search">
        <input className="search__input" type="text" />
        <SearchIcon className="search__logo" />
      </div>

      <div className="header__nav">
        <div className="header__opt">
          <span className="header__line1">Hello Guest</span>
          <span className="header__line2">Sign In</span>
        </div>

        <div className="header__opt">
          <span className="header__line1">Returns</span>
          <span className="header__line2">& Orders</span>
        </div>

        <div className="header__opt">
          <span className="header__line1">Your</span>
          <span className="header__line2">Prime</span>
        </div>

        <div className="header__optCart">
          <ShoppingCartIcon className="header__cart" />
          <span className="header__line2 header__cartCount">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
