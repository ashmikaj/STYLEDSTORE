import classes from "./ProductItem.module.css";
import ProductItemActionButton from "./ProductItemActionButton";
import { useDispatch } from "react-redux";
import { add } from "../../../../redux/actions";

const ProductItem = props => {
  const dispatcher = useDispatch();

  const addItem = {
    id: props.item.id,
    image: props.item.image,
    title: props.item.title,
    price: props.item.price,
    amount: 1,
  };

  return (
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
          onAddToCart={() => dispatcher(add(addItem))}
          item={props}
        />
      </div>
    </div>
  );
};

export default ProductItem;
