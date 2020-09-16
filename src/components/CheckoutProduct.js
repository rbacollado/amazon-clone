import React from "react";
import "../components/checkoutproduct.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, image, title, price }) {
  const [{ cart }, dispatch] = useStateValue();

  console.log("check out product id: ", id);

  const removeProduct = () => {
    dispatch({
      type: "REMOVE_TO_CART",
      item: {
        id: id,
      },
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="product__image" src={image} alt="" />

      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>₱</small>
          <strong>{price}</strong>
        </p>
        <button onClick={removeProduct}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
