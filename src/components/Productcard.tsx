import { FaPlus } from "react-icons/fa";

type ProductsProps = {
  productId: String,
  photo: String;
  name: String;
  price: Number;
  stock: Number;
  handler: () => void
};

const server = "dkgjskfsfosdk";

const Productcard = ({ productId, price, name, photo, stock, handler }: ProductsProps) => {
  return (
    <>
      <div className="productCard">
        <img src={`${photo}`} alt={name} />
        <p>{name}</p>
        <span>Rs {price}</span>

        <div>
          <button onClick={() => handler()}>
            <FaPlus /></button>
        </div>
      </div>
    </>
  )
}

export default Productcard