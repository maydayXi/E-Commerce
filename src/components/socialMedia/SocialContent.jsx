import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import SiteIcons from "../shared/SiteIcons.jsx";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

// padding style
const p0 = {
    padding: 0,
};

/**
 * SocialIcons component
 * @returns Social icons
 */
const SocialIcons = () => (
    <>
        <Grid container>
            <SiteIcons.Heart />
            <SiteIcons.Comment />
            <SiteIcons.Plane />
        </Grid>
        <SiteIcons.Bookmark />
    </>
);

/**
 * Likes component
 */
const Likes = styled(Typography)(() => ({
    fontSize: "1.25rem",
    fontWeight: "bolder",
    margin: "1rem 0",
}));

const HashTag = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
}));

const SocialContent = () => (
    <>
        <Grid container alignItems="center" justifyContent="space-between">
            <SocialIcons />
        </Grid>
        <Likes variant="h5">Likes：888</Likes>
        <Typography variant="body1" style={{ transform: "translateY(-25%)" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            debitis sint molestias nam magnam repellendus quod sit nobis optio!
            Magni?
        </Typography>
        <HashTag variant="h4">#annapovlova</HashTag>
    </>
);

export default SocialContent;
