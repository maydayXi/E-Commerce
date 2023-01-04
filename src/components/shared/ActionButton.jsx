import React from "react";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const mainColor = (opacity) => `rgba(134, 65, 81, ${opacity})`;

/**
 * StyledButton component
 */
const StyledButton = styled(Button)((theme) => ({
    marginTop: "1rem",
    borderColor: mainColor(1),
    borderRadius: 0,
    color: mainColor(1),
    width: "100%",

    "&:hover": {
        borderColor: mainColor(1),
        color: mainColor(1),
        backgroundColor: mainColor(0.04),
    },
}));

const ActionButton = ({ children }) => (
    <StyledButton variant="outlined" href="/menu">
        {children}
    </StyledButton>
);

export default ActionButton;
