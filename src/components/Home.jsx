import Navbar from "./Navbar"
import Products from "./Products"
import style from './styles.module.scss'
const Home = () => {
    return (
        <div className={style.container}>
            <Navbar />
            <main className={style.main}>
                <Products />

            </main>
        </div>

    )
}
export default Home