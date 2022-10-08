import './styles.scss'
import Cart from '../Cart'


const Navbar = () => {

    return (
        <nav className="navbar">
            <h1 className='titlenavbar'>
                Lista de products
            </h1>
            <ul className='listnavbar'>
                <li className='listnavbarItem'>
                    <button className='addProduct' > Agregar Productos</button>
                </li>
                <li className='listnavbarItem'><Cart /></li>
            </ul>

        </nav>
    )
}


export default Navbar