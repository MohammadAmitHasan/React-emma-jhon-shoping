
const getDataFromDB = () => {
    // Declare empty object if no cart data found in local storage it will be
    let shoppingCart = {};

    //get the shopping cart data from local storage
    const storedCart = localStorage.getItem('shopping-cart');

    // If data is available convert as object and return
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}


// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = getDataFromDB();

    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    deleteShoppingCart,
    getDataFromDB
}