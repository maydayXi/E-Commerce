import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

// full width style
const fullWidth = {
    width: "100%",
};

/**
 * TimeSelect component
 * @returns Time select
 */
const TimeSelect = () => {
    const [time, setTime] = useState("");

    const handleChange = (event) => setTime(event.target.value);

    return (
        <FormControl variant="standard" sx={fullWidth}>
            <InputLabel id="delivery-time">Time</InputLabel>
            <Select
                labelId="delivery-time"
                id="delivery-time-select"
                value={time}
                onChange={handleChange}
            >
                <MenuItem value="09:00-12:00">09:00-12:00</MenuItem>
                <MenuItem value="12:00-15:00">12:00-15:00</MenuItem>
                <MenuItem value="15:00-18:00">15:00-18:00</MenuItem>
            </Select>
        </FormControl>
    );
};

export default TimeSelect;
