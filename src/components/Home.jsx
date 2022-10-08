import Navbar from "./Navbar"
import Products from "./Products"
import './styles.scss'
const Home = () => {
    return (
        <div className="container">
            <Navbar />
            <main className="main">
                <Products />
            </main>
        </div>

    )
}
export default Home