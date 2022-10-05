import { useReducer } from 'react'


import { CartContext, cartReducer } from './'


const CART_INITIAL_STATE = {
    cart: [],
}

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)

    // New Entry
    const addProductToCart = (product, amountAdd) => {


        //Verifiacar si hay productos
        const productsInCart = state.cart.some(item => item.id === product.id)
        if (!productsInCart) {
            return dispatch({
                type: '[Cart] - Update products in cart ', payload: [...state.cart, {
                    name: product.name,
                    id: product.id,
                    price: product.price,
                    amount: amountAdd
                },]
            })
        }
        // //diferente talla
        // const productInCartButDiferentSize = state.cart.some(item => item._id === product._id && item.size === product.size)
        // if (!productInCartButDiferentSize) {
        //     return dispatch({ type: '[Cart] - Update products in cart ', payload: [...state.cart, product] })
        // }

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


        dispatch({ type: '[Cart] - Remove product in cart ', payload: itemCart })

    }
    return (
        //ContextProvider
        <CartContext.Provider
            value={{
                ...state,

                // Methods
                addProductToCart,
                // upEntry,
                removeProductIncart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
