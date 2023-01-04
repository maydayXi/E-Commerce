import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Card } from "@mui/material";
import DataContext from "../../data/DataContext.jsx";
import SiteIcons from "../shared/SiteIcons.jsx";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";
import BagDetail from "./BagDetail.jsx";

/**
 * FlexCard component
 */
const FlexCard = styled(Card)(() => ({
    display: "flex",
    alignItems: "stretch",
    borderRadius: 0,
    marginBottom: "1rem",
    height: "125px",
}));

/**
 * CardImage component
 */
const CardImage = styled("div")(({ image }) => ({
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    flex: 4,
    height: "100%",
}));

const CardDetail = styled(Grid2)(({ theme }) => ({
    flex: 8,
    padding: 0,
    paddingLeft: "1rem",
    borderBottom: "2px solid",
    borderColor: theme.palette.primary.light,
}));

const BagItemCard = () => {
    const { bestSellers } = useContext(DataContext);
    const { title, image } = bestSellers[0];

    return (
        <FlexCard elevation={0}>
            <CardImage image={image.src} />
            <CardDetail>
                <BagDetail title={title} icon={<SiteIcons.Remove />} />
            </CardDetail>
        </FlexCard>
    );
};

export default BagItemCard;
