import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import SectionLayout from "../../layout/SectionLayout.jsx";
import ProductRowLayout from "../../layout/ProductRowLayout.jsx";
import MenuFilter from "../../components/menu/MenuFilter.jsx";
import DataContext from "../../data/DataContext.jsx";
import apiService from "../../api/services/firebaseService.js";
import Loading from "../../components/shared/Loading.jsx";

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
    const [cakes, setCakes] = useState({}); // cakes data
    const [isLoading, setIsLoading] = useState(true); // page loading state

    //#region initialize cakes data
    useEffect(() => {
        const cakesPromise = apiService
            .get("cakes")
            .then((data) => setCakes(data));

        Promise.all([cakesPromise]).then(() => setIsLoading(false));
    }, []);
    //#endregion

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <DataContext.Provider value={cakes}>
                    <SectionLayout title={sectionTitle}>
                        <MenuFilter />
                        <StyledProductRowLayout products={cakes} />
                    </SectionLayout>
                </DataContext.Provider>
            )}
        </>
    );
};

export default MenuPage;
