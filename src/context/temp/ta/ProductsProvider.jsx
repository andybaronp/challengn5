// import { useContext, useEffect, useReducer } from 'react'
// import data from '../../DB/data.json'
// import { ProductsContext, productsReducer } from '.'
// import { CartContext } from '../cart'

// const PRODUCT_INITIAL_STATE = {
//     products: [],
//     temp: []
// }


// export const ProductsProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(productsReducer, PRODUCT_INITIAL_STATE)
//     const { cart } = useContext(CartContext)
//     //Get
//     useEffect(() => {

//         const productosInlocalStorage = localStorage.getItem('products')
//         let products = productosInlocalStorage ? JSON.parse(localStorage.getItem('products')) : data.products
//         dispatch({ type: '[Product] - LoadCart from storage ', payload: products })

//     }, [])


//     //Set localStorage
//     useEffect(() => {

//         if (state.products.length > 0) {
//             localStorage.setItem('products', JSON.stringify(state.products))

//         }

//     }, [state.products])

//     // //Set



//     useEffect(() => {
//         const productsTmpLocal = localStorage.getItem('tmpProducts')
//         let productsTmp = productsTmpLocal ? JSON.parse(localStorage.getItem('tmpProducts')) : []
//         dispatch({ type: '[Temp] - LoadCart from storage ', payload: productsTmp })

//     }, [])



//     useEffect(() => {
//         const productsTmpLocal = localStorage.getItem('tmpProducts')

//         let productsTmp = productsTmpLocal ? JSON.parse(localStorage.getItem('tmpProducts')) : []

//         // const datos = productsTmp.map(item => {

//         //     if (state.products.length > 0) {

//         //         cart.forEach(element => {
//         //             if (item.id === element.id) {

//         //                 return item.amount -= element.amount

//         //             }
//         //             return element
//         //         });
//         //     }

//         //     return item
//         // })
//         // console.log(datos);

//         // localStorage.setItem('tmpProducts', datos)


//         setTimeout(() => {
//             console.log(state.products);

//         }, 1000)


//     }, [])





//     const buyProduct = (products) => {

//         const datos = state.products.map(item => {

//             products.forEach(element => {
//                 if (item.id === element.id) {

//                     return item.amount -= element.amount

//                 }
//                 return element
//             });
//             return item
//         })
//         dispatch({ type: '[Product] - LoadCart from storage ', payload: datos })

//     }



//     return (
//         //ContextProvider
//         <ProductsContext.Provider
//             value={{
//                 ...state,

//                 // Methods
//                 buyProduct,


//             }}
//         >
//             {children}
//         </ProductsContext.Provider>
//     )
// }
