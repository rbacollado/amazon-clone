import React, { useState, useEffect } from "react";
import "./orders.css";
import Order from "../components/Order";
import { useStateValue } from "../StateProvider";
import { db } from "../firebase.js";

function Orders() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <div className="orders__container">
        <h1>My Orders</h1>
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
