import React from "react";
const CartContext = React.createContext({
  item: [],
  totalAmount: 0,
  AddItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
