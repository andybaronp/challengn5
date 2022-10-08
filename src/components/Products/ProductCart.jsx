import { useContext, useState } from "react"
import { CartContext } from "../../context/cart"
import ProductButtons from "./ProductButtons"
const ProductCart = ({ props }) => {
    const { name, amount, id, price } = props
    const { addProductToCart } = useContext(CartContext)
    // const { temporalAmount, setTemporalAmount ,setProducts} = useContext(ProductContext)
    const [quantity, setQuantity] = useState(1)

    const addProducts = (product) => {
        addProductToCart(product, quantity)
        setQuantity(1)
    }


    return (
        <article className='product' key={id}>
            <div className='productDescription'>
                <p className='productName'>{name} </p>  <p>Precio: $ {price}</p>
            </div>
            <div>Disponible: {amount}</div>
            <ProductButtons props={{ quantity, setQuantity, maxValue: amount, }} />
            <button onClick={() => addProducts(props, amount)} >Agregar</button>

        </article>
    )
}
export default ProductCart