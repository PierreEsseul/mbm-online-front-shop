import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartProvider } from 'use-shopping-cart'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const stripeKey = process.env.STRIPE_PUBLIC_KEY;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider
    mode="payment"
    cartMode="checkout-session"
    stripe={stripeKey}
    currency="EUR"
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
