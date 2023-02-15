import React, { useEffect } from 'react'
import { useShoppingCart } from 'use-shopping-cart';
import { useNavigate } from 'react-router-dom';


import './PaymentSuccess.css'


export default function PaymentSuccess(props) {

    const shopName = props.name;

    useEffect(() => {
        document.title = `${props.name} | Payment Réussi`;
    }, [shopName]);

    const {clearCart} = useShoppingCart()
    const navigate = useNavigate();
    
    window.onload = function() {
        clearCart();
    };
    
    function BackHome(){
        navigate('/');
    }

 
    return (
        <div className='page' >

            <h3>Votre achat a bien été pris en compte !</h3>

            <img src='./img/png/cardGagnez.png' alt='payment success'/>
            <button onClick={BackHome}>Revenir à l'accueil</button>

        </div>
)
}
