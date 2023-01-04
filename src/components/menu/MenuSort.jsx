import React, { useState } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import styled from "@emotion/styled";

/**
 * StyledFormControl
 */
const StyledFormControl = styled(FormControl)(() => ({
    width: "15%",
    minWidth: "150px",
}));

/**
 * Sort component
 * @returns Sort element
 */
const Sort = () => {
    const [sorted, setSorted] = useState("");

    const handleChange = (event) => setSorted(event.target.value);

    return (
        <StyledFormControl variant="standard">
            <InputLabel id="menu-sort-menu-label">Sort</InputLabel>
            <Select
                labelId="menu-sort-menu"
                value={sorted}
                onChange={handleChange}
                label="Sort"
            >
                <MenuItem value="Price (high to low)">
                    Price (high to low)
                </MenuItem>
                <MenuItem value="Price (low to high)">
                    Price (low to high)
                </MenuItem>
                <MenuItem value="Size (big to small)">
                    Size (big to small)
                </MenuItem>
                <MenuItem value="Size (small to big)">
                    Size (small to big)
                </MenuItem>
                <MenuItem value="New">New</MenuItem>
                <MenuItem value="Best">Best</MenuItem>
            </Select>
        </StyledFormControl>
    );
};

/**
 * MenuSort component
 * @returns Menu sort content
 */
const MenuSort = () => (
    <Grid2 container justifyContent="flex-end" lg={12} md={12} sm={12} xs={12}>
        <Sort />
    </Grid2>
);

export default MenuSort;
