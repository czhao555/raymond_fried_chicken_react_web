import React from "react";
import Header from "./shared/header";
import Footer from "./shared/footer";

import { Helmet } from "react-helmet-async";

import "bootswatch/dist/lux/bootstrap.css";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Helmet>
        <title>
          {title ? title + " - Lackmond Foo Chicken" : "Lackmond Foo Chicken"}
        </title>
        <meta
          name="description"
          content={description || "Lackmond Foo Chicken"}
        />
      </Helmet>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
