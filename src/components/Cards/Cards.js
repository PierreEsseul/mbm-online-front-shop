import React, { useEffect } from 'react';

import Card from './Card.js';


import './Cards.css';

console.log("Dans Cards.js")

const Cards = (props) => {


    return (
        <div className='cards'> 
            {props?.data?.articles ? props.data.articles.map(product => 
                <Card product={product} key={product.id_article}></Card>
            ) 
            :
                <div className='loader'>
                    <p>chargement de la boutique...</p>
                    <div className='loader__icon'></div>
                </div> 
            }   
        </div>
    );
};

export default Cards;