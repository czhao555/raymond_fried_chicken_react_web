import React, { useContext } from "react";
import Layout from "../../components/Layout";

import CartProducts from "./CartProducts";
import { CartContext } from "../../contexts/CartContext";
import { formatNumber } from "../../helpers/utils";
//import { Link } from "react-router-dom";
import { makeStyles, Card, CardContent, Typography } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  cart: {
    textAlign: "center",
    paddingTop: 40,
  },
  cartItem: {
    justifyContent: "center",
    display: "flex",
    "@media (max-width:800px)": {
      justifyContent: "center",
      display: "block",
    },
  },
  button: {
    textAlign: "center",
  },
  checkoutButton: {
    backgroundColor: "black",
    padding: 5,
  },
  root: {
    minWidth: 200,
    height: "100%",
  },
}));

const Cart = () => {
  const {
    total,
    cartItems,
    itemCount,
    clearCart,
    //checkout,
    handleCheckout,
  } = useContext(CartContext);

  const classes = useStyles();

  const storage = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : "Hi";

  var ok = "";
  for (var i = 0; i < storage.length; i++) {
    if (i !== storage.length - 1) {
      ok = ok + storage[i].name + "x" + storage[i].quantity + ", ";
    } else {
      ok = ok + storage[i].name + "x" + storage[i].quantity + ". ";
    }
  }

  return (
    <Layout title="Cart" description="This is the Cart page">
      <div>
        <div className={classes.cart}>
          <h1>Cart</h1>
          <p>This is the Cart Page.</p>
        </div>

        <div className={classes.cartItem}>
          <div className="ok">
            {cartItems.length > 0 ? (
              <CartProducts />
            ) : (
              <div className="p-3 text-center text-muted">
                Your cart is empty
              </div>
            )}

            {/*{checkout && (
              <div className="p-3 text-center text-success">
                <p>Checkout successfull</p>
                <Link to="/" className="btn btn-outline-success btn-sm">
                  BUY MORE
                </Link>
              </div>
            )}*/}
          </div>
          {cartItems.length > 0 && (
            <Card className={classes.root}>
              <CardContent>
                <Typography color="textSecondary">Total Items</Typography>
                <Typography variant="h5" gutterBottom>
                  {itemCount}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Total Payment
                </Typography>
                <Typography variant="h5">{formatNumber(total)}</Typography>
                <div>
                  <hr className="ok" />
                </div>
                <div className={classes.button}>
                  <button
                    type="button"
                    className={classes.checkoutButton}
                    onClick={handleCheckout}
                  >
                    <a
                      href={
                        "https://wa.me/60165688490?text=Hi there, I would like to make an order: " +
                        ok
                      }
                      style={{ color: "white" }}
                    >
                      CHECKOUT
                    </a>
                  </button>

                  <button
                    type="button"
                    className="btn btn-outlineprimary btn-sm"
                    onClick={clearCart}
                  >
                    CLEAR
                  </button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
