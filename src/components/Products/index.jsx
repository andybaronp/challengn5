import './styles.scss'
import { useContext } from 'react'
import { Toaster } from 'react-hot-toast'
import ProductCart from './ProductCart'
import { ProductContext } from '../../context/products'


const Prodcuts = () => {
    const { products } = useContext(ProductContext)
    return (
        <div className="products">
            < Toaster
                position="top-center"

            />
            {
                products.filter(item => item.amount > 0).map(({ name, amount, id, price }) => {

                    return < ProductCart props={{ name, amount, id, price }} key={id} />
                }

                )
            }  
        </div>
    )
}
export default Prodcuts