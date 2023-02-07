import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import './Header.css';

const Header = (props) => {
    return(
        <div className='header'>
            <h1>Shop Name</h1>

            <div>
                <BurgerMenu />
            </div>
        </div>
    );
};

export default Header;