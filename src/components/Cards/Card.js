import React, {useState} from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai';
import {CiCircleChevDown, CiCircleChevUp} from 'react-icons/ci'


import './Card.css'


const Card = (props, key) => {
    const { addItem, cartDetails, incrementItem, decrementItem } = useShoppingCart();

    const [isClicked, setIsClicked] = useState(false);

    let price = parseInt(props.product.price, 10).toFixed(2);
    
    function addToCart() {
        addItem(props.product);
    }

    function openText(){
        setIsClicked(true);
    }

    function closeText(){
        setIsClicked(false);
    }


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
                    <div className='parent__description'>

                        <div className='description'>
                            {!isClicked 
                            ? 
                            <div className='child__description'>
                                <p>{props.product.description.substring(0, props.product.description.indexOf(" ",
                                    props.product.description.indexOf(" ", props.product.description.indexOf(" ") + 1) + 1))}...</p>
                                <button onClick={openText}><CiCircleChevDown /></button>
                            </div>
                            : 
                            <div>
                                <p>{props.product.description}</p>
                                <button onClick={closeText} className='CiCircleChevUp'><CiCircleChevUp /></button>
                            </div>

                            }
                        </div>

                        {!cartDetails[props.product.id]?.quantity  &&
                            <button 
                                type='button' 
                                onClick={addToCart}
                                aria-label={`Add ${props.product.name} to your cart`}
                            >
                                <h4 className='ajouter'>Ajouter au panier</h4>
                            </button>
                        }
                        {cartDetails[props.product.id]?.quantity  &&
                            <div className='change-quantity'>
                                <button
                                    type='button'
                                    onClick={() => decrementItem(props.product.id)}> 
                                    
                                        <AiOutlineMinusCircle />
                                </button>
                                <div className='product-quantity'>{cartDetails[props.product.id].quantity}</div>
                                <button 
                                    type='button' 
                                    onClick={() => incrementItem(props.product.id)}>
                                        <AiOutlinePlusCircle />
                                </button>
                            </div>
                        }
                    </div>
                </div>
        </div>
    );
};

export default Card;