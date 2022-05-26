import classes from "./ProductsSummary.module.css";
import Navigation from "../../Layout/Navigation";

const ProductsSummary = () => {
  return (
    <div>
      <Navigation />
      <div className={classes.summary}>
        <h1> "You Think , We Design."</h1>
      </div>
    </div>
  );
};

export default ProductsSummary;
