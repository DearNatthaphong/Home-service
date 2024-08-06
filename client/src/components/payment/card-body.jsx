import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';

import PromotionForm from './promotion-form.jsx';
import CheckoutForm from './checkout-form.jsx';
import { usePayment } from '../../context/payment-context.jsx';

function CardBody() {
  const { options, stripePromise } = usePayment();

  return (
    <div className="xl:px-0 xl:w-2/3">
      <div className="card bg-white rounded-lg border-[1px] border-gray-300">
        <div className="card-body px-3 py-4 xl:px-6 xl:py-8">
          <h2 className="card-title text-[18px]">กรอกข้อมูลบริการ</h2>
          {options.clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
          {/* <PromotionForm /> */}
        </div>
      </div>
    </div>
  );
}

export default CardBody;
