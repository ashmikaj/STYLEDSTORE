import { useSelector } from "react-redux";

import classes from "./HeaderCartButton.module.css";

import { Link } from "react-router-dom";

const HeaderCartButton = props => {
  let logStatus = "";
  const cartItem = useSelector(store => store.cart.items);

  const numberOfCartItems = cartItem.reduce((curNumber, item) => {
    return curNumber + 1;
  }, 0);
  localStorage.setItem("loggedIn", "false");
  const status = JSON.parse(localStorage.getItem("loggedIn"));
  if (status == "true") {
    logStatus = "Logout";
  } else {
    logStatus = "Login";
  }

  return (
    <div className={classes.main}>
      <div>
        <button className={classes.button} onClick={props.onClick}>
          <span className={classes.icon}></span>
          <span> Your Cart</span>
          <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
      </div>
      <div>
        <Link to="/login">
          <button className={classes.login}>{logStatus}</button>
        </Link>
        <Link to="/order">
          <button className={classes.login}>Orders</button>
        </Link>
      </div>
    </div>
  );
};

export default HeaderCartButton;
