import Card from "../../UI/Card";
import classes from "./AvailableProducts.module.css";
import ProductItem from "./ProductItem/ProductItem";
import { useSelector } from "react-redux";

const AvailableProducts = () => {
  const productred = useSelector(store => store.products);

  const productList = productred.map(product => (
    <ProductItem key={product.id} item={product} />
  ));
  return (
    <section className={classes.products}>
      <Card>
        <div className={classes.maincard}>{productList}</div>
      </Card>
    </section>
  );
};

export default AvailableProducts;
