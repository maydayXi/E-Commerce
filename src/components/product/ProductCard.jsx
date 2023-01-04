import React from "react";
import { Card, CardActionArea, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import styled from "@emotion/styled";
import CardLink from "../shared/CardLink.jsx";

/**
 * CardTitle component
 */
const CardTitle = styled(Typography)(() => ({
    marginBottom: "2rem",
}));

/**
 * CardImage component
 */
const CardImage = styled("div")(({ src }) => ({
    backgroundImage: `url(${src})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    width: "100%",
    height: "350px",
}));

/**
 * CardIconGrid component
 */
const CardIconGrid = styled(Grid)(() => ({
    padding: "1rem",
}));

/**
 * CardInfo component
 */
const CardInfo = styled(Grid)(() => ({
    padding: "1rem 1.5rem",
}));

/**
 * ProductCard component
 * @param {Object} props Product card content, contains title, image, price and icon
 * @returns Card
 * @see Card
 */
const ProductCard = ({ productId, title, image, price, icon }) => {
    const { src, alt } = image;

    return (
        <CardLink href={`/product/${productId}`}>
            <Card className="product-card">
                <CardActionArea>
                    <CardImage title={alt} src={src}>
                        {icon ? (
                            <CardIconGrid container flexDirection="row-reverse">
                                {icon}
                            </CardIconGrid>
                        ) : null}
                    </CardImage>
                    <CardInfo
                        container
                        flexDirection="column"
                        justifyContent="space-between"
                    >
                        <CardTitle variant="subtitle1">{title}</CardTitle>
                        <Typography variant="caption">$ {price}</Typography>
                    </CardInfo>
                </CardActionArea>
            </Card>
        </CardLink>
    );
};

export default ProductCard;
