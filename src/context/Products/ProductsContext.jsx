
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

    // Set
    useEffect(() => {

        localStorage.setItem('products', JSON.stringify(products))
    }, [products])


    const updateProducts = (product, less) => {

        const newProducts = products.map(item => {
            if (item.id === product.id) {

                return { ...item, amount: product.amount - less }
            }
            return item
        })
        setProducts(newProducts)
    }




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
                // Methods
                buyProduct,
                updateProducts

            }}
        >
            {children}
        </ProductContext.Provider>
    )
}