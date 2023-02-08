import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import './Header.css';

const Header = (props) => {
    return(
        <div className='header'>
            <a href="/"><h1>Shop Name</h1></a>

            <div>
                <BurgerMenu />
            </div>
        </div>
    );
};

export default Header;