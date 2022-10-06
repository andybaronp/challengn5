
import { useContext, useState } from 'react'
import { CartContext } from '../../context/cart'
import { ProductsContext } from '../../context/Products'
import './styles.scss'

const ModalCart = ({ products, setCartOpen, }) => {
    const { cart, removeProductIncart, emptyCart } = useContext(CartContext)
    const { buyProduct } = useContext(ProductsContext)


    const [isCartEmpty, setIsCartEmpty] = useState(false)
    const buyProductsFromCart = (products) => {
        buyProduct(products)
        emptyCart()
        setIsCartEmpty(true)
        setTimeout(() => {
            setCartOpen(false)
        }, 1500)
    }



    const total = cart.reduce((acu, at) => {
        return acu + (at.amount * at.price)
    }, 0)



    return (


        <div className="modal" >
            <div className="modalContent">
                <span className="close" onClick={() => setCartOpen(false)} >Cerrar</span>

                <h2 className="modalTitle"> {isCartEmpty ? '' : "Total de productos"} </h2>
                <div className="modalBio">
                    {products.length < 1 ?
                        (
                            <div className="modalBody">
                                <h2 className='messageModal'>{isCartEmpty ? "Gracias por su compra " : "No hay productos en el carrito"} </h2>
                            </div>
                        )
                        :
                        <>

                            {products.map(product => (

                                <div className="modalBody" key={product.id}>
                                    <div className="modalProducts">
                                        <p>{product.name} </p>
                                        <p>{product.amount}   </p>
                                    </div>
                                    <div className="modalActions">
                                        <button className='modalButtons' onClick={() => removeProductIncart(product)}>Eliminar</button>
                                        <p>$ {product.price * product.amount}   </p>
                                    </div>


                                </div>
                            ))}

                            <div className="modalTotal">

                                <p >Total: $ {total}</p>
                                <button className='modalButtons' onClick={() => buyProductsFromCart(products)}>Comprar</button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div >

    )
}
export default ModalCart