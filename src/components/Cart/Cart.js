import React, { useState } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai';

import './Cart.css';

const Cart = (props) => {

    const { cartCount, currency, totalPrice, cartDetails, addItem, removeItem} = useShoppingCart()

    console.log("Value cartCount : ",cartCount)
    console.log("Value cartDetails : ", cartDetails)
    console.log("total price : ",totalPrice);
    console.log("Value currency : ", {currency});

    const [quantity, setQuantity] = useState(0);
    
    function addQuantity(quantity, product) {
        setQuantity(quantity++); 
        addItem(product);
    }

    function removeQuantity(quantity, product, cartCount) {
        setQuantity(quantity--);
        removeItem(product);
        console.log(product)
    }

    function payment() {
        //TODO: redirection to STRIPE
    }
    
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
                        <button type='button' onClick={removeQuantity}><AiOutlineMinusCircle /></button>
                        <div>{quantity}</div>
                        <button type='button' onClick={addQuantity}><AiOutlinePlusCircle /></button>
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
    </div>
  
    )
}

export default Cart;
