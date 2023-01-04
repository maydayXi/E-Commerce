import React, { useContext } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2.js";
import DataContext from "../../data/DataContext.jsx";
import SectionLayout from "../../layout/SectionLayout.jsx";
import SocialImage from "../../components/socialMedia/SocialImage.jsx";
import SocialContent from "../../components/socialMedia/SocialContent.jsx";

const sectionTitle = "SocialMedia",
    sectionDetail = "INSTAGRAM";

// hidden style
const hidden = {
    display: {
        xs: "none",
        sm: "flex",
        md: "flex",
        lg: "flex",
    },
};

// flex order style
const flexOrder = {
    order: {
        sm: 1,
        md: 3,
        lg: 3,
    },
};

// margin style
const mb2 = {
    marginBottom: "2rem",
};

// padding style
const p0 = {
    padding: 0,
};

/**
 * SocailMediaSection component
 * @returns Social media content
 */
const SocialMediaSection = () => {
    const { SocialMedia } = useContext(DataContext);

    return (
        <SectionLayout
            title={sectionTitle}
            detailText={sectionDetail}
            detailLink="/"
        >
            <Grid container spacing={2} sx={mb2}>
                <Grid
                    container
                    order={1}
                    flexDirection="column"
                    alignItems="center"
                    gap={4}
                    sm={6}
                    md={4}
                    lg={4}
                    sx={{ ...hidden, ...mb2 }}
                >
                    <SocialImage
                        image={SocialMedia[0].src}
                        imageHeight="350px"
                        title={SocialMedia[0].title}
                    />
                    <SocialImage
                        image={SocialMedia[1].src}
                        imageHeight="350px"
                        title={SocialMedia[1].title}
                    />
                </Grid>
                <Grid
                    container
                    flexDirection="column"
                    alignItems="center"
                    gap={2}
                    order={2}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={4}
                    sx={mb2}
                >
                    <SocialImage
                        image={SocialMedia[2].src}
                        title={SocialMedia[2].title}
                        imageHeight="450px"
                    />
                    <Grid
                        container
                        flexDirection="column"
                        justifyContent="space-between"
                        flexGrow={1}
                        sx={{ ...p0, width: "90%" }}
                    >
                        <SocialContent />
                    </Grid>
                </Grid>
                <Grid
                    container
                    flexDirection="column"
                    alignItems="center"
                    gap={4}
                    sm={6}
                    md={4}
                    lg={4}
                    sx={{ ...hidden, ...flexOrder }}
                >
                    <SocialImage
                        image={SocialMedia[3].src}
                        imageHeight="350px"
                        title={SocialMedia[3].title}
                    />
                    <SocialImage
                        image={SocialMedia[4].src}
                        imageHeight="350px"
                        title={SocialMedia[4].title}
                    />
                </Grid>
            </Grid>
        </SectionLayout>
    );
};

export default SocialMediaSection;
