export const addItems = (cartItems, product) => {
    const productInCart = cartItems.find(item => item.id === product.id)

    if (productInCart) {
        return cartItems.map(item => {
            return item.id === productInCart.id
                ? { ...item, quantity: item.quantity + 1 }
                : item;
        })
    }

    return [...cartItems, { ...product, quantity: 1 }]
}

export const substracOnetItem = (cartItems, id) => {
    const productToRemove = cartItems.find(item => item.id === id)

    if (productToRemove.quantity > 1) {
        return cartItems.map(item => {
            return item.id === productToRemove.id
                ? { ...item, quantity: item.quantity - 1 }
                : item;
        })
    }

    return cartItems.filter(item => item.id !== productToRemove.id)
}