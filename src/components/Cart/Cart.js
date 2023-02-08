import React, { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useNavigate } from 'react-router-dom';

import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai';

import './Cart.css';

const Cart = (props) => {

    const { 
        cartCount, 
        currency, 
        totalPrice, 
        cartDetails, 
        removeItem, 
        incrementItem,
        decrementItem,
        clearCart,  
    } = useShoppingCart()

    console.log("Value cartCount : ",cartCount)
    console.log("Value cartDetails : ", cartDetails)
    console.log("total price : ",totalPrice);
    console.log("Value currency : ", {currency});

    const navigate = useNavigate();

    const payment = () => {
        navigate('/payment');
    };
    
    return (
    <div className='cart'>
        {cartCount === 0 && (
            <h3>Vous n'avez pas d'article</h3> 
        )}  
            
            {Object.entries(cartDetails).map(([key, value]) => (
                <div className="items" key={key}>
                    <div><img src={value.picture_url} alt="product display" /></div>
                    <div className='items__name'>{value.name_article}</div>
                    <div className='items__quantity'>
                        <button
                            type='button'
                            onClick={() => decrementItem(key)}> 
                            
                                <AiOutlineMinusCircle />
                        </button>
                        <div>{value.quantity}</div>
                        <button 
                            type='button' 
                            onClick={() => incrementItem(key)}>
                                <AiOutlinePlusCircle />
                        </button>
                    </div>
                    <div className='items__price'>{value.price}€</div>
                </div> 
            ))}
            
            <div className='total__price'>
                <div className='total'>Prix total :</div>
                <div className='amount'>{totalPrice}€</div>
            </div> 
            
            <div className='payment'>
                <button type='button' onClick={payment} >Payer</button>
            </div>

            <div>
                <button onClick={clearCart}>Remove all items</button>
            </div>
    </div>
  
    )
}

export default Cart;
