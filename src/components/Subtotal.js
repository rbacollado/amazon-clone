import React from "react";
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";

function Subtotal() {
  const [{ cart }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart?.length} items): <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₱"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
