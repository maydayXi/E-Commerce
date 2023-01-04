import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import SiteIcons from "../shared/SiteIcons.jsx";

/**
 * Contact info
 */
const infos = [
    "886912345678",
    "annapovlova@gmail.com",
    "Xinyi District, Taipei City, Taiwan",
    "Open 8:00 ~ 20:00",
];

/**
 * StyledInfo component
 */
const StyledInfo = styled(Typography)(({ theme }) => ({
    padding: "8px 2rem",
    color: theme.palette.primary.dark,
}));

/**
 * FooterIconContainer component
 */
const FooterIconContainer = styled(Grid)(() => ({
    padding: "8px 2rem",
    paddignBottom: 0,
}));

/**
 * Contact component
 * @returns Contact information
 */
const Contact = () => (
    <>
        {infos.map((info, i) => (
            <StyledInfo key={i} variant="caption">
                {info}
            </StyledInfo>
        ))}
        <FooterIconContainer container style={{ paddingBottom: 0 }}>
            <SiteIcons.Whatsapp />
            <SiteIcons.Instagram />
            <SiteIcons.Telegram />
        </FooterIconContainer>
    </>
);

export default Contact;
