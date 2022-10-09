import { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './styles.scss';

import { v4 as uuid } from 'uuid'
import { ProductContext } from '../../context/products';



const NewProduct = ({ setIsOpen }) => {
    const id = uuid()
    const { addProduct } = useContext(ProductContext)
    const [newProduct, setNewProduct] = useState({
        name: '',
        amount: '',
        price: '',
        id: id

    })
    const handleChange = ({ target: { name, value } }) =>
        setNewProduct({ ...newProduct, [name]: value })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newProduct.name.trim() === '') {
            toast.error("Ingrese un nombre")
        }
        if (newProduct.amount.trim() === '' || newProduct.price.trim() === '') {
            toast.error("Complete los datos")
        }


        addProduct(newProduct)


        setIsOpen(false)

    }
    return (

        <form onSubmit={handleSubmit} >
            <Toaster
                position="top-center"

            />
            <div className="darkBG" >
                <div className="centered">
                    <span className="closeBtnP" onClick={() => setIsOpen(false)}>
                        Cerrar
                    </span>

                    <h2 className="modalHeaderP">Agregar producto</h2>


                    <div className="modalP">


                        <ul className='modalListP'>
                            <li>
                                <label className='labelInputs' htmlFor="nameProduct">Nombre:</label>
                                <input type="text" id="nameProduct" className='inputnameProduct' name="name" placeholder='Producto nuevo' autoComplete='off' onChange={handleChange} />
                            </li>
                            <li>
                                <label className='labelInputs' htmlFor="price">Precio:</label>
                                <input className='inputnameProductc' type="number" min='1' id="price" name="price" onChange={handleChange} />
                            </li>
                            <li>
                                <label className='labelInputs' htmlFor="amount">Cantidad:</label>
                                <input className='inputnameProductc' type="number" min='1' id="amount" name="amount" onChange={handleChange} />
                            </li>

                            <li className='modalActionsP'>
                                {/* <button className='cancelproduct'>Cancelar</button> */}
                                <button type="submit" className='addproduct'  >Agregar</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </form>

    )

}
export default NewProduct