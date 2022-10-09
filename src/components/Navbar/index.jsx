import './styles.scss'
import Cart from '../Cart'


const Navbar = ({ setIsOpen }) => {

    return (
        <nav className="navbar">
            <h1 className='titlenavbar'>
                Lista de products
            </h1>
            <ul className='listnavbar'>
                <li className='listnavbarItem'>
                    <button className='addProduct' onClick={() => setIsOpen(true)}> Agregar Productos</button>
                </li>
                <li className='listnavbarItem'><Cart /></li>
            </ul>

        </nav>
    )
}


export default Navbar