import React from "react";
import styled from "@emotion/styled";
import { Box, Link, Typography } from "@mui/material";
import SectionDividers from "../components/shared/SectionDividers.jsx";

/**
 * StyledSection component
 */
const StyledSection = styled("section")(() => ({
    padding: "60px 0",
}));

/**
 * SectionTitle component
 */
const SectionTitle = styled(Typography)(() => ({
    display: "inline-block",
    padding: "4px 1rem",
    backgroundColor: "white",
    transform: "translateY(-50%)",
    letterSpacing: 1,
}));

const DetailBox = styled(Box)(({ theme }) => ({
    width: "50%",
    borderBottom: "2px solid",
    borderColor: theme.palette.primary.light,
}));

/**
 * DetailLink component
 */
const DetailLink = styled(Link)(({ theme }) => ({
    cursor: "pointer",
    textDecoration: "none",
    color: theme.palette.primary.dark,
}));

/**
 * SectionLayout component
 * @param {Object} props Section content
 * @returns Section content
 */
const SectionLayout = ({ title, children, detailText, detailLink }) => (
    <StyledSection>
        <SectionDividers />
        <SectionTitle variant="h6">{title}</SectionTitle>
        {children}
        {detailText ? (
            <DetailBox component="div">
                <DetailLink variant="body2" href={detailLink}>
                    {detailText}
                </DetailLink>
            </DetailBox>
        ) : null}
    </StyledSection>
);

export default SectionLayout;
