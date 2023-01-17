import React, { useCallback, useContext, useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2.js";
import Product from "../../components/product/Product.jsx";
import { useParams } from "react-router-dom";
import apiService from "../../api/services/firebaseService.js";
import SectionLayout from "../../layout/SectionLayout.jsx";
import ProductRowLayout from "../../layout/ProductRowLayout.jsx";
import { CartsContext } from "../../context/DataProvider.jsx";
import CakeProvider from "../../context/CakeProvider.jsx";
import Loading from "../../components/shared/Loading.jsx";

// padding class
const productPadding = {
    padding: "1rem",
    paddingTop: "2rem",
};
const pb2 = {
    paddingBottom: "2rem",
};
const firstGridPadding = {
    padding: "0 2rem",
    paddingLeft: 0,
};

// flex direction style
const flexDirection = {
    flexDirection: {
        xs: "column-reverse",
        sm: "row",
        md: "row",
        lg: "row",
    },
};

/**
 * ProductPage component
 * @returns Product content
 */
const ProductPage = () => {
    const { id } = useParams(); // product id(cake)
    // const [cake, setCake] = useState(null); // cake state
    const [quantity, setQuantity] = useState(0);
    const [count, setCount] = useState(0);
    // const [randomCake, setRandomCake] = useState([]);

    const { carts } = useContext(CartsContext);

    // useEffect(() => {
    //     console.log("cake", cake);
    //     apiService.getCakeById(id).then((data) => setCake(data));
    //     apiService.getBestSellers().then((data) => setRandomCake(data));
    // }, []);

    const { data: cake, loading: isCakeLoading } = useAsync(
        () => apiService.getCakeById(id),
        { manual: false }
    );

    const { data: randomCake, loading: isRandomCakeLoading } = useAsync(
        () => apiService.getBestSellers(),
        { manual: false }
    );

    const isLoading = isCakeLoading || isRandomCakeLoading;

    //#region click event
    // TODO: 之後要加上已購買量的判斷 在 QuantityInput Component
    // Post item
    const handleClick = () => {
        const { cart_items } = carts;

        const cart_ids = cart_items.map((item) => item.product_id);
        // if had buy this product then update quantity.
        if (cart_ids.includes(id)) {
            const cart_item = cart_items.find((item) => item.product_id === id);
            cart_item.quantity += count;
            console.log(cart_item);
        } else {
            cart_items.push({
                product_id: id,
                product_name: cake.name,
                product_price: cake.price,
                product_image: cake.image,
                quantity: count,
            });
        }

        apiService
            .postCartItem({ cart_items })
            .then(() => (location.href = `/shopping-cart`));
    };
    //#endregion

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <CakeProvider id={id} cake={cake}>
                    <Grid
                        container
                        spacing={2}
                        sx={{ ...productPadding, ...flexDirection }}
                    >
                        <Grid
                            container
                            flexDirection="column"
                            xs={12}
                            sm={6}
                            md={6}
                            sx={firstGridPadding}
                        >
                            <Product.Title variant="h4">
                                {cake.name}
                            </Product.Title>
                            <Product.Intro>{cake.intro}</Product.Intro>
                            <Product.Price>{cake.price}</Product.Price>
                            <Product.QuantityInput
                                page="product"
                                onChange={setCount}
                            />
                            <Product.Button
                                component="button"
                                disabled={!quantity}
                                onClick={handleClick}
                            >
                                Buy
                            </Product.Button>
                            <Product.NutritionFacts />
                            <Product.Ingredient />
                            <Product.Expiration />
                        </Grid>
                        <Grid container xs={12} sm={6} md={6} sx={pb2}>
                            <Product.Image
                                image={cake.image.src}
                                title={cake.image.alt}
                            />
                        </Grid>
                    </Grid>
                    <SectionLayout title="You may like">
                        <ProductRowLayout products={randomCake} />
                    </SectionLayout>
                </CakeProvider>
            )}
        </>
    );
};

export default ProductPage;

const useAsync = (callback, { manual = true, defaultValue = null } = {}) => {
    if (!callback) {
        console.error("callback should be a function");
    }

    const [loading, setLoading] = useState(!manual);
    const [error, setError] = useState(null);
    const [data, setData] = useState(defaultValue);

    const execute = useCallback(
        async (...args) => {
            setLoading(true);

            try {
                const newData = await callback(...args);
                setData(newData);
            } catch (error) {
                setError(error);
            }

            setLoading(false);
        },
        [callback]
    );

    useEffect(() => {
        if (manual) return;
        execute();
    }, [manual]);

    return { execute, loading, error, data };
};
