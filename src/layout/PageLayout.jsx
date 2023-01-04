import { Container } from "@mui/material";
import React from "react";
import SiteFooter from "../components/shared/SiteFooter.jsx";
import SiteHeader from "../components/shared/SiteHeader.jsx";

export const PageLayout = ({ children }) => {
    return (
        <>
            <Container>
                <SiteHeader />
                {children}
            </Container>
            <SiteFooter />
        </>
    );
};
