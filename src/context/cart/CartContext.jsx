import { createContext, useContext, useEffect, useState } from 'react'
import { ProductContext } from '../products/ProductsContext'




export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
    const { updateProducts } = useContext(ProductContext)



//CART/////
///////////
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
            setrCartItem(
                [...cart, {
                    ...product,
                    amount: amountAdd
                }]
            )

            updateProducts(product, amountAdd)
            return
        }

        //Acumular
        const updatedProducts = cart.map(item => {
            if (item.id !== product.id) return item

            //Actualizar la cantidad
            item.amount += amountAdd
            return item
        })
        setrCartItem(updatedProducts)

        updateProducts(product, amountAdd)
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
                emptyCart,


            }}
        >
            {children}
        </CartContext.Provider>
    )
}