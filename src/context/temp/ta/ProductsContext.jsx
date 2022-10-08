import { createContext, useEffect, useState } from 'react'




export const ProductContext = createContext({})


export const ProductProvider = ({ children }) => {


    //CART////////////////
    const [products, setrProducts] = useState(() => {
        try {

            const cartInLocalStorage = localStorage.getItem('productos')
            return cartInLocalStorage ? JSON.parse(cartInLocalStorage) : []

        } catch (error) {
            return []

        }



    })


    //Set  
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(products))

    }, [products])




    const buyProduct = (products) => {

        const datos = products.map(item => {

            products.forEach(element => {
                if (item.id === element.id) {

                    return item.amount -= element.amount

                }
                return element
            });
            return item
        })
        setrProducts(datos)

    }


    return (
        //ContextProvider
        <ProductProvider.Provider
            value={{
                products,

                // Methods
                buyProduct,


            }}
        >
            {children}
        </ProductProvider.Provider>
    )
}