import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ProductCard from "../components/product/ProductCard.jsx";

/**
 * ProductRowLayout component
 * @param {Object} props Product array
 * @returns Product Card
 */
const ProductRowLayout = ({ products, icon }) => (
    <Grid container spacing={2} sx={{ marginBottom: "2rem" }}>
        {products.map((product, i) => (
            <Grid key={i} xs={12} sm={6} md={3}>
                <ProductCard
                    productId={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    icon={icon}
                />
            </Grid>
        ))}
    </Grid>
);

export default ProductRowLayout;
