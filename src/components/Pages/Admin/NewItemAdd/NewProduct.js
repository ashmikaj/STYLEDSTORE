import { useContext } from "react";
import addProductContext from "../../store/addProductContext";
import CartItem from "./CartItem";

const NewProduct = props => {
  const addCtx = useContext(addProductContext);
  const hasItems = addCtx.items.length > 0;

  const productItemRemoveHandler = id => {
    addCtx.removeItem(id);
  };
  const cartItemAddHandler = item => {
    addCtx.addItem(item);
  };
};
