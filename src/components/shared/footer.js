import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  footer: {
    width: "100%",
    padding: "2%",
    paddingTop: "2%",
    textAlign: "center",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>2020 &copy; Lackmond Foo Chicken</footer>
  );
};

export default Footer;
