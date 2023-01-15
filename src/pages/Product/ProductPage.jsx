import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2.js";
import Product from "../../components/product/Product.jsx";
import { useParams } from "react-router-dom";
import apiService from "../../api/services/firebaseService.js";
import Loading from "../../components/shared/Loading.jsx";
import SectionLayout from "../../layout/SectionLayout.jsx";
import ProductRowLayout from "../../layout/ProductRowLayout.jsx";
import DataContext from "../../data/DataContext.jsx";

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
    const { id } = useParams();
    const [cake, setCake] = useState({});
    const [cart, setCart] = useState({});
    const [quantity, setQuantity] = useState(0);
    const [count, setCount] = useState(0);
    const [randomCake, setRandomCake] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Post item
    const handleClick = () => {
        const { cart_items } = cart;

        const cart_ids = cart_items.map((item) => item.product_id);
        if (cart_ids.includes(id)) {
            const cart_item = cart_items.find((item) => item.product_id === id);
            console.log({ ...cart_item, quantity: cart_item.quantity + count });
        } else {
            cart_items.push({
                product_id: id,
                product_name: cake.name,
                product_price: cake.price,
                product_image: cake.image,
                quantity: count,
            });
        }

        console.log(cart_items);

        // const carts = { cart_items };

        // apiService
        //     .postCartItem(carts)
        //     .then(() => (location.href = `/shopping-cart/${id}`));
    };

    //#region initialize
    useEffect(() => {
        const cakePromise = apiService
            .getCakeById(id)
            .then((cake) => setCake(cake));

        const cartPromise = apiService.getCart("guest").then((data) => {
            setCart(data);
        });

        const inventoryPromise = apiService
            .getInventoryById(id)
            .then((inventory) => setQuantity(inventory.quantity));

        const randomPromise = apiService.getBestSellers().then((cakes) => {
            setRandomCake(cakes);
        });

        Promise.all([
            cakePromise,
            cartPromise,
            inventoryPromise,
            randomPromise,
        ]).then(() => setIsLoading(false));
    }, []);
    //#endregion

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <DataContext.Provider value={{ ...cake, quantity }}>
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
                </DataContext.Provider>
            )}
        </>
    );
};

export default ProductPage;
