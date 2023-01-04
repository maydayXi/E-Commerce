import React from "react";
import styled from "@emotion/styled";
import { alpha, Card, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import ActionButton from "../shared/ActionButton.jsx";
import Product from "../product/Product.jsx";

/**
 * FlexCard component
 */
const FlexCard = styled(Card)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    borderRadius: 0,
    border: "2px solid",
    borderColor: alpha(theme.palette.primary.dark, 0.3),
    padding: "1rem",
    marginBottom: "2rem",
}));

const SubTotal = styled(Grid2)(({ theme }) => ({
    borderBottom: "1px solid",
    borderColor: theme.palette.primary.light,
}));

/**
 * CheckoutCard component
 * @returns Checkout content
 */
const CheckoutCard = () => (
    <FlexCard elevation={0}>
        <Typography variant="h6" sx={{ mb: 2 }}>
            Coupon ?
        </Typography>
        <Grid2 container alignItems="end" spacing={2} sx={{ mb: 2 }}>
            <Grid2 sx={{ p: 0 }} lg={6} md={6} sm={6} xs={6}>
                <TextField
                    id="coupon-code"
                    label="Coupon Code"
                    variant="standard"
                />
            </Grid2>
            <Grid2 sx={{ pb: 0, pr: 0 }} lg={6} md={6} sm={6} xs={6}>
                <ActionButton href="/">Apply</ActionButton>
            </Grid2>
        </Grid2>
        <SubTotal
            container
            sx={{ mb: 5, mr: 0, ml: 0 }}
            justifyContent="space-between"
        >
            <Typography variant="h6">Your order amount</Typography>
            <Typography variant="h6">$ 3000</Typography>
        </SubTotal>
        <Product.Button href="/ordering">Checkout</Product.Button>
    </FlexCard>
);

export default CheckoutCard;
