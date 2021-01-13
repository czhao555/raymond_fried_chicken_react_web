import React from "react";
import Layout from "../../components/Layout";

import ProductsGrid from "./ProductsGrid";

const Store = () => {
  return (
    <Layout title="Store" description="This is the Store page">
      <div>
        <div className="text-center mt-5">
          <h1>Lackmond Foo Chicken</h1>
          <p>
            The Best Fried Chicken on the Planet. You never try you never know,
            once you try you never go !
          </p>
        </div>
        <ProductsGrid />
      </div>
    </Layout>
  );
};

export default Store;
