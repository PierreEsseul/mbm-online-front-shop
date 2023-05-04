import React from 'react';
import Card from './Card.js';

import './Cards.css';

const Cards = (props) => {
    return (
        <div className='cards'> 
            {props?.data?.articles ?
                <div className='child-cards'>
                {props.data.articles.map(product =>
                    <Card product={product} key={product.id_article}></Card>
                )}
                </div>
            :    
                <div className='parent-loader'> 
                    <div className='loader'>
                        <p>chargement de la boutique...</p>
                        <div className='loader__icon'></div>
                    </div> 
                </div>   
            }   
        </div>
    );
};

export default Cards;

