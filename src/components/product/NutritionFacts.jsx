import React from "react";
import styled from "@emotion/styled";
import {
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import NutritionTableBody from "./NutritionTableBody.jsx";

// padding style
const cellPadding = {
    padding: 0,
    paddingRight: ".75rem",
};

/**
 * StyledTableContainer component
 */
const StyledTableContainer = styled(TableContainer)(() => ({
    maxHeight: "200px",
}));

/**
 * StyledTableCell component
 */
const StyledTableCell = styled(TableCell)(() => ({
    borderBottom: "none",
    padding: "0",
}));

/**
 * BolderTypography component
 */
const BolderTypography = styled(Typography)(() => ({
    fontWeight: "bolder",
}));

/**
 * DailyValueTypography component
 */
const DailyValueTypography = styled(Typography)(() => ({
    fontWeight: "bolder",
    textAlign: "right",
    ...cellPadding,
}));

const NormalHeadRow = ({ bold, text }) => (
    <TableRow>
        <StyledTableCell>
            {bold ? (
                <BolderTypography>{text}</BolderTypography>
            ) : (
                <Typography>{text}</Typography>
            )}
        </StyledTableCell>
    </TableRow>
);

/**
 * DailyValueRow component
 * @returns Daily Value label
 */
const DailyValueRow = () => (
    <TableRow>
        <TableCell colSpan={2} padding="none">
            <DailyValueTypography variant="body2">
                % Daily Value*
            </DailyValueTypography>
        </TableCell>
    </TableRow>
);

/**
 * StyledHeaderRow component
 * @param {Object} props
 * @returns
 */
const StyledHeaderRow = ({ variant = "h6", size = "small", left, right }) => (
    <TableRow>
        <TableCell padding="none" size={size}>
            <Typography variant={variant}>{left}</Typography>
        </TableCell>
        <TableCell sx={cellPadding} align="right" size={size}>
            <Typography variant={variant}>{right}</Typography>
        </TableCell>
    </TableRow>
);

/**
 * NutritionFacts component
 * @returns Nutrition facts label
 */
const NutritionFacts = () => {
    return (
        <StyledTableContainer>
            <Table aria-label="product-nutrition-facts" size="small">
                <TableHead>
                    <NormalHeadRow text="8 servings per container" />
                    <StyledHeaderRow
                        left="Serving size"
                        right="2/3 cup (100g)"
                    />
                    <NormalHeadRow bold text="Amount per serving" />
                    <StyledHeaderRow left="Calories" right="330" variant="h5" />
                    <DailyValueRow />
                </TableHead>
                <NutritionTableBody />
            </Table>
        </StyledTableContainer>
    );
};

export default NutritionFacts;
