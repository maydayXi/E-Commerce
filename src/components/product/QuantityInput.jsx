import React from "react";
import styled from "@emotion/styled";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button, ButtonGroup, TextField, Typography } from "@mui/material";
import SiteIcons from "../shared/SiteIcons.jsx";

// increase button style
const decreaseButtonStyle = {
    justifyContent: "start",
    paddingLeft: 0,
    border: "none !important",
};

// decrease button style
const increaseButtonStyle = {
    justifyContent: "end",
    paddingRight: 0,
};

const quantityProps = {
    inputMode: "numeric",
    pattern: "[0-9]*",
    min: 1,
    style: {
        textAlign: "center",
        fontSize: "1.5rem",
    },
};

/**
 * StyledButtonGroup component
 */
const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
    borderRadius: 0,
    borderBottom: "2px solid",
    borderColor: theme.palette.primary.main,
}));

/**
 * StyledButton component
 */
const StyledButton = styled(Button)(() => ({
    border: "none",
    width: "3rem",
    minWidth: "2rem",
}));

/**
 * StyledTextField component
 */
const StyledTextField = styled(TextField)`
    font-size: 1.25rem;
    line-height: 1.25rem;
    width: 2rem;
    min-width: 3rem;

    & > div::before,
    & > div::after {
        content: none !important;
    }
`;

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.dark,
}));

const QuantityInput = () => {
    return (
        <Grid2
            container
            spacing={2}
            sx={{ mb: "1rem " }}
            justifyContent="space-between"
            alignItems="flex-end"
        >
            <StyledButtonGroup size="small" variant="text">
                <StyledButton sx={decreaseButtonStyle}>
                    <SiteIcons.Decrease />
                </StyledButton>
                <StyledTextField
                    id="product-quantity"
                    variant="standard"
                    inputProps={quantityProps}
                    defaultValue={1}
                />
                <StyledButton sx={increaseButtonStyle}>
                    <SiteIcons.Increase />
                </StyledButton>
            </StyledButtonGroup>
            {/* <StyledTypography variant="h5">庫存：10</StyledTypography> */}
        </Grid2>
    );
};

export default QuantityInput;
