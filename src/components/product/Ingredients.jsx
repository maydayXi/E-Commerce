import React, { useContext } from "react";
import styled from "@emotion/styled";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from "@mui/material";
import DataContext from "../../data/DataContext.jsx";

/**
 * StyledTableCell component
 */
const StyledTableCell = styled(TableCell)(() => ({
    padding: ".25rem 0",
}));

/**
 * StyledTableContainer component
 */
const StyledTableContainer = styled(TableContainer)(() => ({
    maxHeight: "200px",
}));

/**
 * Ingredient component
 * @returns Ingredient Table
 */
const Ingredient = () => {
    const { bestSellers } = useContext(DataContext);
    const { ingredients } = { ...bestSellers[0] };

    return (
        <StyledTableContainer>
            <Table aria-label="product-ingredient" size="small">
                <TableBody>
                    {ingredients.map((item, i) => (
                        <TableRow key={i}>
                            <StyledTableCell>{item}</StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </StyledTableContainer>
    );
};

export default Ingredient;
