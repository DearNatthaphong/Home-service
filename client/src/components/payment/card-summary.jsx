import React, { useState, useEffect } from 'react';
import SummaryDetail from './summary-detail';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import SummaryPrice from './summary-price';

function CardSummary() {
  const [order, setOrder] = useState({});
  const params = useParams();

  const getOrder = async () => {
    const result = await axios(
      `http://localhost:4000/payment/orders/${params.id}`
    );
    setOrder(result.data);
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div className="xl:w-1/3">
      <div
        tabIndex={0}
        className="hidden xl:block collapse-open bg-white border border-b-0 xl:border-b-2 border-gray-300 rounded-b-none rounded-t-lg xl:rounded-b-lg pb-0 mb-0 xl:px-3"
      >
        <div className="collapse-arrow xl:hidden"></div>
        <div className="collapse-title text-[16px] xl:text-[20px] font-bold text-gray-700">
          สรุปรายการ
        </div>
        <div className="collapse-content text-[14px] pb-0">
          <ul>
            <SummaryDetail details={order} isSummary={true} />
          </ul>
          <SummaryPrice details={order} />
        </div>
      </div>
    </div>
  );
}

export default CardSummary;
