import React, { useContext } from "react";
import { TableBody, TableCell, TableRow } from "@mui/material";
import DataContext from "../../data/DataContext.jsx";
import styled from "@emotion/styled";

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
    const { bestSellers } = useContext(DataContext);
    const demoData = bestSellers[0];
    const { nutritionFacts } = demoData;
    const nutritionKey = Object.keys(nutritionFacts);

    return (
        <TableBody>
            {nutritionKey.map((key) => {
                const { weight, value, ...rest } = nutritionFacts[key];
                const percentage = `${value || 0} %`;

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
