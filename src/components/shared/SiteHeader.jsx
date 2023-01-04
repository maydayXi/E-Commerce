import styled from "@emotion/styled";
import React from "react";
import NavbarLink from "../navbar/NavbarLink.jsx";
import NavbarNav from "../navbar/NavbarNav.jsx";

/**
 * HeaderContainer component
 */
const HeaderContainer = styled("div")(() => ({
    paddingTop: "30px",
}));

/**
 * SiteHeader component
 * @returns Site header content
 */
const SiteHeader = () => (
    <HeaderContainer className="site-header">
        <NavbarNav />
        <NavbarLink />
    </HeaderContainer>
);

export default SiteHeader;
