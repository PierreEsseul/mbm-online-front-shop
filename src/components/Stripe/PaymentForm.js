import React, {useState} from 'react'
import { CardElement, useElements, useStripe} from "@stripe/react-stripe-js"
import axios from "axios"

import './Stripe.css'

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#91C1ED",
			color: "#000",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#91C1ED" },
			"::placeholder": { color: "#91C1ED" }
		},
		invalid: {
			iconColor: "#FE393C",
			color: "#FE393C"
		}
	}
}


export default function PaymentForm() {

    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
 
    if(!error){
        try{ 
            const {id} = paymentMethod;
            const amount = 1000;
            // const response = await axios.post(`${process.env.REACT_APP_URL_BACK}/online/back/payment`, {
            //     amount: 1000,
            //     id
            // })
          
            const response = await fetch(
                `${process.env.REACT_APP_URL_BACK}/online/back/payment`,
                {
                mode:"no-cors",
                method: "POST",
                body: JSON.stringify(amount, id),
                headers: {
                    "Content-Type": "application/json",
                },
                }
            );
    
            const data = await response.json();
            console.log("data:", data);

            if(response.data.success){
                console.log("payment is a success")
                setSuccess(true)
            }

        }catch(error){
            console.log("test")
            console.log("Error: ", error)
        }
    }else{
        console.log(error.message);
    }
}

  return (
    <div className='card'>
        {!success ?
        <form onSubmit={handleSubmit}>
            <fielset className="FormGroup">
                <div className='FormRow'>
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fielset>
            <button>Payer</button>
        </form>
        : 
        <div>
            <h2>Vous avez payé</h2>
        </div> 
        }
        
    </div>
  )
}
