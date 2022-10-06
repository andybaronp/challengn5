
import { useContext, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
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
        toast.success("Compra exitosa")
        setTimeout(() => {
            setCartOpen(false)
        }, 1500)
    }



    const total = cart.reduce((acc, act) => {
        return acc + (act.amount * act.price)
    }, 0)




    return (


        <div className="modal" >
            <div className="modalContent">
                <span className="close" onClick={() => setCartOpen(false)} >Cerrar</span>

                <h2 className="modalTitle"> {products.length < 1 ? '' : "Total de productos"} </h2>
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
                                        <button className='modalButtonDelete' onClick={() => removeProductIncart(product)}>Eliminar</button>
                                        <p>$ {product.price * product.amount}   </p>
                                    </div>


                                </div>
                            ))}

                            <div className="modalTotal">

                                <p >Total: $ {total}</p>
                                <div className='modalButton'>

                                    <button className='modalButtonDelete' onClick={() => emptyCart()}>Vaciar carrito</button>
                                    <button className='modalButtonBuy' onClick={() => buyProductsFromCart(products)}>Comprar</button>
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
            < Toaster
                position="top-center"
            />
        </div >

    )
}
export default ModalCart