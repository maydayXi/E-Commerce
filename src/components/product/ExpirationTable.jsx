import styled from "@emotion/styled";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";
import React from "react";

const HeaderCell = styled(TableCell)(() => ({
    fontWeight: "bolder",
    textAlign: "center",
}));

/**
 * Expiration component
 * @returns Expiration table
 */
const ExpirationTable = () => (
    <Table size="small">
        <TableHead>
            <TableRow>
                <HeaderCell>Fridge</HeaderCell>
                <HeaderCell>Freezer</HeaderCell>
            </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell align="center">2 ~ 3 days</TableCell>
                <TableCell align="center">1 week</TableCell>
            </TableRow>
        </TableBody>
    </Table>
);

export default ExpirationTable;
