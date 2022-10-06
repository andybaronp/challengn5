import './styles.scss'

const ProductActions = ({ amountItems, setAmountItems, }) => {


    const upAmount = (tipe) => {

        switch (tipe) {
            case 'up':
                setAmountItems(amountItems + 1)
                break;
            case 'down':
                setAmountItems(amountItems => amountItems - 1)
                break;
            default:
                return
        }
    }

    return (
        <>
            <div className='productActions' >
                <button onClick={() => upAmount('down')}>-</button>
                <p>{amountItems}</p>
                <button onClick={() => upAmount('up')}>+</button>
            </div>

        </>
    )
}
export default ProductActions