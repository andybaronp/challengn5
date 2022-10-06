import { useContext, useMemo, useState } from "react"
import toast from "react-hot-toast"
import { CartContext } from "../../context/cart"
import ProductActions from "./ProductActions"

const ProductCart = ({ product }) => {
    const { cart, addProductToCart } = useContext(CartContext)
    const [amountItems, setAmountItems] = useState(1)
    const [temporalAmount, setTemporalAmount] = useState(product.amount)
   // const dato = useMemo(() => !cart.find(item => (item.id === product.id && temporalAmount === 0)), [cart, product.id, temporalAmount])



    const addProducts = (product, amount) => {

        if (amountItems > amount || temporalAmount === 0) {
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
            {/* {dato && ( */}
                <>
            <ProductActions amountItems={amountItems} setAmountItems={setAmountItems} maxValue={product.amount} />
                    <button onClick={() => addProducts(product, product.amount)}>Agregar</button>
                </>
            {/* )} */}
        </article>
    )
}
export default ProductCart