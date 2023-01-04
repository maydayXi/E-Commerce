import React, { useContext } from "react";
import { Container } from "@mui/material";
import styled from "@emotion/styled";
import SiteHeader from "../../components/shared/SiteHeader.jsx";
import SiteFooter from "../../components/shared/SiteFooter.jsx";
import SectionLayout from "../../layout/SectionLayout.jsx";
import ProductRowLayout from "../../layout/ProductRowLayout.jsx";
import MenuFilter from "../../components/menu/MenuFilter.jsx";
import DataContext from "../../data/DataContext.jsx";
import data from "../../data/data";

const sectionTitle = "MENU";

const StyledProductRowLayout = styled(ProductRowLayout)(() => ({
    marginBottom: "2rem",
    paddingBottom: "2rem",
}));

/**
 * MenuPage component
 * @returns Menu page content
 */
const MenuPage = () => {
    const { bestSellers, newArrivals } = useContext(DataContext);

    return (
        <DataContext.Provider value={data}>
            <Container>
                <SiteHeader />
                <SectionLayout title={sectionTitle}>
                    <MenuFilter />
                    <StyledProductRowLayout products={bestSellers} />
                    <StyledProductRowLayout products={newArrivals} />
                    <StyledProductRowLayout products={bestSellers} />
                    <StyledProductRowLayout products={newArrivals} />
                    <StyledProductRowLayout products={bestSellers} />
                    <StyledProductRowLayout products={newArrivals} />
                </SectionLayout>
            </Container>
            <SiteFooter />
        </DataContext.Provider>
    );
};

export default MenuPage;
