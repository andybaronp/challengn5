import { useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { CartContext } from "../../context/cart"
import ProductActions from "./ProductActions"

const ProductCart = ({ product }) => {
    const { cart, addProductToCart } = useContext(CartContext)
    const [amountItems, setAmountItems] = useState(1)
    const [temporalAmount, setTemporalAmount] = useState(product.amount)

    const addProducts = (product, amount) => {

        if (amountItems > amount || temporalAmount === 0) {
            toast.error("Cantidad no disponible")
            return
        }
        setTemporalAmount(tem => tem - amountItems)
        addProductToCart(product, amountItems)
        setAmountItems(1)

    }

    useEffect(() => {

        if (cart.length === 0) {
            setTemporalAmount(product.amount)
        }

    }, [product.amount, cart])



    return (
        <article className='product' key={product.id}>
            <div className='productDescription'>
                <p className='productName'>{product.name} </p>  <p>Precio: $ {product.price}</p>
            </div>
            <div>Disponible: {temporalAmount}</div>
            {temporalAmount > 0 && (
                <>
            <ProductActions amountItems={amountItems} setAmountItems={setAmountItems} maxValue={product.amount} />
                    <button onClick={() => addProducts(product, product.amount)}>Agregar</button>
                </>
            )}
        </article>
    )
}
export default ProductCart