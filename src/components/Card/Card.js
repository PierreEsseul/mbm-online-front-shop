import React from 'react';

import './Card.css'

const Card = () => {
    return (
        <div className='cards'>
            <div className='card'>    
                <div>
                    <img src="https://via.placeholder.com/150" onError="this.src='image-null.jpg'" alt="image du produit" />
                </div>
                <div>
                    <div className='title'>
                        <div>titre</div>
                        <div>prix</div>
                    </div>
                    <div>description</div>
                </div>
            </div>
        </div>
    );
};

export default Card;