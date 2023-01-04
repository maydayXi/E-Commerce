import styled from "@emotion/styled";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import React from "react";
import SiteIcons from "../shared/SiteIcons.jsx";

/**
 * StyledAccordionSummary component with no padding style
 */
const StyledAccordionSummary = styled(AccordionSummary)(() => ({
    padding: 0,
}));

/**
 * ProductAccordion component
 * @param {Object} props Product id, summary and details
 * @returns Accordion component contains product details
 * @see Accordion
 */
const ProductAccordion = ({ id, summary, children }) => (
    <Accordion square disableGutters elevation={0}>
        <StyledAccordionSummary id={id} expandIcon={<SiteIcons.Expand />}>
            <Typography variant="h6">{summary}</Typography>
        </StyledAccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
);

export default ProductAccordion;
