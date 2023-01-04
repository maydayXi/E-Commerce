import React, { useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2.js";
import DataContext from "../../data/DataContext.jsx";
import SectionLayout from "../../layout/SectionLayout.jsx";
import ProductRowLayout from "../../layout/ProductRowLayout.jsx";
import Product from "../../components/product/Product.jsx";
import { useParams } from "react-router-dom";
import Loading from "../../components/shared/Loading.jsx";

// padding class
const productPadding = {
    padding: "1rem",
    paddingTop: "2rem",
};
const pb2 = {
    paddingBottom: "2rem",
};
const firstGridPadding = {
    padding: "0 2rem",
    paddingLeft: 0,
};

// flex direction style
const flexDirection = {
    flexDirection: {
        xs: "column-reverse",
        sm: "row",
        md: "row",
        lg: "row",
    },
};

/**
 * ProductPage component
 * @returns Product content
 */
const ProductPage = () => {
    const { id } = useParams();
    const { bestSellers, newArrivals } = useContext(DataContext);
    const bestProduct = bestSellers.find((_product) => `${_product.id}` === id);
    const newProduct = newArrivals.find((_product) => `${_product.id}` === id);
    const product = bestProduct || newProduct;

    const { title, intro, price, image } = product;
    const { src, alt } = image;

    return (
        <>
            <Grid
                container
                spacing={2}
                sx={{ ...productPadding, ...flexDirection }}
            >
                <Grid
                    container
                    flexDirection="column"
                    xs={12}
                    sm={6}
                    md={6}
                    sx={firstGridPadding}
                >
                    <Product.Title variant="h4">{title}</Product.Title>
                    <Product.Intro>{intro}</Product.Intro>
                    <Product.Price>{price}</Product.Price>
                    <Product.QuantityInput />
                    <Product.Button>Buy</Product.Button>
                    <Product.NutritionFacts />
                    <Product.Ingredient />
                    <Product.Expiration />
                </Grid>
                <Grid container xs={12} sm={6} md={6} sx={pb2}>
                    <Product.Image image={src} title={alt} />
                </Grid>
            </Grid>
            <SectionLayout title="You may like">
                <ProductRowLayout
                    products={bestProduct ? newArrivals : bestSellers}
                />
            </SectionLayout>
        </>
    );
};

const withData = (Component) => {
    return (props) => {
        const { id } = useParams();
        const [data, setData] = useState(null);

        useEffect(() => {
            new Promise((resolve) => setTimeout(resolve, 500)).then(() => {
                setData({});
            });
        }, [id]);

        return data ? <Component {...props} data={data} /> : <Loading />;
    };
};

export default withData(ProductPage);
