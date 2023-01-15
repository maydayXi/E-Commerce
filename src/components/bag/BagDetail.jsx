import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";
import React, { useState } from "react";
import Product from "../product/Product.jsx";

/**
 * FlexBox component
 */
const FlexBox = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
}));

/**
 * IconWrap component
 */
const IconWrap = styled(Grid2)(() => ({
    width: "100%",
    textAlign: "right",
    padding: 0,
}));

/**
 * BagDetail component
 * @param {Object} props bag detail content
 * @returns Bag item detail
 */
const BagDetail = ({ title, icon, quantity, price }) => {
    const [count, setCount] = useState(quantity);

    return (
        <FlexBox>
            {icon ? <IconWrap>{icon}</IconWrap> : null}
            <Typography variant="h6" sx={{ mt: -2 }}>
                {title}
            </Typography>
            <Grid2 container justifyContent="space-between" alignItems="start">
                <Product.QuantityInput onChange={setCount} />
                <Typography variant="h6" sx={{ p: ".5rem 0" }}>
                    $ {quantity * price}
                </Typography>
            </Grid2>
        </FlexBox>
    );
};

export default BagDetail;
