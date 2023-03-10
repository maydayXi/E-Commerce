import React, { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Button, ButtonGroup, TextField, Typography } from "@mui/material";
import SiteIcons from "../shared/SiteIcons.jsx";
import { CakeContext } from "../../context/CakeProvider.jsx";

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

const errorStyle = {
    borderColor: "#DC3545",
};

const QuantityInput = ({ page, onChange }) => {
    console.log(useContext(CakeContext));
    const { inventory } = useContext(CakeContext);

    // TODO: 要帶出購物車已經選購的數量
    // 如果沒有再判斷有沒有庫存
    let [quantity, setQuantity] = useState(inventory.quantity ? 1 : 0);
    const [error, setError] = useState(false);

    const handleIncrease = () => {
        quantity = isNaN(quantity) ? 1 : quantity + 1;
        quantity = quantity > inventory ? quantity : inventory;
        setQuantity(quantity);
    };

    const handleDecrease = () => {
        quantity = isNaN(quantity) ? 1 : quantity > 1 ? quantity - 1 : 1;
        setQuantity(quantity);
    };

    const handleChange = (event) => {
        const value = event.target.value;
        setQuantity(value);
    };

    useEffect(() => {
        if (!onChange) return;

        onChange(quantity);
    }, [quantity]);

    return (
        <Grid2
            container
            spacing={2}
            sx={{ mb: "1rem " }}
            justifyContent="space-between"
            alignItems="flex-end"
        >
            <StyledButtonGroup
                size="small"
                variant="text"
                style={error ? { errorStyle } : {}}
            >
                <StyledButton
                    disabled={!quantity}
                    sx={decreaseButtonStyle}
                    onClick={handleDecrease}
                >
                    <SiteIcons.Decrease />
                </StyledButton>
                <StyledTextField
                    id="product-quantity"
                    variant="standard"
                    inputProps={quantityProps}
                    value={quantity}
                    onChange={handleChange}
                    disabled={!quantity}
                />
                <StyledButton
                    disabled={!quantity}
                    sx={increaseButtonStyle}
                    onClick={handleIncrease}
                >
                    <SiteIcons.Increase />
                </StyledButton>
            </StyledButtonGroup>
            {page ? (
                page === "product" ? (
                    <Typography variant="h6">Inventory：{quantity}</Typography>
                ) : null
            ) : null}
        </Grid2>
    );
};

export default QuantityInput;
