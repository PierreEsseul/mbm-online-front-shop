import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import './Card.css'

const Card = (props) => {
    const {addItem, removeItem} = useShoppingCart();
    console.log("Value addItem", {addItem});
    console.log(useShoppingCart());

    return (  
        <div className='card'>
                <div className='card__img'>
                    <img src={props.product.picture_url}  alt="imagee du produit" />
                    {/* <img src="https://via.placeholder.com/240x220" onError="this.src='image-null.jpg'" alt="image du produit" /> */}
                </div>
                <div className='information'>
                    <div className='title'>
                        <div className='name'>{props.product ? props.product.name_article : 'article1'}</div>
                        <div>{props.product.amount_article}€</div>
                    </div>
                    <div className='description'>{props.product.description}</div>
                </div>
                <div className='card__button'>
                    <button 
                        type='button' 
                        onClick={() => addItem(props.product)}
                        aria-label={`Add ${props.product.name} to your cart`}
                    >
                        Ajouter au panier
                    </button>
                </div>
        </div>
    );
};

export default Card;