import React from "react";
import "./checkout.css";
import Subtotal from "../components/Subtotal";
import CheckoutProduct from "../components/CheckoutProduct";
import { useStateValue } from "../StateProvider";

function Checkout() {
  const [{ cart }] = useStateValue();

  console.log("checkout cart: ", cart);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div className="checkout__title">
          <h1>Shopping Cart ({cart?.length} items)</h1>
        </div>
        {cart.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
