import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Chackout from "./Chackout";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);

const Payment = () => {
  return (
    <div>
      <div className="w-max text-center  mx-auto my-10">
        <h2 className="text-4xl text-amber-400 pb-2">---hey---</h2>
        <h2 className="uppercase text-4xl  border-y-4 py-3">payment in this</h2>
      </div>
      <div className="w-2/3 mx-auto">
        <Elements stripe={stripePromise}>
            <Chackout></Chackout>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
