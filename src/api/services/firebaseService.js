// Import the functions you need from the SDKs you need
import firebaseConfig from "../config/firebaseConfig";
import { initializeApp } from "firebase/app";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    limit,
    orderBy,
    query,
    setDoc,
    updateDoc,
} from "firebase/firestore";
// Document
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

/**
 * Get cakes data
 * @param {string} path API endpoint
 * @returns Promise
 */
const getData = async (path) => {
    const data = [];
    const dataQuery = query(collection(database, path));
    const dataSnapshot = await getDocs(dataQuery);
    dataSnapshot.forEach((snapshot) => data.push(snapshot.data()));

    return data;
};

/**
 * get cakes by ids
 * @param {Array} ids cake id array
 * @returns Promise object
 */
const findCakesInIds = async (ids) => {
    const cakes = [];
    const cakeQuery = query(collection(database, "cakes"));
    const cakeSnapshot = await getDocs(cakeQuery);
    cakeSnapshot.forEach((cake) => {
        if (ids.includes(cake.id)) cakes.push(cake.data());
    });

    return cakes;
};

/**
 * Get Cake by cake id
 * @param {Number} id Cake id
 * @returns Cake data object
 */
const getCakeById = async (id) => {
    const cakeRef = doc(database, "cakes", id);
    const cakeSnapshot = await getDoc(cakeRef);

    return cakeSnapshot.exists() ? cakeSnapshot.data() : {};
};

/**
 * get best sellers data
 * @param {string} path api node
 * @returns Promise object
 */
const getBestSellers = async () => {
    const bestIds = [];
    const dataQuery = query(
        collection(database, "sells"),
        orderBy("quantity", "desc"),
        limit(4)
    );
    const dataSnapshot = await getDocs(dataQuery);
    dataSnapshot.forEach((snapshot) => bestIds.push(snapshot.id));

    return findCakesInIds(bestIds).then((cakes) => cakes);
};

/**
 * get new arrivals cake data;
 * @returns Promise object
 */
const getNewArrivals = async () => {
    const newIds = [];

    const dataQuery = query(
        collection(database, "inventory"),
        orderBy("created_date", "desc"),
        limit(4)
    );
    const dataSnapshot = await getDocs(dataQuery);
    dataSnapshot.forEach((snapshot) => newIds.push(snapshot.id));

    return findCakesInIds(newIds).then((cakes) => cakes);
};

/**
 * get cake inventory
 * @param {String} id cake id
 * @returns Cake inventory
 */
const getInventoryById = async (id) => {
    const cakeRef = doc(database, "inventory", id);
    const cakeSnapshot = await getDoc(cakeRef);

    return cakeSnapshot.exists() ? cakeSnapshot.data() : {};
};

/**
 * Get cart data
 * @param {String} path cart api endpoint
 * @returns Cart object
 */
const getCart = async (path) => {
    const cartRef = doc(database, "carts", path);
    let cartSnapshot = await getDoc(cartRef);

    if (cartSnapshot.exists()) {
        return cartSnapshot.data();
    } else {
        // create new guest cart
        await setDoc(cartRef, {
            cart_items: [],
        });
        cartSnapshot = await getDoc(cartRef);

        // return empty guest cart.
        return cartSnapshot.data();
    }
};

/**
 *
 * @param {Object} data Cart item object
 * @returns Post cart item
 */
const postCartItem = async (data) => {
    console.log("data", data);
    const cartRef = doc(database, "carts", "guest");
    await updateDoc(cartRef, data);

    // return cartSnapshot.exists() ? cartSnapshot.data() : {};
};

/**
 * apiService object
 */
const apiService = {
    get: getData,
    getBestSellers: getBestSellers,
    getNewArrivals: getNewArrivals,
    getCakeById: getCakeById,
    getInventoryById: getInventoryById,
    getCart: getCart,
    postCartItem: postCartItem,
    delete: null,
};

export default apiService;
