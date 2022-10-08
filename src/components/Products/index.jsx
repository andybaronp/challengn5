import './styles.scss'
import { useContext } from 'react'
import { Toaster } from 'react-hot-toast'
import ProductCart from './ProductCart'
import { CartContext } from '../../context/cart'
import { ProductContext } from '../../context/products'


const Prodcuts = () => {
    const { amountIncart } = useContext(CartContext)
    const { products } = useContext(ProductContext)
    return (
        <div className="products">
            < Toaster
                position="top-center"

            />
            {
                products.filter(item => item.amount > 0).map(({ name, amount, id, price }) => {
                    let amountTmp = 0



                    amountIncart.forEach(element => {
                        if (element.id === id) {

                            return amountTmp = amount - element.amount

                        }

                        return amountTmp = amount

                    })
                    return < ProductCart props={{ name, amount, id, price }} key={id} />
                }

                )
            }  
        </div>
    )
}
export default Prodcuts