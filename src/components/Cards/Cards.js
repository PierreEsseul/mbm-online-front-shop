import React from 'react';
import Card from './Card.js';


import './Cards.css';

const Cards = (props) => {

    return (
        <div className='cards'> 
            {props?.data ? props.data.articles.map(product => 
            <Card product={product} key={product.id}></Card>
            ) 
            : "chargement shop"
            }   
        </div>
    );
};

export default Cards;