import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { add, remove, reset } from "../../redux/actions";

const Cart = props => {
  const cartItem = useSelector(store => store.cart);
  const dispatcher = useDispatch();
  const totalAmount = `$${cartItem.totalAmount.toFixed(2)}`;
  const hasItems = cartItem.items.length > 0;
  const cartItemRemoveHandler = id => {
    dispatcher(remove(id));
  };
  const cartItemAddHandler = item => {
    dispatcher(add(item));
  };

  const cartitems = cartItem.items.map(item => (
    <CartItem
      key={item.id}
      image={item.image}
      title={item.title}
      price={item.price}
      amount={parseInt(item.amount)}
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
  ));

  const orderPlaced = () => {
    localStorage.setItem("OrderPlaced", JSON.stringify(cartItem.items));
    props.onClose();
    dispatcher(reset());
  };
  return (
    <Modal onClose={props.onClose}>
      <ul className={classes.cartitems}>{cartitems}</ul>

      <div className={classes.total}>
        <span> Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <Link to="/order">
            <button className={classes.button} onClick={orderPlaced}>
              order
            </button>
          </Link>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
