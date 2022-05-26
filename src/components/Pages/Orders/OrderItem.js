import React from "react";
import classes from "../Orders/OrderItem.module.css";

function OrderItem(props) {
  const price = `$${parseInt(props.price) * parseInt(props.amount)}`;

  return (
    <div className={classes.main}>
      <div className={classes["order-item"]}>
        <img
          className={classes.orderImage}
          src={props.image}
          alt={props.image}
        ></img>
        <h6>{props.title}</h6>
        <div className={classes.summary}>
          <span className={classes.amount}>x {props.amount}</span>
          <span className={classes.price}> Total cost {price}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
