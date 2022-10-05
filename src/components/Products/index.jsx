import './styles.scss'
import products from '../../DB/data.json'


const Prodcuts = () => {

    return (
        <div className="products">

            {
                products.products.map(({ amount, name, price, id }) => (
                    <article className='product' key={id}>


                        <div>
                            <p>{name}  ${price}</p>
                        </div>
                        <div>
                            <p>{amount}</p>
                            <button>Add to cart</button>
                        </div>
                    </article>
                ))
            }
        </div>
    )
}
export default Prodcuts