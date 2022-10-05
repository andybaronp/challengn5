
import { useContext } from 'react'
import { CartContext } from '../../context/cart'
import './styles.scss'

const ModalCart = ({ products, setCartOpen }) => {
    const { removeProductIncart } = useContext(CartContext)
    return (


        <div className="modal" >
            <div className="modalContent">
                <span className="close" onClick={() => setCartOpen(false)} >Cerrar</span>

                <h2 className="modalTitle"> Total de productos </h2>
                <div className="modalBio">
                    {products.length < 1 ?
                        (
                            <div className="modalBody">
                                <h2>No hay productos en el carrito</h2>
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
                                        <p>{product.price * product.amount}   </p>
                                    </div>


                                </div>
                            ))}

                            <div className="modalTotal">

                                <p >Total: $30303</p>
                                <button className='modalButtons'>Comprar</button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div >

    )
}
export default ModalCart