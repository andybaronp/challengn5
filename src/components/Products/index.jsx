import './styles.scss'
import { useContext } from 'react'
import { ProductsContext } from '../../context/Products'
import { Toaster } from 'react-hot-toast'
import ProductCart from './ProductCart'


const Prodcuts = () => {
    const { products } = useContext(ProductsContext)


    return (
        <div className="products">
            < Toaster
                position="top-center"

            />
            {
                products.filter(item => item.amount > 0).map((product) => (
                    < ProductCart product={product} key={product.id} />
                )
                )
            }  
        </div>
    )
}
export default Prodcuts