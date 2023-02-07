import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { DebugCart } from 'use-shopping-cart'

import './Cart.css';

const Cart = (props) => {

    const { cartCount, formattedTotalPrice, currency, totalPrice, cartDetails} = useShoppingCart()

    console.log("Value cartCount : ",cartCount)
    console.log("Value cartDetails : ", cartDetails)
    console.log("total price : ",totalPrice);
    console.log("Value currency : ", {currency});
    
    return (
    <>
      <h1>{totalPrice}</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>{totalPrice}</td>
        </tr>
        
          {/* {cartDetails.map(item => (
            <tr key={item.id}>
              <td>{item.name_article}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </>
  
    )
}

export default Cart;
