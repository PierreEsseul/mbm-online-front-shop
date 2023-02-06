import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import './Cart.css';

const Cart = (props) => {
    const { cart } = useShoppingCart();
    console.log("Value cart : ",{cart});

    return (
        <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {cart.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
    )
}

export default Cart;
