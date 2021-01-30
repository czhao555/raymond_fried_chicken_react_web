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
    //handleCheckout,
  } = useContext(CartContext);

  const ttp = String(parseFloat(total) + 5.0);

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

  const [address, setAddress] = React.useState("");

  const formValidation = () => {
    if (address === "" || address == null) {
      alert("Delivery Address must be filled out");
    } else {
      window.location.replace(
        "https://wa.me/60165688490?text=Hi there, I would like to make an order: " +
          ok +
          " Total payment: RM" +
          ttp +
          "0. " +
          " Delivery Address: " +
          String(address) +
          ". Please bank in to: Lackmond Foo Wai Mun(Maybank) Account:111312313131. Thank you."
      );
    }
  };

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
                <textarea
                  placeholder="Delivery Address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  rows={4}
                  style={{ width: "100%" }}
                  name="address"
                  required
                />
                <Typography color="textSecondary" style={{ paddingTop: 15 }}>
                  TOTAL ITEM(S)
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {itemCount}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  SUBTOTAL
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {formatNumber(total)}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  SHIPPING COSTS
                </Typography>
                <Typography variant="h6">{formatNumber(5)}</Typography>
                <hr />
                <Typography className={classes.pos} color="textSecondary">
                  TOTAL PAYMENT
                </Typography>
                <Typography variant="h5">{formatNumber(ttp)}</Typography>
                <div>
                  <hr />
                </div>
                <div className={classes.button}>
                  <button
                    type="button"
                    className={classes.checkoutButton}
                    onClick={formValidation}
                    style={{ color: "white" }}
                  >
                    CHECKOUT
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
