import './styles.scss'
import products from '../../DB/data.json'
import ProductActions from './ProductActions'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/cart'


const Prodcuts = () => {
    const { addProductToCart } = useContext(CartContext)
    const [amountItems, setAmountItems] = useState(1)

    return (
        <div className="products">

            {
                products.products.map((product) => (
                    <article className='product' key={product.id}>
                        <div>
                            <p>{product.name}  ${product.price}</p>
                        </div>
                        <div>{product.amount}</div>

                        <ProductActions amountItems={amountItems} setAmountItems={setAmountItems} id={product.id} />
                        <button onClick={() => addProductToCart(product, amountItems)}>Agregar</button>
                    </article>
                ))
            }
        </div>
    )
}
export default Prodcuts