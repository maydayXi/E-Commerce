import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageLayout } from "./layout/PageLayout.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import MenuPage from "./pages/Menu/MenuPage.jsx";
import ProductPage from "./pages/Product/ProductPage.jsx";
import BagPage from "./pages/Bag/BagPage.jsx";
import OrderingPage from "./pages/Order/OrderingPage.jsx";
import NotFoundPage from "./pages/shared/NotFoundPage.jsx";

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
        path: "/shopping-cart/:id",
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
    return <RouterProvider router={router} />;
};

export default App;
