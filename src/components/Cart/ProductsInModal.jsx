import { useContext } from "react"
import { CartContext } from "../../context/cart"

const DeleteFromModal = ({ product }) => {
    const { removeProductIncart } = useContext(CartContext)


    const removeProduct = (product) => {
        removeProductIncart(product)


    }

    return (
        <div className="modalBody" key={product.id}>
            <div className="modalProducts">
                <p>{product.name} </p>
                <p>{product.amount}   </p>
            </div>
            <div className="modalActions">
                <button className='modalButtonDelete' onClick={() => removeProduct(product)}>Eliminar</button>
                <p>$ {product.price * product.amount}   </p>
            </div>


        </div>
    )
}
export default DeleteFromModal