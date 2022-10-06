import { useEffect, useReducer } from 'react'
import data from '../../DB/data.json'
import { ProductsContext, productsReducer } from '.'

const PRODUCT_INITIAL_STATE = {
    products: [],
}


export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productsReducer, PRODUCT_INITIAL_STATE)

    //Get Cookie

    useEffect(() => {

        try {

            const productosInlocalStorage = localStorage.getItem('products')
            let products = productosInlocalStorage ? JSON.parse(localStorage.getItem('products')) : data.products
            dispatch({ type: '[Product] - LoadCart from storage ', payload: products })
        } catch (error) {
            dispatch({ type: '[Product] - LoadCart from storage ', payload: [] })

        }

    }, [])


    //Set
    useEffect(() => {
        if (state.products.length > 0) {

            localStorage.setItem('products', JSON.stringify(state.products))
        }

    }, [state.products])



    const buyProduct = (products) => {


        const datos = state.products.map(item => {

            products.forEach(element => {
                if (item.id === element.id) {

                    return item.amount -= element.amount

                }
                return element
            });
            return item
        })
        dispatch({ type: '[Product] - LoadCart from storage ', payload: datos })
    }



    return (
        //ContextProvider
        <ProductsContext.Provider
            value={{
                ...state,

                // Methods
                buyProduct

                // removeProductIncart,
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}
