import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from '../components/payment/checkout-form';
// import '../Test.css';
// import { STRIPE_PUBLISHABLE_KEY } from '../config/env';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
// const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
// const stripePromise = loadStripe(
//   'pk_test_51PYXBM2LMYgfQ7g3t6CEtBLhfBHRDqG1Oknzaahi4EA4vnHQjvGc0fbX7uo6KebK1f6g8GqKKJ5a9JRDVeeIEwXl00s8vXLz18'
// );
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

// const port = process.env.PORT || 8000;

function TestPayment() {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    // Create PaymentIntent as soon as the page loads
    fetch('http://localhost:4000/payment/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] })
    })
      // axios.post('http://localhost:4000/payment/create-payment-intent', { items: [{ id: 'xl-tshirt' }] })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok ' + res.statusText);
        }
        return res.json();
      })
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => console.error('Error:', error));
  }, []);

  const appearance = {
    theme: 'flat'
  };
  const options = {
    clientSecret,
    appearance
  };

  return (
    <div className="App">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export default TestPayment;
