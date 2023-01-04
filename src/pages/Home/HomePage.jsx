import React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2.js";
import SiteHeader from "../../components/shared/SiteHeader.jsx";
import SiteFooter from "../../components/shared/SiteFooter.jsx";
import SectionLayout from "../../layout/SectionLayout.jsx";
import ProductRowLayout from "../../layout/ProductRowLayout.jsx";
import AboutSection from "./AboutSection.jsx";
import SocialMediaSection from "./SocialMediaSection.jsx";
import ActionButton from "../../components/shared/ActionButton.jsx";
import CardIcon from "../../components/shared/CardIcon.jsx";
import SiteIcons from "../../components/shared/SiteIcons.jsx";
import data from "../../data/data.js";

import "/src/style/style.css";

/**
 * SectionButton component
 * @param {Object} props Button text
 * @returns Section button
 */
const SectionButton = ({ children }) => (
    <Grid container spacing={2}>
        <Grid
            xs={12}
            sm={6}
            md={3}
            smOffset={6}
            mdOffset={9}
            sx={{ marginBottom: "2rem" }}
        >
            <ActionButton>{children}</ActionButton>
        </Grid>
    </Grid>
);

/**
 * HomePage component
 * @returns Home page content
 */
const HomePage = () => (
    <>
        <Container>
            <SiteHeader />
            <SectionLayout
                title="Best Sellers"
                detailText="MENU"
                detailLink="/menu"
            >
                <ProductRowLayout
                    products={data.bestSellers}
                    icon={
                        <CardIcon>
                            <SiteIcons.Star />
                        </CardIcon>
                    }
                />
                <SectionButton>Buy</SectionButton>
            </SectionLayout>
            <AboutSection />
            <SectionLayout
                title="New Arrivals"
                detailText="MENU"
                detailLink="/menu"
            >
                <ProductRowLayout
                    products={data.newArrivals}
                    icon={
                        <CardIcon>
                            <SiteIcons.New />
                        </CardIcon>
                    }
                />
                <SectionButton>Buy</SectionButton>
            </SectionLayout>
            <SocialMediaSection />
        </Container>
        <SiteFooter />
    </>
);

export default HomePage;
