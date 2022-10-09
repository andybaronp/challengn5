import { useState } from "react";
import NewProduct from "./addProduct/NewProduct";
import Navbar from "./Navbar"
import Products from "./Products"
import './styles.scss'
const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (

        <div className="container">
            <Navbar setIsOpen={setIsOpen} />
            <main className="main">
                {isOpen ? <NewProduct setIsOpen={setIsOpen} /> :
                    <Products />}
            </main>
        </div>

    )
}
export default Home