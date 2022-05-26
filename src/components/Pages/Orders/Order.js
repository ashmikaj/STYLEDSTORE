import React, { useState } from "react";
import OrderItem from "./OrderItem";
import classes from "./Order.module.css";
import { useSelector } from "react-redux";

function Order() {
  const orderhistory = JSON.parse(localStorage.getItem("OrderPlaced"));

  const cartitems = orderhistory.map(item => (
    <OrderItem
      key={item.id}
      image={item.image}
      title={item.title}
      price={item.price}
      amount={parseInt(item.amount)}
    />
  ));

  return (
    <div>
      <h2 className={classes.mainOrder}>Your Order History</h2>
      <ul>{orderhistory != null && <>{cartitems}</>}</ul>
    </div>
  );
}

export default Order;
