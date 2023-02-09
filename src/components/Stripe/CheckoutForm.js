import React, { useEffect, useState } from "react";
import { useShoppingCart } from 'use-shopping-cart';
import {FaLock} from 'react-icons/fa';

import './CheckoutForm.css'

import {
 PaymentElement,
 useStripe,
 useElements
} from "@stripe/react-stripe-js";
 
export default function CheckoutForm() {

 const stripe = useStripe();
 const elements = useElements();
 const [message, setMessage] = useState(null);
 const [isLoading, setIsLoading] = useState(false);

 const { totalPrice } = useShoppingCart()
 
 useEffect(() => {
   if (!stripe) {
     return;
   }
   const clientSecret = new URLSearchParams(window.location.search).get(
     "payment_intent_client_secret"
   );
   if (!clientSecret) {
     return;
   }
 
   stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
     switch (paymentIntent.status) {
       case "succeeded":
         setMessage("Payment succeeded!");
         break;
       case "processing":
         setMessage("Your payment is processing.");
         break;
       case "requires_payment_method":
         setMessage("Your payment was not successful, please try again.");
         break;
       default:
         setMessage("Something went wrong.");
         break;
     }
   });
 }, [stripe]);
 
 const handleSubmit = async (e) => {
   e.preventDefault();
   if (!stripe || !elements) {
     return;
   }
   setIsLoading(true);
 
   const { error } = await stripe.confirmPayment({
     elements,
     confirmParams: {
       return_url: `${process.env.REACT_APP_URL_FRONT}/payment_success`,
     },
   });
   if (error.type === "card_error" || error.type === "validation_error") {
     setMessage(error.message);
   } else {
     setMessage("An unexpected error occured.");
   }
   setIsLoading(false);
   
 };
 
 return (
   <form id="payment-form" onSubmit={handleSubmit}>
     <PaymentElement id="payment-element" />
     <div className="button__price">
        <button disabled={isLoading || !stripe || !elements} id="submit" className="button">
          <div className="button__child">
            <FaLock className="icon"/>
            <div className="button__greatchildren">
              <span id="button-text">
                {isLoading ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div> : "Payer"}
              </span>
              <h4>{totalPrice}€</h4>
            </div>
          </div>  
        </button>
     </div>
     
     {/* Show any error or success messages */}
     {message && <div id="payment-message">{message}</div>}
   </form>
 );
}