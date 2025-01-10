import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../Firebase/useAuth';
import useAxiosSecure from '../../Pages/Shared/Custom/useAxiosSecure';
import useCart from '../../Pages/Shared/Custom/useCart';

function CheckoutForm() {
  const {user} = useAuth()
    const stripe = useStripe();
    const elements = useElements()
    const [errorMessage , seErrorMessage] = useState(' ')
    const [clientSecret , setClientSecret] = useState(' ')
    const [transaction , settransaction] = useState('')

   const axiosSecure = useAxiosSecure()
const [cart ,refetch  ] = useCart()
const totalPrice = cart.reduce((total , item) => total + item.price , 0)

useEffect(()=> {
  fetchData()
} , [])

const fetchData = async() => {
 if(totalPrice > 0) {
  const {data} =await axiosSecure.post('/create-payment-intent' , {price : totalPrice})
 console.log(data.clientSecret)
 setClientSecret(data.clientSecret)
 }
}

    const handleCheckOut = async (e) => {
        e.preventDefault()
 
        if(!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)
        if(card === null) {
            return
        }
        const {error , paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error) {
            seErrorMessage(error.message)
            return console.log('payment error' , error)
        }
        else{
            console.log('paymentMathod  ' , paymentMethod)
            seErrorMessage(' ')
        }
        const {paymentIntent , error : confirmError} = await stripe.confirmCardPayment(
          clientSecret , {
            payment_method : {
              card : card,
              billing_details : {
                email : user?.email || 'anonymous',
                name : user?.displayName || 'anonymous',
              }
            }
          }
        )
        if(confirmError) {
          console.log('confirm error')
        }
        else{
          console.log('payment intent', paymentIntent)
          if(paymentIntent.status === "succeeded"){
            settransaction(paymentIntent.id)
            Swal.fire('Payment Successfull')
            const payment = {
              email : user?.email , 
              price : totalPrice,
              date : new Date(),
              transaction : paymentIntent.id,
              itemId : cart.map(item => item.itemId),
              menuItemId : cart.map(item => item._id),
              status : 'pending'
            }

            const res = await axiosSecure.post('/payments' , payment)
            console.log('payment save',res.data)
            refetch()
          }
        }
    }
  return (
    <div>
      <form action="" onSubmit={handleCheckOut}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className='btn btn-sm bg-purple-600 my-5 px-5 text-white' disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className='text-xl font-semibold text-red-500 my-5'>{errorMessage}</p>
      {
        transaction && <p className='text-md text-green-500 my-3 '>transaction id : {transaction}</p>
      }
      </form>
    </div>
  )
}

export default CheckoutForm
