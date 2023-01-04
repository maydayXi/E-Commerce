import React from "react";
import styled from "@emotion/styled";
import { alpha, Button, Typography } from "@mui/material";
import NutritionFacts from "./NutritionFacts.jsx";
import Ingredient from "./Ingredients.jsx";
import ProductAccordion from "./ProductAccordion.jsx";
import ExpirationTable from "./ExpirationTable.jsx";
import QuantityInput from "./QuantityInput.jsx";

/**
 * ProductTitle component
 */
const ProductTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.dark,
    marginBottom: "2rem",
}));

/**
 * ProductIntro component
 */
const ProductIntro = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.light,
    marginBottom: "2rem",
}));

/**
 * ProductPrice component
 * @returns Product price
 */
const ProductPrice = ({ children }) => (
    <Typography variant="h6">$ {children}</Typography>
);

const ProductQuantityInput = () => <QuantityInput />;

/**
 * ProductButton component
 */
const ProductButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.white,
    fontSize: "1.2rem",
    borderRadius: 0,
    marginBottom: "1rem",

    ":hover": {
        backgroundColor: alpha(theme.palette.primary.main, 0.9),
    },
}));

/**
 * ProductNutritionFacts component
 * @returns Product Nutrition Facts
 */
const ProductNutritionFacts = () => (
    <ProductAccordion id="product-nutrition-facts" summary="Nutrition Facts">
        <NutritionFacts />
    </ProductAccordion>
);

/**
 * ProductIngredient component
 * @returns Product ingredient
 */
const ProductIngredient = () => (
    <ProductAccordion id="product-ingredient" summary="Ingredient">
        <Ingredient />
    </ProductAccordion>
);

/**
 * ProductExpiration component
 * @returns Product expiration information
 */
const ProductExpiration = () => (
    <ProductAccordion id="product-expiration" summary="Expiration">
        <ExpirationTable />
    </ProductAccordion>
);

/**
 * ProductImage component
 */
const ProductImage = styled("div")(({ image }) => ({
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    width: "100%",
    height: "500px",
}));

/**
 * Product component object
 */
const Product = {
    Title: ProductTitle,
    Intro: ProductIntro,
    Price: ProductPrice,
    QuantityInput: ProductQuantityInput,
    Button: ProductButton,
    NutritionFacts: ProductNutritionFacts,
    Ingredient: ProductIngredient,
    Expiration: ProductExpiration,
    Image: ProductImage,
};

export default Product;
