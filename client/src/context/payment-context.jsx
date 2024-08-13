import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const PaymentContext = React.createContext();

function PaymentProvider(props) {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  const navigate = useNavigate();

  const [clientSecret, setClientSecret] = useState('');
  const [promotion, setPromotion] = useState(null);
  const [newTotalPrice, setNewTotalPrice] = useState(null);

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
      toast.success(result.data.message);
    } catch (error) {
      console.log(error);
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
      toast.success(result.data.message);
    } catch (error) {
      console.log(error);
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
      toast.success(result.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  // async function handleClickToPayment(id) {
  //   //1.สร้าง client secret 2.ไปที่หน้า payment ตัดบัตร
  //   try {
  //     await createClientSecret(id);
  //     navigate(`/payment/${id}`);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.response.data.message);
  //   }
  // }

  async function handlePaymentSuccess(id) {
    try {
      await axios.put(`http://localhost:4000/payment/orders/${id}/success`);
      // console.log(result);
      //   toast.success(result.data?.message || 'การอัพเดตสำเร็จ');
    } catch (error) {
      console.log(error);
      //   toast.error(error.response?.data || error.message || 'เกิดข้อผิดพลาด');
    }
  }

  async function handlePaymentFail(orderId) {
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
  }

  const getPromotionByQuery = async (code) => {
    try {
      const result = await axios.get(
        `http://localhost:4000/promotions?promotionCode=${code}`
      );
      console.log(result);
      setPromotion(result.data);
      return result.data.promotionId;
    } catch (error) {
      console.log(error);
    }
  };

  const updateTotalPrice = async (promotionId, orderId) => {
    try {
      const result = await axios.put(
        `http://localhost:4000/promotions/${promotionId}/orders/${orderId}/update-total-price`
      );
      console.log(result);
      setNewTotalPrice(result.data.totalPrice);
    } catch (error) {
      console.log(error);
    }
  };

  const createPromotionUsage = async (promotionId, orderId) => {
    try {
      const result = await axios.post(
        `http://localhost:4000/promotions/${promotionId}/orders/${orderId}/promotion-usages`
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const [order, setOrder] = useState({});
  const { id } = useParams();

  const fetchOrder = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/payment/orders/${id}`
      );
      setOrder(result.data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  return (
    <PaymentContext.Provider
      value={{
        options,
        stripePromise,
        clientSecret,
        promotion,
        newTotalPrice,
        // handleClickToPayment,
        handlePaymentSuccess,
        handlePaymentFail,
        createClientSecret,
        getClientSecret,
        updateClientSecret,
        getPromotionByQuery,
        updateTotalPrice,
        createPromotionUsage,
        order
      }}
    >
      {props.children}
    </PaymentContext.Provider>
  );
}

const usePayment = () => React.useContext(PaymentContext);

export { PaymentProvider, usePayment };
