import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

export default function CheakOutForm() {

const stripe = useStripe()
const elements = useElements()
const handleSubmit = async(e) => {
e.preventDefault()

if(!stripe || !elements){
    return;
}

const card = elements.getElement(CardElement)
if(!card || card === null){
return;
}

const {} = await stripe.createPaymentMethod({
    type:'card',
    card
})
.then(error => {
    if(error){
        console.log('payment error', error)
    }else {
        'payment method', paymentMethod
    }
    
})

}

  return (
<form onSubmit={handleSubmit}>
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

<button className='btn btn-secondery my-4 px-6' type="submit" disabled={!stripe}>
          Pay
        </button>
</form>
  )
}
