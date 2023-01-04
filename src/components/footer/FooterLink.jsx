import React from "react";
import styled from "@emotion/styled";
import { Link } from "@mui/material";

/**
 * Footer links
 */
const links = ["MENU", "ABOUT US", "BOOKING", "ON SALE", "FQA"];

/**
 * StyledLink component
 */
const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.dark,
    textDecoration: "none",
    cursor: "pointer",
    padding: "8px 2rem",
    letterSpacing: 1,
}));

/**
 * FooterLink component
 * @returns Footer link content
 */
const FooterLink = () => (
    <>
        {links.map((link, i) => (
            <StyledLink
                key={i}
                style={link === "FQA" ? { paddingBottom: 0 } : {}}
                variant="body2"
            >
                {link}
            </StyledLink>
        ))}
    </>
);

export default FooterLink;
