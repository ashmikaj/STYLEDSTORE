import React, { useContext } from "react";
import classes from "./ProductDetails.module.css";
import { useParams, Link } from "react-router-dom";
import { add } from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = props => {
  const { id } = useParams();
  const dispatcher = useDispatch();
  const products = JSON.parse(localStorage.getItem("Products"));
  const arr = products.filter(item => item.id === id);
  const addItem = {
    id: arr[0].id,
    name: arr[0].image,
    title: arr[0].title,
    price: arr[0].price,
    quantity: 1,
  };

  return (
    <div className={classes.detailsMain}>
      <h2>{arr[0].title}</h2>
      <div className={classes.detailsflex}>
        <img
          className={classes.detailsImage}
          src={arr[0].image}
          alt={arr[0].name}
        ></img>
        <div>
          <p>{arr[0].description}</p>
          <button
            className={classes.detailsButton}
            onClick={() => dispatcher(add(addItem))}
          >
            ADD TO CART
          </button>
          <Link to="/" className={classes.homelink}>
            <p className={classes.gohome}> Back to home</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
