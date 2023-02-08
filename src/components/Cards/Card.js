import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai';


import './Card.css'

const Card = (props, key) => {
    const { addItem, cartDetails, incrementItem, decrementItem } = useShoppingCart();
    
    function addToCart() {
        addItem(props.product);
    }

    const price = (props.product.price).toFixed(2);


    return (  
        <div className='card'>
                <div className='card__img'>
                    <img src={props.product.picture_url}  alt="imagee du produit" />
                </div>
                <div className='information'>
                    <div className='title'>
                        <div className='name'>{props.product ? props.product.name_article : 'article1'}</div>
                        <div>{price}€</div>
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