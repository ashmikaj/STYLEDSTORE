import Header from "../Layout/Header";
import { useState } from "react";
import Products from "../Pages/Products/Products";
import Cart from "../Cart/Cart";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import ProductDetails from "../Pages/Products/ProductItem/ProductDetails";
import Login from "../Pages/LoginForm/LoginForm";
import Register from "../Pages/LoginForm/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StyleBlog from "../Pages/StyleBlog/StyleBlog";
import AddminAdd from "../Pages/Admin/AdminAdd";
import Order from "../Pages/Orders/Order";

function AppSkeleton() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCarthandler = () => {
    setCartIsShown(false);
  };

  return (
    <Router>
      {cartIsShown && <Cart onClose={hideCarthandler} />}
      <Header onShowCart={showCartHandler} />

      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/"
          element={
            <main>
              <Products />
            </main>
          }
        ></Route>
        <Route
          exact
          path="/productDetails/:id"
          element={<ProductDetails />}
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/styleblog" element={<StyleBlog />}></Route>
        <Route path="/admin" element={<AddminAdd />}></Route>
        <Route path="/order" element={<Order />}></Route>
      </Routes>
    </Router>
  );
}

export default AppSkeleton;
