import React, { useState, useEffect } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai';


import './Card.css'

const Card = (props, key) => {
    //formatCurrencyString({ value: props.product.amount.article, currency: 'USD' })
    const { addItem, cartDetails, incrementItem, decrementItem } = useShoppingCart();
    
    function addToCart() {
        addItem(props.product);
    }


    return (  
        <div className='card'>
                <div className='card__img'>
                    <img src={props.product.picture_url}  alt="imagee du produit" />
                    {/* <img src="https://via.placeholder.com/240x220" onError="this.src='image-null.jpg'" alt="image du produit" /> */}
                </div>
                <div className='information'>
                    <div className='title'>
                        <div className='name'>{props.product ? props.product.name_article : 'article1'}</div>
                        <div>{props.product.price}€</div>
                    </div>
                    <div className='description'>{props.product.description}</div>
                </div>
                <div className='card__button'>
                    {!cartDetails[props.product.id]?.quantity  &&
                        <button 
                            type='button' 
                            onClick={addToCart}
                            aria-label={`Add ${props.product.name} to your cart`}
                        >
                            Ajouter au panier
                        </button>
                    }
                    {cartDetails[props.product.id]?.quantity  &&
                        <div className='change-quantity'>
                            <button
                                type='button'
                                onClick={() => decrementItem(props.product.id)}> 
                                
                                    <AiOutlineMinusCircle />
                            </button>
                            <div>{cartDetails[props.product.id].quantity}</div>
                            <button 
                                type='button' 
                                onClick={() => incrementItem(props.product.id)}>
                                    <AiOutlinePlusCircle />
                            </button>
                        </div>
                    }
                </div>
        </div>
    );
};

export default Card;