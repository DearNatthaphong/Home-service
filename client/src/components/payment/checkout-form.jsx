import React, { useEffect, useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { usePayment } from '../../context/payment-context';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import PromotionForm from './promotion-form';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    handlePaymentSuccess,
    handlePaymentFail,
    createClientSecret,
    clientSecret,
    createPromotionUsage,
    promotion
  } = usePayment();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    try {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          // return_url: `http://localhost:5173/payment/${id}/success`
        },
        redirect: 'if_required'
      });
      // การทำ 3D Secure.
      console.log('Payment Error:', error);

      if (error) {
        // if (error.type === 'card_error' || error.type === 'validation_error') {
        if (error.type === 'card_error') {
          setMessage(error.message);
          await handlePaymentFail(id);
          toast.error(message);
          await createClientSecret(id);
        } else {
          setMessage('An unexpected error occurred.');
          toast.error(message);
        }
      } else {
        if (paymentIntent.status === 'requires_action') {
          const { error: confirmError } = await stripe.confirmCardPayment(
            paymentIntent.client_secret
          );
          if (confirmError) {
            // console.log('Confirm Card Payment Error:', confirmError);
            setMessage(confirmError.message);
            toast.error(message);
          } else {
            // console.log('Payment was successful');
            await handlePaymentSuccess(id);
            await createPromotionUsage(promotion.promotionId, id);
            navigate(`/payment/${id}/success`);
          }
        } else {
          // console.log('Payment was successful');
          await handlePaymentSuccess(id);
          await createPromotionUsage(promotion.promotionId, id);
          navigate(`/payment/${id}/success`);
        }
      }
    } catch (error) {
      console.error('Error during payment confirmation:', error);
      setMessage('An unexpected error occurred.');
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const paymentElementOptions = {
    layout: 'tabs'
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <PromotionForm />
      <button
        className="btn w-full mt-3 bg-blue-600 border-blue-600 text-white hover:bg-blue-500 hover:text-white focus:bg-blue-800 focus:text-white"
        disabled={isLoading || !stripe || !elements}
        id="submit"
      >
        <span id="button-text">
          {isLoading ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            'ยืนยันการชำระเงิน >'
          )}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && (
        <div id="payment-message" className="mt-3 text-red text-base">
          {message}
        </div>
      )}
    </form>
  );
}
