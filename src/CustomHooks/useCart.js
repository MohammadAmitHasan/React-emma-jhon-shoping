import { useEffect, useState } from "react";
import { getDataFromDB } from "../utilities/fakedb"

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    const savedCart = [];
    useEffect(() => {
        const storedCart = getDataFromDB();
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    return [cart, useCart];
}

export default useCart;