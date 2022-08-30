import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meal/Meals";
import CartProvider from "./Store/CartProvider";
import Checkout from "./Components/Order/Checkout";
function App(props) {
  const [showModal, setShowModal] = useState(false);
  const [showCheckOutModal, setShowCheckOutmodal] = useState(false);

  const showCartHandler = () => {
    setShowModal(true);
  };

  const hideCartHandler = () => {
    setShowModal(false);
  };

  const checkOutHandler = () => {
    setShowCheckOutmodal(true);
    setShowModal(false);
  };

  return (
    <CartProvider>
      {showModal && (
        <Cart onHideCart={hideCartHandler} onCheckOut={checkOutHandler} />
      )}
      {showCheckOutModal && <Checkout />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
