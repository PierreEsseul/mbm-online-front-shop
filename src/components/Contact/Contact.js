import React, { useEffect } from 'react';


import './Contact.css'
import {HiMail, HiPhone} from 'react-icons/hi';

console.log("Dans Contact.js");


const Contact = (props) => {
    const shopName = props.name;

    useEffect(() => {
        document.title = `${props.name} | Contact`;
    }, [shopName]);
    

    return (
        <>
            {props.data && ( 
                <div className='parent__contact'> 
                    <div className='contact'>
                        <div>
                            <a href="/">Accueil</a>
                        </div>
                        
                        <h3>Informations sur la boutique</h3>

                        <div>
                            <div className='mail'>
                                <HiMail />
                                <div>{props.data.user.mail}</div>
                            </div>
                        </div>  
                        
                        {props.data.address.phone_number && (
                        <>
                            <div className='phone'>
                                <HiPhone />
                                <div>{props.data.address.phone_number}</div>
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
                        </>)}

                    </div>
                    <div className='image'><img src='./img/png/cardPersonnalisez.png' alt='contact infos' /></div>
                </div>
            )}
        </>
    )
};

export default Contact;