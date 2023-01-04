import React, { useContext } from "react";
import { Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";
import styled from "@emotion/styled";
import SiteHeader from "../../components/shared/SiteHeader.jsx";
import SiteFooter from "../../components/shared/SiteFooter.jsx";
import SectionLayout from "../../layout/SectionLayout.jsx";
import ProductRowLayout from "../../layout/ProductRowLayout.jsx";
import MenuItemCard from "../../components/menu/MenuItemCard.jsx";
import MenuRow from "./MenuRow.jsx";
import DataContext from "../../data/DataContext.jsx";
import data from "../../data/data";

const sectionTitle = "MENU";

// padding style
const paddingStyle = {
    padding: "1rem 0",
};

/**
 * StyledGrid component
 */
const StyledGrid = styled(Grid2)(() => ({
    marginBottom: "2rem",
}));

/**
 * MenuPage component
 * @returns Menu page content
 */
const MenuPage = () => {
    const { bestSellers, newArrivals } = useContext(DataContext);
    const { id, title, image, price, intro } = newArrivals[0];
    const { src } = image;

    return (
        <DataContext.Provider value={data}>
            <Container>
                <SiteHeader />
                <SectionLayout title={sectionTitle}>
                    <StyledGrid container spacing={2}>
                        <Grid2 xs={12} sm={12} md={6}>
                            <MenuRow />
                        </Grid2>
                        <Grid2
                            xs={12}
                            sm={12}
                            md={6}
                            sx={paddingStyle}
                            alignItems="stretch"
                        >
                            <MenuItemCard
                                id={id}
                                title={title}
                                image={src}
                                price={price}
                                intro={intro}
                            />
                        </Grid2>
                    </StyledGrid>
                    <ProductRowLayout products={bestSellers} />
                </SectionLayout>
            </Container>
            <SiteFooter />
        </DataContext.Provider>
    );
};

export default MenuPage;
