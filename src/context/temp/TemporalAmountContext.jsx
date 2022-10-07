import { createContext, useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../Products'




export const CartContext = createContext({})

export const TemProvider = ({ children, product }) => {
    const [amountItems, setAmountItems] = useState(0)
    const [temporalAmount, setTemporalAmount] = useState(product.amount)
    const [tmpLocalStorage, setTmpLocalStorage] = useState([])
    const { products } = useContext(ProductsContext)
    const { cart } = useContext(CartContext)
    useEffect(() => {
        const data = products.map(item => {
            if (item.id === product.id) {
                return {
                    ...item,
                    amount: temporalAmount
                }
            }
            return item
        })
        localStorage.setItem('temp', JSON.stringify(data))
    }, [product.id, products, temporalAmount])


    useEffect(() => {

        setTmpLocalStorage(JSON.parse(localStorage.getItem('temp')));

    }, [cart])



    return (
        //ContextProvider
        <CartContext.Provider
            value={{
                cart,


            }}
        >
            {children}
        </CartContext.Provider>
    )
}