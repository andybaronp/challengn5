import toast from 'react-hot-toast'
import './styles.scss'

const ProductActions = ({ amountItems, setAmountItems, maxValue, products, id }) => {

    const upAmount = (value) => {

        if (value === -1) {
            if (amountItems === 1) return
            return setAmountItems(amountItems - 1)
        }

        if (amountItems >= maxValue) {
            toast.error(`Cantidad disponible ${amountItems}`)
            return;
        }

        setAmountItems(amountItems + 1)
    }

    return (

            <div className='productActions' >
            <button onClick={() => upAmount(-1)}>-</button>
                <p>{amountItems}</p>
            <button onClick={() => upAmount(+1)}>+</button>
            </div>


    )

}
export default ProductActions


