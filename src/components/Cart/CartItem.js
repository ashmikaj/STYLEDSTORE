import classes from "./CartItem.module.css";
import Card from "../UI/Card";
const CartItem = props => {
  const price = `$${parseInt(props.price).toFixed(2)}`;

  return (
    <Card>
      <div className={classes["cart-item"]}>
        <img
          className={classes.cartImage}
          src={props.image}
          alt={props.image}
        ></img>
        <h2>{props.title}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onRemove}>−</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
