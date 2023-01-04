import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

/**
 * FooterBrand component
 */
const FooterBrand = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontStyle: "italic",
}));

/**
 * Copyright component
 * @returns Copyrights content
 */
const Copyright = () => (
    <>
        <FooterBrand variant="h4">Anna Povlova</FooterBrand>
        <Typography variant="body2">
            &copy; 2022 Anna Povlova copyright reserved.
        </Typography>
    </>
);

export default Copyright;
