import React from "react";
import { Container, Typography } from "@mui/material";
import styled from "@emotion/styled";
import SiteFooter from "../../components/shared/SiteFooter.jsx";
import SiteHeader from "../../components/shared/SiteHeader.jsx";
import NotFoundImageUrl from "../../images/404notfound.svg";

/**
 * PageTitle component
 */
const PageTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    textAlign: "center",
    fontSize: "16rem",
    lineHeight: "14rem",
}));

const PageImage = styled("div")(() => ({
    backgroundImage: `url(${NotFoundImageUrl})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "400px",
    width: "50%",
    margin: "0 auto",
    minWidth: "500px",
    transform: "translateX(2rem)",
}));

/**
 * NotFoundPage component
 * @returns Http 404 page not found
 */
const NotFoundPage = () => (
    <>
        <Container style={{ textAlign: "center" }}>
            <SiteHeader />
            <PageTitle>404</PageTitle>
            <Typography variant="h4">Not Found</Typography>
            <Typography variant="h6">
                Sorry, we were unable to find that page
            </Typography>
            <PageImage />
        </Container>
        <SiteFooter />
    </>
);

export default NotFoundPage;
