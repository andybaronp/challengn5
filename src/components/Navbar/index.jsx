import Cart from '../Cart'
import './styles.scss'

const Navbar = ({ product_in_cart }) => {
    return (
        <nav className="navbar">
            <h1>
                Lista de productos   
            </h1>
            <ul className='listnavbar'>
                <li className='listnavbarItem'>
                    <button className='addProduct'>Agregar Productos</button>
                </li>
                <li className='listnavbarItem'><Cart /></li>
            </ul>

        </nav>
    )
}


export default Navbar