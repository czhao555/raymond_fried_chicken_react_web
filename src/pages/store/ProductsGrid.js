import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { ProductsContext } from "../../contexts/ProductsContext";
import { makeStyles, Grid, Card } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  card: {
    "@media (max-width:400px)": {
      height: "auto",
      width: 280,
    },
    "@media (max-width:280px)": {
      height: "auto",
      width: 220,
    },
    height: 350,
    width: 350,
  },
  grid: {
    border: "none",
  },
  container: { justifyContent: "center" },
}));

const ProductsGrid = () => {
  const { products } = useContext(ProductsContext);
  const classes = useStyles();

  return (
    <div>
      <div>{products.length} Products</div>
      <Grid container spacing={3} className={classes.container}>
        {products.map((product) => (
          <Grid item className={classes.grid}>
            <Card className={classes.card}>
              <ProductItem key={product.id} product={product} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductsGrid;
