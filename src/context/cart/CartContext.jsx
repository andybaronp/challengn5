import { createContext, useEffect, useState } from 'react'




export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
    const [cart, setrCartItem] = useState(() => {
        try {

            const cartInLocalStorage = localStorage.getItem('cart')
            return cartInLocalStorage ? JSON.parse(cartInLocalStorage) : []

        } catch (error) {
            return []

        }



    })


    //Set  
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))

    }, [cart])





    const addProductToCart = (product, amountAdd) => {

        //Verifiacar si hay productos
        const productsInCart = cart.some(item => item.id === product.id)


        if (!productsInCart) {
            return setrCartItem(
                [...cart, {
                    ...product,
                    amount: amountAdd
                }]
            )


        }
        //Acumular
        const updatedProducts = cart.map(item => {
            if (item.id !== product.id) return item

            //Actualizar la cantidad
            item.amount += amountAdd
            return item
        })

        setrCartItem(updatedProducts)
    }


    const removeProductIncart = (itemCart) => {

        const newcart = cart.filter(product => {
            return product.id !== itemCart.id
        })
        setrCartItem(newcart)

    }

    const emptyCart = () => {
        localStorage.setItem('cart', [])
        setrCartItem([])

    }
    return (
        //ContextProvider
        <CartContext.Provider
            value={{
                cart,

                // Methods
                addProductToCart,
                removeProductIncart,
                emptyCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}