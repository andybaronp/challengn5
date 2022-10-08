
import { createContext, useEffect, useState } from 'react'
import data from '../../DB/data.json';



export const ProductContext = createContext({})



export const ProductProvider = ({ children }) => {


    //CART////////////////
    const [products, setProducts] = useState(() => {
        try {

            const productInLocalStorage = localStorage.getItem('products')
            return productInLocalStorage ? JSON.parse(productInLocalStorage) : data.products

        } catch (error) {
            return []

        }

    })

    //Set 
    useEffect(() => {

        localStorage.setItem('products', JSON.stringify(products))

    }, [products])

    //TEMP
    const [temp, setTemp] = useState(() => {
        try {

            const productInLocalStorage = localStorage.getItem('products')
            return productInLocalStorage ? JSON.parse(productInLocalStorage) : products

        } catch (error) {
            return []

        }

    })


    //Set   temp
    useEffect(() => {

        localStorage.setItem('temp', JSON.stringify(products))

    }, [products])





    const buyProduct = (product) => {

        const datos = products.map(item => {

            product.forEach(element => {
                if (item.id === element.id) {

                    return item.amount -= element.amount

                }
                return element
            });
            return item
        })
        setProducts(datos)

    }



    return (
        //ContextProvider
        <ProductContext.Provider
            value={{
                products, setProducts,
                temp,
                // Methods
                buyProduct,


            }}
        >
            {children}
        </ProductContext.Provider>
    )
}