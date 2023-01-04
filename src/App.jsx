import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import data from "./data/data.js";
import DataContext from "./data/DataContext.jsx";
import { PageLayout } from "./layout/PageLayout.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import MenuPage from "./pages/Menu/MenuPage.jsx";
import ProductPage from "./pages/Product/ProductPage.jsx";

/**
 * Site router object
 */
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/menu",
        element: <MenuPage />,
    },
    {
        path: "/product/:id",
        element: (
            <PageLayout>
                <ProductPage />
            </PageLayout>
        ),
    },
]);

const App = () => (
    <DataContext.Provider value={data}>
        <RouterProvider router={router} />
    </DataContext.Provider>
);

export default App;
