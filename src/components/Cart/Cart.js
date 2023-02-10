import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useNavigate } from 'react-router-dom';

import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai';

import './Cart.css';

const Cart = (props) => {
    const { 
        cartCount,
        totalPrice, 
        cartDetails, 
        incrementItem,
        decrementItem, 
    } = useShoppingCart()

    const navigate = useNavigate();

    const payment = () => {
        navigate('/payment');
    };
    
    return (
    <div className='cart'>
        <div className='redirect__accueil'>
            <a href="/">Accueil</a>
        </div>
        {cartCount === 0 && (
            <div className='empty__cart'>
                <h3>Vous n'avez pas d'article</h3> 
                <a href="/"><p>Commencer vos achats</p></a>
            </div>

        )}  
            
        {Object.entries(cartDetails).map(([key, value]) => (
            <div>
                <div className="items" key={key}>
                    <div className='img'><img src={value.picture_url} alt="product display" /></div>
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
                    <div className='items__price'>{value.price.toFixed(2)}€</div>
                </div> 
                
            </div>
        ))}
        {cartCount !== 0 && (
            <div>
                <div className='total__price'>
                    <div className='total'>Prix total :</div>
                    <div className='amount'>{totalPrice.toFixed(2)}€</div>
                </div> 
                <div className='payment'>
                    <button type='button' onClick={payment} className="payer-btn">Payer</button>
                </div>
            </div>
        )}  
    </div>
  
    )
}

export default Cart;
