import React, { useContext } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2.js";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import SectionLayout from "../../layout/SectionLayout.jsx";
import AboutCard from "../../components/about/AboutCard.jsx";
import DataContext from "../../data/DataContext.jsx";

const title = "About Us",
    detail = "SEE MORE";

// padding style
const paddingRWDStyle = {
    xs: "initial",
    sm: 0,
    md: 0,
    lg: 0,
};
const ps = {
    paddingLeft: paddingRWDStyle,
};
const pe = {
    paddingRight: paddingRWDStyle,
};

/**
 * AboutSection component
 * @returns About section content
 */
const AboutSection = () => {
    const { about } = useContext(DataContext);
    const theme = useTheme();
    const match = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <SectionLayout title={title} detailText={detail} detailLink="/">
            <Grid container>
                <Grid xs={12} sm={8} md={8}>
                    <Typography variant="h6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus quisquam ea pariatur repudiandae quo quam dolores
                        rerum delectus, temporibus neque.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={4} sx={{ margin: "2rem 0" }}>
                {about.map((data, i) => {
                    // the image on top side if it's the first item
                    // [!] when it's small screen, it will always on top side
                    const isTopSide = match || i === 0;

                    return (
                        <Grid
                            xs={12}
                            sm={6}
                            md={6}
                            key={i}
                            style={isTopSide ? ps : pe}
                        >
                            <AboutCard
                                title={data.title}
                                description={data.description}
                                image={data.image}
                                imageTop={isTopSide}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </SectionLayout>
    );
};

export default AboutSection;
