import React, { useEffect, useMemo, useState } from "react";
import { Container } from "@mui/material";
import SectionLayout from "../../layout/SectionLayout.jsx";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2.js";
import BagItemCard from "../../components/bag/BagItemCard.jsx";
import CheckoutCard from "../../components/bag/CheckoutCard.jsx";
import DataContext from "../../data/DataContext.jsx";
import Loading from "../../components/shared/Loading.jsx";
import apiService from "../../api/services/firebaseService.js";

/**
 * BagPage component
 */
const BagPage = () => {
    const [cart, setCart] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    //#region calculate total amount
    const total = useMemo(() => {
        console.log(cart);
        const { cart_items } = cart;
        if (!cart_items) return 0;

        return cart_items.reduce(
            (prev, next) =>
                prev + parseInt(next.product_price) * parseInt(next.quantity),
            0
        );
    }, [cart]);
    //#endregion

    //#region initialize shopping cart data
    useEffect(() => {
        const cartPromise = apiService
            .getCart("guest")
            .then((data) => setCart(data));

        Promise.all([cartPromise]).then(() => {
            setIsLoading(false);
        });
    }, []);
    //#endregion

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <DataContext.Provider value={cart}>
                    <Container>
                        <SectionLayout
                            title="Shopping Bag"
                            detailText="Go shopping"
                            detailLink="/menu"
                        >
                            <Grid2 container spacing={2}>
                                <Grid2 lg={7} md={7} sm={7} xs={12}>
                                    {cart
                                        ? cart.cart_items.map((item, i) => (
                                              <BagItemCard
                                                  key={i}
                                                  product={item}
                                              />
                                          ))
                                        : null}
                                </Grid2>
                                <Grid2 lg={5} md={5} sm={5} xs={12}>
                                    <CheckoutCard total={total} />
                                </Grid2>
                            </Grid2>
                        </SectionLayout>
                    </Container>
                </DataContext.Provider>
            )}
        </>
    );
};

export default BagPage;
