import React from "react";
import { Container } from "@mui/material";
import SiteFooter from "../../components/shared/SiteFooter.jsx";
import SiteHeader from "../../components/shared/SiteHeader.jsx";
import SectionLayout from "../../layout/SectionLayout.jsx";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";
import BagItemCard from "../../components/bag/BagItemCard.jsx";
import CheckoutCard from "../../components/bag/CheckoutCard.jsx";

/**
 * BagPage component
 */
const BagPage = () => (
    <>
        <Container>
            <SiteHeader />
            <SectionLayout
                title="Shopping Bag"
                detailText="Go shopping"
                detailLink="/menu"
            >
                <Grid2 container spacing={2}>
                    <Grid2 lg={7} md={7} sm={7} xs={12}>
                        <BagItemCard />
                        <BagItemCard />
                        <BagItemCard />
                    </Grid2>
                    <Grid2 lg={5} md={5} sm={5} xs={12}>
                        <CheckoutCard />
                    </Grid2>
                </Grid2>
            </SectionLayout>
        </Container>
        <SiteFooter />
    </>
);

export default BagPage;
