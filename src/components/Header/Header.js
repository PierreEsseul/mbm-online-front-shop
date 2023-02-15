import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';

import {AiOutlineShoppingCart} from 'react-icons/ai';
import {BsInfoSquare} from 'react-icons/bs'


import './Header.css';

const Header = (props) => {
    const {cartCount} = useShoppingCart();

    return(
        
        <div className='header'>
            <a href="/"><h1>{props.data?.shop.name_shop}</h1></a>
        
            <div className='icons'>
                <a href="/contact"><BsInfoSquare /></a>
                <a href="/cart">
                    <AiOutlineShoppingCart />
                    {cartCount !== 0 && (<div className='number'>
                    <p>{cartCount}</p>
                    </div>)}
                </a>
            </div>
            
        </div>
    );
};

export default Header;