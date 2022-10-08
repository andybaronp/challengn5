import { useContext, useState } from "react"
import toast from "react-hot-toast"
import { CartContext } from "../../context/cart"
import ProductButtons from "./ProductButtons"
const ProductCart = ({ props }) => {
    const { name, amount, id, price } = props
    const { addProductToCart } = useContext(CartContext)
    const [quantity, setQuantity] = useState(1)

    const addProducts = (product) => {

        if (quantity === 0) {
            toast.error('Agrege una cantidad!');
            return
        }
        toast('Agregado al carrito!', {
            icon: '🛒',
        });
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