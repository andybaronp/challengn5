import './styles.scss'
// import productos from '../../DB/data.json'
import ProductActions from './ProductActions'
import { useContext, useState } from 'react'
import { CartContext } from '../../context/cart'
import { ProductsContext } from '../../context/Products'
import ModalCart from '../Cart/ModalCart'


const Prodcuts = () => {
    const { addProductToCart } = useContext(CartContext)
    const { products } = useContext(ProductsContext)
    const [amountItems, setAmountItems] = useState(1)

    const addProducts = (product, amount) => {
        if (amountItems > amount) {

            <ModalCart />
            return
        }
        addProductToCart(product, amountItems)
    }
    return (
        <div className="products">

            {
                products.map((product) => (
                    <article className='product' key={product.id}>
                        <div className='productDescription'>
                            <p className='productName'>{product.name} </p>  <p>Precio: $ {product.price}</p>
                        </div>
                        <div>Disponible: {product.amount}</div>
                        <ProductActions amountItems={amountItems} setAmountItems={setAmountItems} />
                        <button onClick={() => addProducts(product, product.amount)}>Agregar</button>
                    </article>
                ))
            }  
        </div>
    )
}
export default Prodcuts