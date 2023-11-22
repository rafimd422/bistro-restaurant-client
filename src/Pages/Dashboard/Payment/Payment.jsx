
import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from './../../../Components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheakOutForm from './CheakOutForm';

//TODO: Add Publishable Key

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_KEY)


export default function Payment(){

  return (
    <div className='py-6'>
      <SectionTitle heading='Payment' subHeading={'Please Pay to Eat'} />
    <div>
        <Elements stripe={stripePromise}>
          <CheakOutForm  />
        </Elements>
    </div>
    
    
    </div>
  )
}
