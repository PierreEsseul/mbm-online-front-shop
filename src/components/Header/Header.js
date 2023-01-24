import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () => {
    return(
        <div>
            <h1>Shop Name</h1>

            <div>
                <BurgerMenu />
            </div>
        </div>
    );
};

export default Header;