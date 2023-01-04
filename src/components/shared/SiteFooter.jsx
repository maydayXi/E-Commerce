import React from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Copyright from "../footer/Copyright.jsx";
import FooterLink from "../footer/FooterLink.jsx";
import Contact from "../footer/Contact.jsx";
import { Container } from "@mui/system";

/**
 * Footer conponent
 */
const FooterContainer = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.primary.white,
}));

const StyledContainer = styled(Container)(() => ({
    display: "flex",
    padding: "30px",
}));

/**
 * SiteFooter component
 * @returns Site footer content
 */
const SiteFooter = () => (
    <FooterContainer container className="footer-container">
        <StyledContainer>
            <Grid
                container
                flexDirection="column"
                justifyContent="space-between"
                sm={4}
                md={4}
            >
                <Copyright />
            </Grid>
            <Grid container flexDirection="column" sm={4} md={4}>
                <FooterLink />
            </Grid>
            <Grid container flexDirection="column" sm={4} md={4}>
                <Contact />
            </Grid>
        </StyledContainer>
    </FooterContainer>
);

export default SiteFooter;
