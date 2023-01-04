import React from "react";
import styled from "@emotion/styled";
import { alpha, Card, Typography } from "@mui/material";
import BagItemCard from "../bag/BagItemCard.jsx";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";

/**
 * FlexCard component
 */
const FlexCard = styled(Card)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    borderRadius: 0,
    border: "2px solid",
    borderColor: alpha(theme.palette.primary.dark, 0.3),
    padding: "2rem",
    margin: "0 auto",
    marginBottom: "2rem",
    maxWidth: "600px",
    minWidth: "300px",
}));

const OrderingDetail = styled(Grid2)(({ theme }) => ({
    borderBottom: "2px solid",
    borderColor: alpha(theme.palette.primary.light, 0.3),
    marginBottom: "1rem",
}));

const OrderingCard = () => {
    return (
        <FlexCard elevation={0}>
            <BagItemCard />
            <BagItemCard />
            <BagItemCard />
            <OrderingDetail container justifyContent="space-between">
                <Typography variant="h6">Delivery fee</Typography>
                <Typography variant="h6">Free</Typography>
            </OrderingDetail>
            <OrderingDetail container justifyContent="space-between">
                <Typography variant="h6">Promo code</Typography>
                <Typography variant="h6">-10%</Typography>
            </OrderingDetail>
            <OrderingDetail container justifyContent="space-between">
                <Typography variant="h6">Total Amount</Typography>
                <Typography variant="h6">$ 5040</Typography>
            </OrderingDetail>
        </FlexCard>
    );
};

export default OrderingCard;
