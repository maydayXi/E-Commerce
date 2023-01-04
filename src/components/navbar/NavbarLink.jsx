import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "@mui/material";
import styled from "@emotion/styled";

/**
 * Site links
 */
const links = ["Cake", "Cream Puff", "Layer Cake", "Cookie"];

/**
 * StyledLink component
 */
const StyledLink = styled(Link)(({ theme }) => ({
    padding: "10px 16px",
    textDecoration: "none",
    cursor: "pointer",
    letterSpacing: 2,
    color: theme.palette.primary.dark,
}));

/**
 * NavbarLink component
 * @returns Navbar links
 */
const NavbarLink = () => (
    <Grid
        container
        justifyContent="space-evenly"
        alignItems="center"
        sx={{ marginTop: "1rem" }}
    >
        {links.map((link, i) => (
            <StyledLink key={i} href="/menu">
                {link}
            </StyledLink>
        ))}
    </Grid>
);

export default NavbarLink;
