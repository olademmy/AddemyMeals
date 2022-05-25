import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meal/Meals";
import CartProvider from "./Store/CartProvider";
function App(props) {
  const [showModal, setShowModal] = useState(false);

  const showCartHandler = () => {
    setShowModal(true);
  };

  const hideCartHandler = () => {
    setShowModal(false);
  };

  return (
    <CartProvider>
      {showModal && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
