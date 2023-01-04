import React from "react";
import { Card, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

/**
 * hidden style
 */
const hidden = {
    display: "none",
};

const padding0 = {
    padding: 0,
};

/**
 * AboutIntro component
 * @param {Objecgt} props About title and description
 * @returns About content
 */
const AboutIntro = ({ title, description }) => (
    <Grid sx={padding0}>
        <Typography variant="h6" sx={{ marginBottom: "1.5rem" }}>
            {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
    </Grid>
);

/**
 * AboutCard component
 * @param {Object} props About content, contains title, desciption and image
 * @returns About content
 */
const AboutCard = ({ title, description, imageTop, image }) => {
    const { src, alt } = { ...image };

    const CardImage = styled("div")(() => ({
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        width: "100%",
        height: "350px",
    }));

    return (
        <Card elevation={0} sx={{ borderRadius: 0 }}>
            <CardImage
                title={alt}
                style={!imageTop ? hidden : { marginBottom: "2rem" }}
            />
            <AboutIntro title={title} description={description} />
            <CardImage
                title={alt}
                style={imageTop ? hidden : { marginTop: "2rem" }}
            />
        </Card>
    );
};

export default AboutCard;
