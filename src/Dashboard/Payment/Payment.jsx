import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
function Payment() {
  return (
    <div>
      <SectionTitle title={`PAYMENT`}/>

      <Elements stripe={stripePromise} >
      <CheckoutForm />
    </Elements>
    </div>
  )
}

export default Payment
