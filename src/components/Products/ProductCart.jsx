import { useContext, useState } from "react"
import toast from "react-hot-toast"
import { CartContext } from "../../context/cart"
import ProductActions from "./ProductActions"

const ProductCart = ({ props }) => {
    const { name, amount, id, price } = props
    const { addProductToCart } = useContext(CartContext)
    const [amountItems, setAmountItems] = useState(0)
    const [temporalAmount, setTemporalAmount] = useState(amount)


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
        <article className='product' key={id}>
            <div className='productDescription'>
                <p className='productName'>{name} </p>  <p>Precio: $ {price}</p>
            </div>
            <div>Disponible: {temporalAmount}</div>

            <ProductActions props={{ amountItems, setAmountItems, maxValue: amount, }} />

            <button onClick={() => addProducts(props, amount)} disabled={amountItems < 1 ? true : false} >Agregar</button>

        </article>
    )
}
export default ProductCart