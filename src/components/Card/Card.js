import React from 'react';

import './Card.css'

const Card = () => {
    return (
        <div className='cards'>
            <div className='card'>    
                <div>
                    <img src="https://via.placeholder.com/220" onError="this.src='image-null.jpg'" alt="image du produit" />
                </div>
                <div className='information'>
                    <div className='title'>
                        <div><a href='#' alt="Affichage detail article">Titre</a></div>
                        <div>Prix</div>
                    </div>
                    <div>Description</div>
                </div>
            </div>
        </div>
    );
};

export default Card;