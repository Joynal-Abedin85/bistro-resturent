import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useaxios from '../../hook/useaxios'
import usecart from '../../hook/usecart'
import { Authcontext } from "../../auth/Authprovider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Chackout = () => {
  const [error, seterror] = useState('');
  const [clientSecret, setclientsecret] = useState('')
  const stripe = useStripe();
  const elements = useElements();
  const [transc,settransec] = useState('')
  const axiossecure = useaxios()
  const {user} = useContext(Authcontext)
  const [cart , refetch] = usecart()
  const totalprice = cart.reduce((total,item)=> total + item.price, 0)
  const navigate = useNavigate()

  useEffect(()=>{
    axiossecure.post('/create-payment-intent', {price: totalprice})
    .then(res => {
      console.log(res.data.clientSecret)
      setclientsecret(res.data.clientSecret)
    })
  },[axiossecure,totalprice])

  const handlesumit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      seterror(error.message);
    } else {
      console.log('method',paymentMethod);
      seterror(" ");
    }

    // confirm paymennt 
    const {paymentIntent, error: confirmerror} = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details:  {
          email: user?.email || 'anonymous',
          name: user?.displayName || 'anonymous',
        }
      }
    })

    if(confirmerror){
      console.log('confirm error',confirmerror)
    } else {
      console.log('error payment intennt',paymentIntent )
      if(paymentIntent.status === "succeeded"){
        console.log('id' , paymentIntent.id)
        settransec(paymentIntent.id)

        // new save the payment in the dataase 
        const payment = {
          email: user.email,
          price: totalprice,
          transc: paymentIntent.id,
          date: new Date(),
          cartIds: cart.map(item => item._id),
          menuitemids: cart.map(item => item.menuId),
          status: 'pending'
        }

        const res = await  axiossecure.post('/payments', payment)
        console.log(res.data)
        refetch();
        if(res.data?.paymentResult?.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/dashboard/paymenthistory')
        }
      }
    }
  };
  return (
    <div>
      <form onSubmit={handlesumit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "28px",
                color: "#ffff",
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
        <button type="submit" className="btn btn-primary" disabled={!stripe || !clientSecret}>
          Pay
        </button>
        <p className="text-red-500">{error}</p>
        {
          transc && <p className="text-green-500">id = {transc}</p>
        }
      </form>
    </div>
  );
};

export default Chackout;
