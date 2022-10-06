import { useContext, useState } from "react"
import toast from "react-hot-toast"
import { CartContext } from "../../context/cart"
import ProductActions from "./ProductActions"

const ProductCart = ({ product }) => {
    const [amountItems, setAmountItems] = useState(1)
    const { addProductToCart } = useContext(CartContext)

    const addProducts = (product, amount) => {


        if (amountItems > amount) {
            toast.error("Cantidad no disponible")
            return
        }
        addProductToCart(product, amountItems)
    }
    return (
        <article className='product' key={product.id}>
            <div className='productDescription'>
                <p className='productName'>{product.name} </p>  <p>Precio: $ {product.price}</p>
            </div>
            <div>Disponible: {product.amount}</div>
            <ProductActions amountItems={amountItems} setAmountItems={setAmountItems} maxValue={product.amount} />
            <button onClick={() => addProducts(product, product.amount)}>Agregar</button>
        </article>
    )
}
export default ProductCart