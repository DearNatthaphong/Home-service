import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PaymentContext = React.createContext();

function PaymentProvider(props) {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  const navigate = useNavigate();

  const [clientSecret, setClientSecret] = useState('');

  const appearance = {
    theme: 'stripe'
  };
  const options = {
    clientSecret,
    appearance
  };

  const createClientSecret = async (id) => {
    //1.สร้าง client secret
    try {
      const result = await axios.post(
        `http://localhost:4000/payment/orders/${id}/create-payment-intent`
      );
      const clientSecret = result.data.clientSecret;
      setClientSecret(clientSecret);
      toast.success(result.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const handleClickToPayment = async (id) => {
    //1.สร้าง client secret 2.ไปที่หน้า payment ตัดบัตร
    try {
      await createClientSecret(id);
      navigate(`/payment/${id}`);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  const handlePaymentSuccess = async (id) => {
    try {
      const result = await axios.put(
        `http://localhost:4000/payment/orders/${id}/success`
      );
      console.log(result);
      //   toast.success(result.data?.message || 'การอัพเดตสำเร็จ');
    } catch (error) {
      console.log(error);
      //   toast.error(error.response?.data || error.message || 'เกิดข้อผิดพลาด');
    }
  };

  const handlePaymentFail = async (orderId) => {
    try {
      const result = await axios.put(
        `http://localhost:4000/payment/orders/${orderId}/fail`
      );

      console.log(result);
      toast.success(result.data?.message || 'การอัพเดตสำเร็จ');
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data || error.message || 'เกิดข้อผิดพลาด');
    }
  };

  return (
    <PaymentContext.Provider
      value={{
        options,
        stripePromise,
        handleClickToPayment,
        handlePaymentSuccess,
        handlePaymentFail,
        createClientSecret
      }}
    >
      {props.children}
    </PaymentContext.Provider>
  );
}

const usePayment = () => React.useContext(PaymentContext);

export { PaymentProvider, usePayment };
