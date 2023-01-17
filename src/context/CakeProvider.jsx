import React, { createContext, useEffect, useState } from "react";
import apiService from "../api/services/firebaseService.js";

//#region create default cake context value
const defaultCakeContextValue = {
    cake: {},
    inventory: 0,
};
const CakeContext = createContext(defaultCakeContextValue);
//#endregion

/**
 * CakeProvider component
 * @param {Object} param0 cake id and children component
 * @returns CakeContext.Provider component
 *
 * @see CakeContext
 * @see createContext
 */
const CakeProvider = ({ id, children, cake }) => {
    const [inventory, setInventory] = useState(0); // cake inventory state

    useEffect(() => {
        apiService.getInventoryById(id).then((data) => {
            console.log("inventory", data);
            setInventory(data);
        });
    }, []);

    return (
        <CakeContext.Provider value={{ cake, inventory }}>
            {children}
        </CakeContext.Provider>
    );
};

export { CakeContext };
export default CakeProvider;
