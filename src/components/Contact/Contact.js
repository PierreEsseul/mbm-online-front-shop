import React from 'react';


import './Contact.css'
import {HiMail, HiPhone} from 'react-icons/hi';




const Contact = (props) => {

    return (
        <div className='parent__contact'>
            <div className='contact'>
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
                    </div>
                </div>
            </div>
            <div className='image'><img src='./img/png/cardPersonnalisez.png' alt='contact infos' /></div>
        </div>
    )
};

export default Contact;