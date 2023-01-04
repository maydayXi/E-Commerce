import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

/**
 * IconBox component
 */
const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 24,
    height: 24,
    color: theme.palette.primary.light,
    borderRadius: "50%",
    backgroundColor: "#FAF8F8",
    zIndex: "5",
}));

/**
 * CardIcon component
 * @param {Compnent} content Icon content
 * @returns Box component
 */
const CardIcon = ({ children }) => <IconBox>{children}</IconBox>;

export default CardIcon;
