import React from 'react';

<<<<<<< HEAD

import './Contact.css'
=======
import './Contact.css';
>>>>>>> pierre
import {HiMail, HiPhone} from 'react-icons/hi';




const Contact = (props) => {


    return (
      <>  
    {props.data && ( 
        <div className='parent__contact'> 
            <div className='contact'>
<<<<<<< HEAD
                <a href='/'>Accueil</a>
                <div className='child__contact'>
                    <h3>Informations sur la boutique</h3>

                    <div>
                        <div className='mail'>
                            <HiMail />
                            <div>p.esseul@gmail.com</div>
                        </div>
                        <div className='phone'>
                            <HiPhone />
                            <div>0638695035</div>
                        </div>
                    </div>
                    <div className='address'>
                        <p>Adresse :</p>
                        <div className='address__details'>
                            <div>10 rue place de la bourse</div>
                            <div>33000, Bordeaux</div>
                        </div>
                    </div>
                    <div className='hours'>
                        <p>Horaires d'ouverture :</p>
                        <div className='hours__details'>
                            <div>10H - 14H</div>
                        </div>
=======
                
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
>>>>>>> pierre
                    </div>
                </div>
            </div>
            <div className='image'><img src='./img/png/cardPersonnalisez.png' alt='contact infos' /></div>
        </div>
    )}
    </>
    )
};

export default Contact;