const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HSkehFx9e9PF48jrxNkdH42X9vs0waQIWlgdpTgDTBsvqwcjXcNAUZ8I368vSWcXXaeNs2r8WgJBoTyuZe466pw00WJwG7Dpa"
);

// app config
const app = express();

//middlewares
app.use(express.json());
app.use(cors({ origin: true }));

//api routes
app.get("/", (req, res) => {
  res.status(200).send("Server API running!");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment Request received: ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listeners
exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-5a57e/us-central1/api
