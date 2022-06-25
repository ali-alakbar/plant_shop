import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from "react";
import Data from "./JSON/Data.json";
import NavBar from "./components/NavBar/NavBar";
import Home from "./routes/Home/Home";
import Wishlist from "./routes/WishList/Wishlist";
import NumberPopUp from "./components/NumberPopUp/NumberPopUp";
import Footer from "./components/Footer/Footer";
import Shop from "./routes/Shop/Shop";
import Contact from "./routes/Contact/Contact";
import About from "./routes/About/About";
import FAQ from "./routes/FAQ/FAQ";
import Cart from "./routes/Cart/Cart";
import Checkout from "./routes/Checkout/Checkout";

const App = () => {
  const { products } = Data;
  const [cart, setCart] = useState([]);

  const onAdd = (pro) => {
    setCart([...cart, { ...pro }]);
  };

  const onRemove = (pro) => {
    setCart(cart.filter((product) => product !== pro));
  };

  //  A Hook to get the my Pop Up displayed after a certain amount of time
  const [showPopUp, setShowPopUp] = useState(true);
  // UseEffect to set the time out for the Pop Up
  // After ten seconds the Pop Up will be hidden
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="App">
      <BrowserRouter>
        {/* My Pop up component is displyed until the useEffect is false(after 10sec) */}
        {showPopUp && <NumberPopUp />}
        <NumberPopUp />
        <NavBar productsLength={products.length} cartLength={cart.length} />
        <Routes>
          <Route path="/plants-shop-react" element={<Home cart={cart} onAdd={onAdd} />} />
          <Route path="Home" element={<Home cart={cart} onAdd={onAdd} />} />
          <Route path="Home" element={<Home cart={cart} onAdd={onAdd} />} />
          <Route
            path="/Wishlist"
            className="page-activated"
            element={
              <Wishlist
                cartLength={cart.length}
                cart={cart}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />{" "}
          <Route
            path="/Shop"
            element={
              <Shop
                cart={cart}
                onAdd={onAdd}
                onRemove={onRemove}
                resultNumber={products.length}
              />
            }
          />
          <Route
            path="/Shop"
            element={
              <Shop
                cart={cart}
                onAdd={onAdd}
                onRemove={onRemove}
                resultNumber={products.length}
              />
            }
          />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route
            path="/Cart"
            element={
              <Cart
                cart={cart}
                onRemove={onRemove}
                resultNumber={products.length}
              />
            }
          />
          <Route
            path="/Checkout"
            element={
              <Checkout
                cart={cart}
                onRemove={onRemove}
                resultNumber={products.length}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
};

export default App;
