import React from 'react';
import SummaryPriceMockup from './summary-price-mockup';
import { formatPrice } from '../../utils/price-format';

function SummaryPrice({ details }) {
  if (!details) {
    return <SummaryPriceMockup />;
  }

  const { totalPrice } = details;

  const formattedPrice = formatPrice(totalPrice);

  return (
    <div className="flex justify-between py-4">
      <p className="test-gray-700">รวม</p>
      <p className="text-black text-end">{formattedPrice}</p>
    </div>
  );
}

export default SummaryPrice;
