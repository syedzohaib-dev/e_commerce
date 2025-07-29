import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemProps = {
    cartItem: any;
}



const Cartitem = ({ cartItem }: CartItemProps) => {
    // productId: "sdkdsmdksmd",
    // photo: "https://myshop.pk/pub/media/catalog/product/cache/26f8091d81cea4b38d820a1d1a4f62be/m/a/macbook-air-m2-myshop-pk_6__1_1.jpg",
    // name: "Mackbook",
    // price: 3000,
    // quantity: 4,
    // stock: 10,

    const { photo, productId, name, price, quantity, stock } = cartItem
    return (
        <div className="cartItem">
            <img src={photo} alt="" />
            <article>
                <Link to={`/product/${productId}`}></Link>
                <span>Rs{price}</span>
            </article>

            <div>
                <button>-</button>
                <p>{quantity}</p>
                <button>+</button>
            </div>

            <button><FaTrash /></button>

        </div>
    )
}

export default Cartitem