import classes from "./Navigation.module.css";

import { Link } from "react-router-dom";

const Navigation = props => {
  return (
    <div className={classes.navigation}>
      <Link to="/">
        <button>HOME</button>
      </Link>
      <Link to="/styleblog">
        <button>STYLE BLOG</button>
      </Link>
      <Link to="/about">
        <button>ABOUT US </button>
      </Link>
      <Link to="/contact">
        <button>CONTACT US</button>
      </Link>
    </div>
  );
};

export default Navigation;
