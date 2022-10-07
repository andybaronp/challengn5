import { useContext, useState } from "react"
import toast from "react-hot-toast"
import { CartContext } from "../../context/cart"
import ProductActions from "./ProductActions"

const ProductCart = ({ product }) => {

    const { addProductToCart } = useContext(CartContext)
    const [amountItems, setAmountItems] = useState(0)
    const [temporalAmount, setTemporalAmount] = useState(product.amount)


    const addProducts = (product) => {

        if (temporalAmount === 0) {
            toast.error("Cantidad no disponible")
            return
        }
        setTemporalAmount(tem => tem - amountItems)
        addProductToCart(product, amountItems)
        setAmountItems(1)


    }



    return (
        <article className='product' key={product.id}>
            <div className='productDescription'>
                <p className='productName'>{product.name} </p>  <p>Precio: $ {product.price}</p>
            </div>
            <div>Disponible: {temporalAmount}</div>

            <ProductActions props={{ amountItems, setAmountItems, maxValue: product.amount, }} />

            <button onClick={() => addProducts(product, product.amount)} disabled={amountItems < 1 ? true : false} >Agregar</button>

        </article>
    )
}
export default ProductCart