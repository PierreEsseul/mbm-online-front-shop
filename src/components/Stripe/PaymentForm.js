import React, {useState} from 'react'
import { CardElement, useElements, useStripe} from "@stripe/react-stripe-js"

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

        try {
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: "card",
                card: elements.getElement(CardElement)
            })

            console.log('{error, paymentMethod} :>> ', { error, paymentMethod });

            if (!error) {
                try {
                    const { id } = paymentMethod;
                    const amount = 1000;

                    const response = await fetch(
                        `${process.env.REACT_APP_URL_BACK}/online/back/payment`,
                        {
                            method: "POST",
                            body: JSON.stringify(amount, id),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    );

                    const data = await response.json();
                    console.log("data:", data);

                    if (response.data.success) {
                        console.log("payment is a success")
                        setSuccess(true)
                    }

                } catch (error) {
                    console.log("test")
                    console.log("Error: ", error)
                }
            } else {
                console.log(error.message);
            }


        } catch (error) {
            console.log('handleSubmit: error :>> ', error);
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
