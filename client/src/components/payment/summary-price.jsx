import React from 'react';
import SummaryPriceMockup from './summary-price-mockup';
import { formatPrice } from '../../utils/price-format';
import { usePayment } from '../../context/payment-context';

function SummaryPrice({ details }) {
  if (!details) {
    return <SummaryPriceMockup />;
  }

  const { totalPrice } = details;

  const { newTotalPrice } = usePayment();

  const formattedPrice = formatPrice(totalPrice);
  const formattedNewPrice = formatPrice(newTotalPrice);

  return (
    <div className="flex justify-between py-4">
      <p className="test-gray-700">รวม</p>
      {!newTotalPrice && (
        <p className="text-black text-end">{formattedPrice}</p>
      )}
      {newTotalPrice && (
        <p className="text-black text-end">{formattedNewPrice}</p>
      )}
    </div>
  );
}

export default SummaryPrice;
