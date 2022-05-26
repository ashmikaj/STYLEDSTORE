import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import ProductsSummary from "../Pages/Products/ProductsSummary";
const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Styled</h1>

        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={classes["main-image"]}>
        <img
          src="https://source.unsplash.com/random/?fashion"
          alt="Fashionimage"
        />
      </div>
      <div>
        <ProductsSummary />
      </div>
    </Fragment>
  );
};

export default Header;
