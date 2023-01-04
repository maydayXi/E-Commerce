import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useContext } from "react";
import DataContext from "../../data/DataContext.jsx";
import ProductCard from "../../components/product/ProductCard.jsx";

/**
 * MenuRow component
 * @returns Menu product row
 */
const MenuRow = () => {
    const { bestSellers } = useContext(DataContext);

    return (
        <Grid2 container spacing={2}>
            {bestSellers.map((product, i) => {
                const { id, title, price, image } = product;

                return (
                    <Grid2 key={i} lg={6} md={6} sm={6} xs={6}>
                        <ProductCard
                            productId={id}
                            title={title}
                            image={image}
                            price={price}
                        />
                    </Grid2>
                );
            })}
        </Grid2>
    );
};

export default MenuRow;
