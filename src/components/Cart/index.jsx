import { useContext, useState } from 'react'
import { CartContext } from '../../context/cart'
import ModalCart from './ModalCart'
import './styles.scss'

const Cart = () => {
    const [cartOpen, setCartOpen] = useState(false)
    const { cart } = useContext(CartContext)
    return (
        <div className='cartCotaniner' >
            <svg onClick={() => setCartOpen(true)} strokeWidth="1.19" viewBox="0 0 24 24" fill="none" color="#404040"><path d="M19.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="#404040" stroke="#404040" strokeWidth="1.19" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5 4h17l-2 11H7L5 4zm0 0c-.167-.667-1-2-3-2M20 15H5.23c-1.784 0-2.73.781-2.73 2 0 1.219.946 2 2.73 2H19.5" stroke="#404040" strokeWidth="1.19" strokeLinecap="round" strokeLinejoin="round"></path></svg>

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