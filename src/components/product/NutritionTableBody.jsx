import React, { useContext } from "react";
import { TableBody, TableCell, TableRow } from "@mui/material";
import styled from "@emotion/styled";
import { CakeContext } from "../../context/CakeProvider.jsx";

// font weight style
const fontWeightBold = {
    fontWeight: "bolder",
};

// padding style
const cellPadding = {
    padding: 0,
    paddingRight: ".75rem",
};

/**
 * SubCell component
 */
const SubCell = styled(TableCell)(() => ({
    paddingTop: 0,
    paddingBottom: 0,
}));

/**
 * SubRow component
 * @param {Object} pros rest props
 * @returns Sub nutrition facts information
 */
const SubRow = ({ rest }) => {
    const subKey = Object.keys(rest);
    return subKey.map((key, i) => {
        const { weight, value } = rest[key];
        const percentage = value || 0;

        return (
            <TableRow key={i}>
                <SubCell>{`${key} ${weight}`}</SubCell>
                <SubCell
                    align="right"
                    sx={fontWeightBold}
                >{`${percentage}%`}</SubCell>
            </TableRow>
        );
    });
};

/**
 * NutritionTableBody component
 * @returns Nutrition table
 */
const NutritionTableBody = () => {
    const { cake } = useContext(CakeContext);
    const { nutrition_facts } = cake;
    const nutritionKey = Object.keys(nutrition_facts);

    return (
        <TableBody>
            {nutritionKey.map((key) => {
                const { weight, value, ...rest } = nutrition_facts[key];
                const percentage = `${value || 0} %`;

                if (key === "servings_per_recipe") return null;
                if (key === "calories") return null;

                return (
                    <React.Fragment key={key}>
                        <TableRow>
                            <TableCell sx={fontWeightBold} padding="none">
                                {`${key} ${weight}`}
                            </TableCell>
                            <TableCell
                                sx={{ ...cellPadding, ...fontWeightBold }}
                                align="right"
                            >
                                {percentage}
                            </TableCell>
                        </TableRow>
                        <SubRow rest={rest} />
                    </React.Fragment>
                );
            })}
        </TableBody>
    );
};

export default NutritionTableBody;
