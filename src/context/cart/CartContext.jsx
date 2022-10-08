import { createContext, useContext, useEffect, useState } from 'react'
import { ProductContext } from '../products/ProductsContext'




export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
    const { products, setProducts } = useContext(ProductContext)

//CART////////////////
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

            const datos = products.map(item => {

                cart.forEach(element => {
                    if (item.id === element.id) {

                        return item.amount -= element.amount

                    }
                    return element
                });


                return item
            })
            localStorage.setItem('products', JSON.stringify(datos)) 
            setProducts(datos)
        

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
        setAmountIncart([])
    }
    ////

    ///TEMP
    const [amountIncart, setAmountIncart] = useState(() => {
        try {

            const temporate = localStorage.getItem('tmp')
            return temporate ? JSON.parse(temporate) : []

        } catch (error) {
            return []

        }



    })
    //Set  
    // useEffect(() => {
    //     localStorage.setItem('tmp', JSON.stringify(amountIncart))

    // }, [amountIncart])

    const setTemporalAmount = (amountT) => {
        setAmountIncart([...amountIncart, amountT])
        console.log(amountIncart);
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

                setTemporalAmount,
                amountIncart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}