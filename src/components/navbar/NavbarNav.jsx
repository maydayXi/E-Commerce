import styled from "@emotion/styled";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "@mui/material";
import SiteIcons from "../shared/SiteIcons.jsx";

/**
 * NavbarToggler component
 */
const NavbarToggler = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 32px;
    height: 32px;
    cursor: pointer;

    &::before,
    &::after {
        content: "";
        display: inline-block;
        height: 3px;
        border-radius: 3px;
        background-color: #b8a6aa;
    }

    &::before {
        width: 20px;
    }

    &::after {
        width: 15px;
    }
`;

const navbarBrandstyle = {
    textAlign: "center",
    display: {
        xs: "none",
        sm: "inline-block",
        md: "inline-block",
        lg: "inline-block",
    },
};

/**
 * NavbarBrand component
 */
const NavbarBrand = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.main,
    lineHeight: "1.75rem",
    fontStyle: "italic",
    textDecoration: "none",
    cursor: "pointer",
}));

/**
 * NavbarAction component
 */
const NavbarAction = styled(Grid)(({ theme }) => ({
    color: theme.palette.primary.dark,
    cursor: "pointer",
}));

/**
 * NavbarNav component
 * @returns Navbar first row
 */
const NavbarNav = () => (
    <Grid container justifyContent="space-between" alignItems="center">
        <Grid xs={1} sm={1} md={1} lg={1}>
            <NavbarToggler className="navbar-toggler" />
        </Grid>
        <Grid sm={6} md={8} lg={8} sx={navbarBrandstyle}>
            <NavbarBrand variant="h3" href="/">
                Anna Povlova
            </NavbarBrand>
        </Grid>
        <NavbarAction
            container
            justifyContent="flex-end"
            alignItems="center"
            xs={4}
            sm={2}
            md={2}
            className="navbar-action"
        >
            <SiteIcons.Search />
            <SiteIcons.User />
            <SiteIcons.ShoppingBag />
        </NavbarAction>
    </Grid>
);

export default NavbarNav;
