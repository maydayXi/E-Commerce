import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageLayout } from "./layout/PageLayout.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import MenuPage from "./pages/Menu/MenuPage.jsx";
import ProductPage from "./pages/Product/ProductPage.jsx";
import BagPage from "./pages/Bag/BagPage.jsx";
import OrderingPage from "./pages/Order/OrderingPage.jsx";
import NotFoundPage from "./pages/shared/NotFoundPage.jsx";
import apiService from "./api/services/firebaseService.js";
import Loading from "./components/shared/Loading.jsx";
import CartsProvider from "./context/DataProvider.jsx";

/**
 * Site router object
 */
const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <PageLayout>
                <HomePage />
            </PageLayout>
        ),
        errorElement: <NotFoundPage />,
    },
    {
        path: "/menu",
        element: (
            <PageLayout>
                <MenuPage />
            </PageLayout>
        ),
        errorElement: <NotFoundPage />,
    },
    {
        path: "/product/:id",
        element: (
            <PageLayout>
                <ProductPage />
            </PageLayout>
        ),
        errorElement: <NotFoundPage />,
    },
    {
        path: "/shopping-cart",
        errorElement: <NotFoundPage />,
        element: (
            <PageLayout>
                <BagPage />
            </PageLayout>
        ),
    },
    {
        path: "/ordering",
        errorElement: <NotFoundPage />,
        element: (
            <PageLayout>
                <OrderingPage />
            </PageLayout>
        ),
    },
]);

const App = () => {
    const [cart, setCart] = useState({}); // shopping cart state
    const [isLoading, setIsLoading] = useState(true); // isLoading state

    // shopping cart effect
    useEffect(() => {
        const cartPromise = apiService
            .getCart("guest")
            .then((data) => setCart(data));

        Promise.all([cartPromise]).then(() => {
            setIsLoading(false);
        });
    }, []);

    return (
        <>
            {isLoading ? (
                <PageLayout>
                    <Loading />
                </PageLayout>
            ) : (
                <CartsProvider>
                    <RouterProvider router={router} />
                </CartsProvider>
            )}
        </>
    );
};

export default App;
