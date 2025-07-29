import { useEffect, useState } from "react";
import { MdOutlineGppGood } from "react-icons/md";
import { VscError } from "react-icons/vsc";
import Cartitem from "../components/Cartitem";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "sdkdsmdksmd",
    photo: "https://myshop.pk/pub/media/catalog/product/cache/26f8091d81cea4b38d820a1d1a4f62be/m/a/macbook-air-m2-myshop-pk_6__1_1.jpg",
    name: "Mackbook",
    price: 3000,
    quantity: 4,
    stock: 10,
  }
]
const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const total = subtotal + tax + shippingCharges;
const discount = 400

const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("")
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false)

  useEffect(() => {

    const timeOutId = setTimeout(() => {
      if (Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false)
    }, 1000)

    return () => {
      clearTimeout(timeOutId)
      setIsValidCouponCode(false)
    }
  }, [couponCode])


  return (
    <>
      <div className="cart">
        <main>

          {
            cartItems.length > 0 ? cartItems.map((i, index) => (<Cartitem key={index} cartItem={i} />))
              :
              (<h1>No Items Added</h1>)
          }

        </main>
        <aside>
          <p>Subtotal: Rs{subtotal}</p>
          <p>Shipping Charges: Rs{shippingCharges}</p>
          <p>Tax: Rs{tax}</p>
          <p>

            Discount: <em className="red">Rs: {discount}</em>
          </p>

          <p><b>Total: Rs {total}</b></p>

          <input type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder="Coupon Code" />

          {
            couponCode &&
              isValidCouponCode ? (<span className="green"> Rs {discount} off using the <code>{couponCode}</code> <MdOutlineGppGood /></span>)
              :
              (<span className="red">Invalid Coupon <VscError /> </span>)
          }

          {Cartitem.length > 0 && <Link to='/shipping'>Checkout</Link>}

        </aside>
      </div>
    </>
  )
}

export default Cart