import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Card } from "@material-ui/core";
import CartItem from "./CartItem";

const CartProducts = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <div className="card card-body border-0">
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      <Card></Card>
    </div>
  );
};

export default CartProducts;
