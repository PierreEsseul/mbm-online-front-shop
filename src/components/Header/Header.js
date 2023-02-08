import React from 'react';

import {MdOutlinePermContactCalendar} from 'react-icons/md';
import {AiOutlineShoppingCart} from 'react-icons/ai';


import './Header.css';

const Header = (props) => {
    return(
        <div className='header'>
            <a href="/"><h1>Shop Name</h1></a>

            <div className='icons'>
                <a href="/cart"><AiOutlineShoppingCart /></a>
                <a href="/contact"><MdOutlinePermContactCalendar /></a>
            </div>
        </div>
    );
};

export default Header;