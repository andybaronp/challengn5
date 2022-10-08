import Cart from '../Cart'
import './styles.scss'

const Navbar = ({ product_in_cart }) => {
    return (
        <nav className="navbar">
            <h1>
                Lista de productos   
            </h1>
            <ul>
                <li>
                    <button>Agregar Productos</button>
                </li>
                <li><Cart /></li>
            </ul>

        </nav>
    )
}


export default Navbar