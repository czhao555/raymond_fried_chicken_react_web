import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { CartIcon } from "../icons";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  header: {
    padding: "15px",
    textAlign: "center",
  },
  cartIcon: {
    width: 18,
    height: 20,
  },
  a: {
    display: "inline-block",
    marginRight: "5vh",
  },
}));

const Header = () => {
  const { itemCount } = useContext(CartContext);
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <Link to="/" className={classes.a}>
        Store
      </Link>
      <Link to="/about" className={classes.a}>
        About
      </Link>
      <Link to="/cart">
        <svg className={classes.cartIcon}>
          <CartIcon />
        </svg>
        Cart ({itemCount})
      </Link>
    </header>
  );
};

export default Header;
