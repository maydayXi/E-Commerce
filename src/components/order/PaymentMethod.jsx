import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from "@mui/material";
import React from "react";

const PaymentMethod = () => (
    <FormControl>
        <FormLabel id="payment-method-label">Payment Method</FormLabel>
        <RadioGroup
            aria-labelledby="payment-method-label"
            defaultValue="online"
            name="pay_with"
        >
            <FormControlLabel
                value="online"
                control={<Radio />}
                label="Online"
            />
            <FormControlLabel
                value="cash on delivery "
                control={<Radio />}
                label="Cash on delivery "
            />
        </RadioGroup>
    </FormControl>
);

export default PaymentMethod;
