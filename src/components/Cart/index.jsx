import { useContext, useState } from 'react'
import { CartContext } from '../../context/cart'
import IconCart from './IconCart'
import ModalCart from './ModalCart'
import './styles.scss'

const Cart = () => {
    const [cartOpen, setCartOpen] = useState(false)
    const { cart } = useContext(CartContext)
    return (
        <div className='cartCotaniner' >
            <IconCart setCartOpen={setCartOpen} />

            {
                cart.length > 0 && (

                    <div className='productsAmount'>{cart.length}</div>
                )
            }

            {
                cartOpen && (
                    <ModalCart products={cart} setCartOpen={setCartOpen} cartOpen={cartOpen} />
                )
            }


        </div >
    )
}
export default Cart