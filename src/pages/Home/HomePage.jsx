import React, { useContext, useEffect, useMemo, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2.js";
import AboutSection from "./AboutSection.jsx";
import SocialMediaSection from "./SocialMediaSection.jsx";
import ActionButton from "../../components/shared/ActionButton.jsx";
import CardIcon from "../../components/shared/CardIcon.jsx";
import SiteIcons from "../../components/shared/SiteIcons.jsx";
import apiService from "../../api/services/firebaseService.js";
import DataContext from "../../data/DataContext.jsx";
import Loading from "../../components/shared/Loading.jsx";
import SectionLayout from "../../layout/SectionLayout.jsx";
import ProductRowLayout from "../../layout/ProductRowLayout.jsx";
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
            <ActionButton href="/menu">{children}</ActionButton>
        </Grid>
    </Grid>
);

/**
 * HomePage component
 * @returns Home page content
 */
const HomePage = () => {
    const [company, setCompany] = useState({}); // Company data
    const [bestSellers, setBestSellers] = useState([]); // bestSellers data
    const [newArrivals, setNewArrivals] = useState([]); // newArrivals data
    const [isLoading, setIsLoading] = useState(true); // page loading status

    const data = useMemo(
        () => ({
            bestSellers: bestSellers,
            about: company.about,
            newArrivals: newArrivals,
            socialMedia: company.socialMedia,
        }),
        [company, bestSellers, newArrivals]
    );

    // #region 不好的寫法，會重新 render
    // const [data, setData] = useState({ cakes: {}, about: {}, socialMedia: {} });
    // useEffect(() => {
    //     setData({ cakes, about, socialMedia });
    // }, [cakes, about, socialMedia]);
    // #endregion

    // #region initialization
    useEffect(() => {
        const companyPromise = apiService.get("company").then((company) => {
            const [information] = company;
            setCompany({
                about: information.about,
                socialMedia: information.social_media,
            });
        });

        const sellsPromise = apiService
            .getBestSellers()
            .then((best) => setBestSellers(best));

        const newArrivalsPromise = apiService
            .getNewArrivals()
            .then((newArrivals) => setNewArrivals(newArrivals));

        Promise.all([companyPromise, sellsPromise, newArrivalsPromise]).then(
            () => setIsLoading(false)
        );
    }, []);
    //#endregion

    return (
        <DataContext.Provider value={data}>
            {isLoading ? (
                <Loading />
            ) : (
                <>
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
                </>
            )}
        </DataContext.Provider>
    );
};

export default HomePage;
