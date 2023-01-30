import React from 'react';

import './Card.css'

const Card = () => {
    return (
        <div className='card'>   
                <div className='card__img'>
                    <img src="https://via.placeholder.com/240x220" onError="this.src='image-null.jpg'" alt="image du produit" />
                </div>
                <div className='information'>
                    <div className='title'>
                        <div><a href='#' alt="Affichage detail article">Titre</a></div>
                        <div>12,99€</div>
                    </div>
                    <div className='description'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 
                        1500s, when an unknown printer took a galley of type and scrambled it 
                        to make a type specimen book. It has survived not only five centuries, 
                        but also the leap into electronic typesetting, remaining essentially unchanged.
                    </div>
                </div>
                <div className='card__button'>
                    <button>Ajouter au panier</button>
                </div>
        </div>
    );
};

export default Card;