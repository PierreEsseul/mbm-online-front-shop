import React from 'react';

import {MdOutlinePermContactCalendar} from 'react-icons/md';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { useShoppingCart } from 'use-shopping-cart';


import './Header.css';

const Header = (props) => {
    const {cartCount} = useShoppingCart();
    return(
        <div className='header'>
            <a href="/"><h1>Shop Name</h1></a>
        
            <div className='icons'>
                <a href="/cart">
                    <AiOutlineShoppingCart />
                    {cartCount !== 0 && (<div className='number'>
                    <p>{cartCount}</p>
            </div>)}
                </a>
                <a href="/contact"><MdOutlinePermContactCalendar /></a>
            </div>
            
        </div>
    );
};

export default Header;