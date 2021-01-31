import React, { useContext, useState } from "react";
import Layout from "../../components/Layout";

import CartProducts from "./CartProducts";
import { CartContext } from "../../contexts/CartContext";
import { formatNumber } from "../../helpers/utils";
import { Link } from "react-router-dom";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Modal,
  Button,
} from "@material-ui/core";
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
    modal: {
      display: "flex",
      margin: "6vw",

      justifyContent: "center",
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
  modal: {
    display: "flex",
    margin: "6vw",

    justifyContent: "center",
  },
  paper: {},
}));

const Cart = () => {
  const { total, cartItems, itemCount, clearCart, handleCheckout } = useContext(
    CartContext
  );

  const ttp = String((parseFloat(total) + 5.0).toFixed(2));

  const classes = useStyles();

  let order = "";
  for (let i = 0; i < cartItems.length; i++) {
    if (i !== cartItems.length - 1) {
      order = order + cartItems[i].name + "x(" + cartItems[i].quantity + "), ";
    } else {
      order = order + cartItems[i].name + "x(" + cartItems[i].quantity + "). ";
    }
  }

  const [address, setAddress] = useState("");
  const [modal, setModal] = useState("");

  const formValidation = () => {
    if (address === "" || address == null) {
      alert("Delivery Address must be filled out");
    } else {
      window.open(
        "https://wa.me/60165688490?text=Hi there, I would like to make an order: " +
          order +
          " Total payment: RM" +
          ttp +
          ". " +
          " Delivery Address: " +
          String(address) +
          ". Please bank in to: Lackmond Foo Wai Mun(Maybank) Account:111312313131. Thank you."
      );

      setModal(true);
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
        <Modal
          open={modal}
          //onClose={handleClose2}
          className={classes.modal}
        >
          {
            <div className={classes.paper}>
              <Card className="card" style={{ textAlign: "center", Width: 20 }}>
                <CardContent className="content" style={{ padding: "6vh" }}>
                  <Typography style={{ fontWeight: "bold", fontSize: "6vh" }}>
                    Order Success?
                  </Typography>
                  {/*<Typography style={{ padding: "2vw", fontSize: "5vh" }}>
                    Thank you. Please proceed to login.
          </Typography>*/}
                  <Button
                    //disabled={submit}
                    onClick={() => setModal(false)}
                    style={{
                      color: "white",
                      backgroundColor: "red",
                      //width: "60%",
                      //maxWidth: "300px",
                      borderRadius: 10,
                      margin: 10,
                    }}
                  >
                    <Typography
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        //fontSize: "4vh",
                      }}
                      align="center"
                    >
                      No. Continue last order.
                    </Typography>
                  </Button>
                  &nbsp;
                  <Button
                    //disabled={submit}
                    onClick={handleCheckout}
                    style={{
                      padding: "10",
                      color: "white",
                      backgroundColor: "#4faea4",
                      //width: "60%",
                      //maxWidth: "300px",
                      borderRadius: 10,
                      margin: 10,
                    }}
                  >
                    <Link to="/" style={{ textDecoration: "none" }}>
                      <Typography
                        style={{
                          fontWeight: "bold",
                          color: "white",
                          //fontSize: "4vh",
                        }}
                        align="center"
                      >
                        Yes. Back to store and buy more!
                      </Typography>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          }
        </Modal>
      </div>
    </Layout>
  );
};

export default Cart;
