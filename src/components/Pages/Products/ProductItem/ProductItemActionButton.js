import classes from "./ProductItemActionButton.module.css";
import { useNavigate } from "react-router-dom";
//productaction button
//UseRouter hook
//axios

const ProductItemForm = props => {
  let navigate = useNavigate();
  const visitItemHandler = event => {
    event.preventDefault();
    navigate(`/productDetails/${props.item.item.id}`, { replace: true });
  };
  const submitHandler = event => {
    event.preventDefault();

    props.onAddToCart();
  };
  return (
    <div className={classes.actionButton}>
      <button className={classes.visit} onClick={visitItemHandler}>
        VISIT
      </button>

      <button type="submit" className={classes.cart} onClick={submitHandler}>
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductItemForm;
