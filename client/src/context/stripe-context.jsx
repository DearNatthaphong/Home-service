import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-toastify';
import axios from 'axios';

const StripeContext = React.createContext();

function StripeProvider({ children }) {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  const [clientSecret, setClientSecret] = useState('');

  const appearance = {
    theme: 'stripe'
  };

  const options = {
    clientSecret,
    appearance
  };

  async function createClientSecret(id) {
    try {
      const result = await axios.post(
        `http://localhost:4000/payment/orders/${id}/payment-intent`
      );
      const clientSecret = result.data.clientSecret;
      setClientSecret(clientSecret);
      //   toast.success(result.data.message);
    } catch (error) {
      //   console.log(error);
      toast.error(error.response.data.message);
    }
  }

  async function getClientSecret(id) {
    try {
      const result = await axios.get(
        `http://localhost:4000/payment/orders/${id}/payment-intent`
      );
      const clientSecret = result.data.clientSecret;
      setClientSecret(clientSecret);
      //   toast.success(result.data.message);
    } catch (error) {
      //   console.log(error);
      toast.error(error.response.data.message);
    }
  }

  async function updateClientSecret(id) {
    try {
      const result = await axios.put(
        `http://localhost:4000/payment/orders/${id}/payment-intent`
      );
      const clientSecret = result.data.clientSecret;
      setClientSecret(clientSecret);
      //   toast.success(result.data.message);
    } catch (error) {
      //   console.log(error);
      toast.error(error.response.data.message);
    }
  }

  return (
    <StripeContext.Provider
      value={{
        stripePromise,
        clientSecret,
        options,
        createClientSecret,
        getClientSecret,
        updateClientSecret
      }}
    >
      {children}
    </StripeContext.Provider>
  );
}

const useStripeContext = () => React.useContext(StripeContext);

export { StripeProvider, useStripeContext };
