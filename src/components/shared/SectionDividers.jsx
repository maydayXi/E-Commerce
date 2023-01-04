import styled from "@emotion/styled";

/**
 * SectionDividers component
 */
const SectionDividers = styled("div")(({ theme }) => ({
    display: "inline-block",
    width: "100vw",
    height: "2px",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: theme.palette.primary.light,
    transition: "none",
}));

export default SectionDividers;
