import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { CircularProgress } from "@mui/material";
import styled from "@emotion/styled";

/**
 * StyledCircularProgress component
 */
const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
    color: theme.palette.primary.main,
}));

/**
 * Loading component
 * @returns Loading page effect
 */
const Loading = () => (
    <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
        sx={{ height: "calc(100vh - 364px)" }}
    >
        <StyledCircularProgress />
    </Grid>
);

export default Loading;
