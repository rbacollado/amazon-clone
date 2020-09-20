import React, { useState, useEffect } from "react";
import { useStateValue } from "../StateProvider";
import "./payment.css";
import CheckoutProduct from "../components/CheckoutProduct";
import axios from "../axios";
import { db } from "../firebase.js";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getCartSubtotal } from "../reducer";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  const history = useHistory();

  /* stripe stuff */
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    /* generate a stripe secret; allows to charge a customer; 
        changes when 'cart' gets updated*/

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // stripes expects the total in currencies subunits
        url: `/payments/create?total=${getCartSubtotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [cart]);

  console.log("Secret >>>", clientSecret);

  const handleSummit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    /* stripe confirmation on payment */
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        /* pay intent = paymentconfirmation */

        /* push payment on orders DB*/
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({ type: "EMPTY_CART" });

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    //   Listens for changes in Card Element and displays any errors
    setDisabled(e.empty);
    setError(e.error ? e.error.message : null);
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{cart?.length} items</Link>)
        </h1>

        <div className="payment__section">
          <div className="payment__title">
            <h3>1. Shipping Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Sample Street Name</p>
            <p>Sample City, USA</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>2. Review items and shipping</h3>
          </div>
          <div className="payment__items">
            {cart.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>3. Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSummit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>
                        Order Total: <strong>{value}</strong>
                      </h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getCartSubtotal(cart)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />

                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* displays errors  */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
