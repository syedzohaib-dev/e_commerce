import { Link } from 'react-router-dom'
import Productcard from '../components/Productcard'

const Home = () => {

  const addToCartHandler = () => {

  }

  return (
    <>
      <div className="home">
        <section></section>



        <h1>Latest Products
          <Link to='/search' className='findmore'>More</Link>
        </h1>

        <main>
          <Productcard productId="dfrefwefwefd" name="Mackbook"
            price={53445} stock={352} handler={addToCartHandler}
            photo="https://myshop.pk/pub/media/catalog/product/cache/26f8091d81cea4b38d820a1d1a4f62be/m/a/macbook-air-m2-myshop-pk_6__1_1.jpg" />


        </main>

      </div>
    </>
  )
}

export default Home