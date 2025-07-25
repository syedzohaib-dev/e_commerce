import { useEffect, useState } from "react";
import { FaHandHolding } from "react-icons/fa";
import { FaHandsClapping } from "react-icons/fa6";
import { MdOutlineGppGood } from "react-icons/md";
import { VscError } from "react-icons/vsc";

const cartItems = []
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

    return () => { }
  }, [couponCode])


  return (
    <>
      <div className="cart">
        <main></main>
        <aside>
          <p>Subtotal: Rs{subtotal}</p>
          <p>Shipping Charges: Rs{shippingCharges}</p>
          <p>Tax: Rs{tax}</p>
          <p>

            Discount: <em>Rs: {discount}</em>
          </p>

          <p><b>Total: Rs {total}</b></p>

          <input type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} placeholder="Coupon Code" />

          {
            couponCode &&
              isValidCouponCode ? (<span className="green"> Rs {discount} off using the <code>{couponCode}</code> <MdOutlineGppGood /></span>)
              :
              (<span className="red">Invalid Coupon <VscError /> </span>)
          }

        </aside>
      </div>
    </>
  )
}

export default Cart