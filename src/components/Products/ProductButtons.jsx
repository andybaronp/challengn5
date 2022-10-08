import toast from 'react-hot-toast'
import './styles.scss'

const ProductButtons = ({ props }) => {
    const { quantity, setQuantity, maxValue } = props

    const upAmount = (value) => {
        if (value === -1) {
            if (quantity === 0) return
            setQuantity(quantity - 1)
            return
        }

        if (quantity >= maxValue) {
            toast.error(`Cantidad disponible ${quantity}`)
            return;
        }

        setQuantity(quantity + 1)
    }
    return (

        <div className='productActions' >
            <button onClick={() => upAmount(-1)}>-</button>
            <p>{quantity}</p>
            <button onClick={() => upAmount(+1)}>+</button>
        </div>


    )

}
export default ProductButtons


