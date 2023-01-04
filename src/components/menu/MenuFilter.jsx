import styled from "@emotion/styled";
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import MenuSort from "./MenuSort.jsx";

// filter labels array
const filterLabels = ["Chocolate", "Fruit", "Nut", "Cheese", "Cream"];

/**
 * FilterContainer component
 */
const FilterContainer = styled(Grid2)(() => ({
    marginBottom: "1rem",
}));

/**
 * Filter option text component
 */
const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.light,
    cursor: "pointer",
}));

/**
 * FilterOption component
 * @param {Object} props Label text
 * @returns Filter option with checkbox
 */
const FilterOption = ({ label }) => (
    <FormControl>
        <FormGroup row>
            <FormControlLabel
                control={<Checkbox />}
                value={label}
                label={<StyledTypography>{label}</StyledTypography>}
                labelPlacement="start"
            />
        </FormGroup>
    </FormControl>
);

/**
 * MenuFilter component
 * @returns Menu filter
 */
const MenuFilter = () => (
    <FilterContainer container justifyContent="space-between">
        {filterLabels.map((label, i) => (
            <FilterOption key={i} label={label} />
        ))}
        <MenuSort />
    </FilterContainer>
);

export default MenuFilter;
