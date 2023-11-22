import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "./../../../Hooks/useAxiosSecure";
import useCart from "./../../../Hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

export default function CheakOutForm() {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('')
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data?.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card || card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

if(confirmError){
  console.log('confirm error')
}else{
  console.log('payment intent', paymentIntent)
  if(paymentIntent.status === 'succeeded'){
    console.log('transaction id', paymentIntent?.id)
    setTransactionId(paymentIntent?.id)
  }

//now save the payment in the database

const payment = {
  email: user.email,
  price: totalPrice,
  transactionId: paymentIntent?.id,
  date: new Date(), // convert to UTC Date. use moment js.
  cartId: cart.map(item => item._id),
  status: 'Under Processing'
}
const res = await axiosSecure.post('/payments', payment)
console.log('payment saved', res.data)
refetch()
}
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-secondery my-4 px-6"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <br />
      <p className="text-red-500 text-sm">{error}</p>
    {transactionId && <p className="text-green-600">Your Transaction Id: {transactionId}</p>}
    </form>
  );
}
