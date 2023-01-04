import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import CardLink from "../shared/CardLink.jsx";
import styled from "@emotion/styled";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";

/**
 * CardImage component
 */
const CardImage = styled("div")(({ src }) => ({
    backgroundImage: `url(${src})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    width: "100%",
}));

const StyledGrid = styled(Grid2)(() => ({
    padding: 0,
}));

const StyledTypography = styled(Typography)(() => ({
    height: "20%",
}));

/**
 * MenuCard component
 * @param {Object} props Menu item information
 * @returns Menu item
 */
const MenuItemCard = ({ id, title, price, intro, image }) => (
    <CardLink href={`/product/${id}`}>
        <Card>
            <CardImage src={image} />
            <CardContent>
                <Grid2
                    container
                    justifyContent="space-between"
                    sx={{ marginBottom: "1rem" }}
                >
                    <StyledGrid>{title}</StyledGrid>
                    <StyledGrid>$ {price}</StyledGrid>
                </Grid2>
                <StyledTypography>{intro}</StyledTypography>
            </CardContent>
        </Card>
    </CardLink>
);

export default MenuItemCard;
