import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { ProductsContext } from "../../contexts/ProductsContext";
import { makeStyles, Grid, Card } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  card: {
    height: 350,
    width: 350,
  },
  grid: {
    border: "none",
  },
}));

const ProductsGrid = () => {
  const { products } = useContext(ProductsContext);
  const classes = useStyles();

  return (
    <div>
      <p>{products.length} Products</p>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item className={classes.grid} xs={12} sm={6} md={4}>
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
