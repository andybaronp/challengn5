import { useEffect, useReducer } from 'react'
import { CartContext, cartReducer } from './'


const CART_INITIAL_STATE = {
    cart: 1,
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)


    //Get  
    useEffect(() => {

        try {

            const cartInLocalStorage = localStorage.getItem('cart')

            let cartInit = cartInLocalStorage ? JSON.parse(localStorage.getItem('cart')) : []
            dispatch({ type: '[Cart] - LoadCart from storage ', payload: cartInit })
        } catch (error) {
            dispatch({ type: '[Cart] - LoadCart from storage ', payload: [] })

        }

    }, [])


    //Set  
    useEffect(() => {
        if (state.cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(state.cart))

        }

    }, [state.cart])

    const addProductToCart = (product, amountAdd) => {



        //Verifiacar si hay productos
        const productsInCart = state.cart.some(item => item.id === product.id)
        if (!productsInCart) {
            return dispatch({
                type: '[Cart] - Update products in cart ', payload: [...state.cart, {
                    ...product,
                    amount: amountAdd
                },]
            })
        }


        //Acumular
        const updatedProducts = state.cart.map(item => {
            if (item.id !== product.id) return item

            //Actualizar la cantidad
            item.amount += amountAdd
            return item
        })

        dispatch({ type: '[Cart] - Update products in cart ', payload: updatedProducts })
    }


    const removeProductIncart = (itemCart) => {

        const newcart = state.cart.filter(product => {
            return product.id !== itemCart.id
        })
        dispatch({ type: '[Cart] - Remove product in cart ', payload: newcart })

    }

    const emptyCart = () => {
        localStorage.setItem('cart', [])
        dispatch({ type: '[Cart] - Empty cart ' })

    }
    return (
        //ContextProvider
        <CartContext.Provider
            value={{
                ...state,

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
