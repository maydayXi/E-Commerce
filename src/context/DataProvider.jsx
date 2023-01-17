import React, { createContext, useEffect, useMemo, useState } from "react";
import apiService from "../api/services/firebaseService";

//#region create default context
const defaultCartsContextValue = {
    carts: {},
    total: 0,
};
const CartsContext = createContext(defaultCartsContextValue);
//#endregion

/**
 * CartsProvider component
 * @param {Object} children component
 * @returns CartsContext.Provider
 */
const CartsProvider = ({ children }) => {
    const [carts, setCarts] = useState(null); // carts state

    //#region calculate product total
    const total = useMemo(() => {
        if (!carts) return 0;

        return carts.cart_items.reduce((prev, next) => {
            prev + parseInt(next.product_price) * parseInt(next.quantity);
        }, 0);
    }, [carts]);

    useEffect(() => {
        apiService.getCart("guest").then((data) => setCarts(data));
    }, []);
    //#endregion

    return (
        <CartsContext.Provider value={{ carts, total }}>
            {children}
        </CartsContext.Provider>
    );
};

export { CartsContext };
export default CartsProvider;
