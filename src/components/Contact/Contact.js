import React from 'react';

import './Contact.css';
import {HiMail, HiPhone} from 'react-icons/hi';




const Contact = (props) => {


    return (
      <>  
    {props.data && ( 
        <div className='parent__contact'> 
            <div className='contact'>
                
                <h3>Informations sur la boutique</h3>

                <div>
                    <div className='mail'>
                        <HiMail />
                        <div>{props.data.user.mail}</div>
                    </div>
                    <div className='phone'>
                        <HiPhone />
                        <div>{props.data.address.phone_number}</div>
                    </div>
                </div>
                <div className='address'>
                    <p>Adresse :</p>
                    <div className='address__details'>
                        <div>{props.data.address.street}</div>
                        <div>{props.data.address.postal_code}, {props.data.address.city}</div>
                    </div>
                </div>
                <div className='hours'>
                    <p>Horaire d'ouverture :</p>
                    <div className='hours__details'>
                        <div>{props.data.address.hours}</div>
                    </div>
                </div>

                <a href='/'>Retour Accueil</a>
            </div>
            <div className='image'><img src='./img/png/cardPersonnalisez.png' alt='contact infos' /></div>
        </div>
    )}
    </>
    )
};

export default Contact;