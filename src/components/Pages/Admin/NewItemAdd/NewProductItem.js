import classes from "./NewProducutItem.module.css";
import Card from "../UI/Card";
const CartItem = props => {
  const price = `$${parseInt(props.price).toFixed(2)}`;

  return (
    <Card>
      <div className={classes.product}>
        <div className={classes.ProductItem}>
          <img
            className={classes.image}
            src={props.item.image}
            alt={props.title}
          ></img>
          <div className={classes.title}>{props.item.title}</div>
          <div className={classes.price}>$ {props.item.price}</div>
          <ProductItemActionButton
            onAddToCart={addToCartHandler}
            item={props}
          />
        </div>
      </div>
    </Card>
  );
};

export default CartItem;
