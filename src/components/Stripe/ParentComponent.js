import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useShoppingCart } from 'use-shopping-cart';
 
import CheckoutForm from "./CheckoutForm";

const PUBLIC_KEY = `${process.env.REACT_APP_STRIPE_PUBLIC_KEY}`;
const stripePromise = loadStripe(PUBLIC_KEY);


 
export default function App() {
  const [clientSecret, setClientSecret] = useState("");
  const { cartCount, currency, totalPrice, cartDetails} = useShoppingCart()

  console.log(typeof(totalPrice))

  useEffect(() => {
    
    fetch(`${process.env.REACT_APP_URL_BACK}/online/back/payment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({amount: (totalPrice*100)}),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);
 
  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
 
  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}