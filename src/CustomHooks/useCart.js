// import { useEffect, useState } from "react";
// import { getDataFromDB } from "../utilities/fakedb"

// const useCart = (products) => {
//     const [cart, setCart] = useState([]);

//     useEffect(() => {
//         const storedCart = getDataFromDB();
//         const savedCart = [];
//         for (const id in storedCart) {
//             const addedProduct = products.find(product => product._id === id);
//             if (addedProduct) {
//                 addedProduct.quantity = storedCart[id];
//                 savedCart.push(addedProduct);
//             }
//         }
//         setCart(savedCart);
//     }, [products])

//     return [cart, setCart];
// }

// export default useCart;


import { useEffect, useState } from "react"
import { getDataFromDB } from "../utilities/fakedb";

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getDataFromDB();
        const keys = Object.keys(storedCart);

        fetch('http://localhost:5000/productKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                console.log(products)
                const savedCart = [];
                for (const id in storedCart) {
                    const addedProduct = products.find(product => product._id === id);
                    if (addedProduct) {
                        const quantity = storedCart[id];
                        addedProduct.quantity = quantity;
                        savedCart.push(addedProduct);
                    }
                }
                setCart(savedCart);
            })


    }, []);

    return [cart, setCart];
}

export default useCart;