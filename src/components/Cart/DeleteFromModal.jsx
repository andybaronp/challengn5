import { useContext, useEffect } from "react"
import { CartContext } from "../../context/cart"

const DeleteFromModal = ({ product, setTemporalAmount }) => {
    const { cart, removeProductIncart } = useContext(CartContext)

    useEffect(() => {

        if (!cart.includes(product)) {
            setTemporalAmount(product.amount)
        }

    }, [cart, product, setTemporalAmount])
    return (
        <div className="modalBody" key={product.id}>
            <div className="modalProducts">
                <p>{product.name} </p>
                <p>{product.amount}   </p>
            </div>
            <div className="modalActions">
                <button className='modalButtonDelete' onClick={() => removeProductIncart(product)}>Eliminar</button>
                <p>$ {product.price * product.amount}   </p>
            </div>


        </div>
    )
}
export default DeleteFromModal