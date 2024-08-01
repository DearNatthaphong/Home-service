import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import { successIcon } from '../assets/icons/icon-service-detail';
import SummaryDetail from '../components/payment/summary-detail';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { usePayment } from '../context/payment-context';

function PaymentSuccess() {
  const [order, setOrder] = useState({});
  const { id } = useParams();

  // const { handlePaymentSuccess } = usePayment();

  const getOrder = async () => {
    const result = await axios(`http://localhost:4000/payment/orders/${id}`);
    setOrder(result.data);
  };

  useEffect(() => {
    // handlePaymentSuccess(id);
    getOrder();
  }, []);

  return (
    <div>
      {/* <Header /> */}
      <section className="bg-background w-screen h-screen flex flex-col items-center pt-10 font-prompt px-3">
        <div className="card bg-white rounded-lg border border-gray-300 w-full max-w-lg">
          <div className="card-body p-3 sm:px-10">
            <div className="flex flex-col justify-center items-center pt-8">
              <span className="bg-green-900 text-white w-[64px] h-[64px] rounded-full flex items-center justify-center">
                {successIcon}
              </span>
              <h1 className="pt-8 text-[20px] xl:text-[32px] text-black">
                ชำระเงินเรียบร้อย !
              </h1>
            </div>
            <div className="text-[14px]">
              <SummaryDetail details={order} />
            </div>
            <div className="pb-4">
              <button
                type="button"
                className="btn btn-ghost text-white bg-blue-600  hover:bg-blue-500 hover:text-white focus:bg-blue-800 focus:text-white w-full"
              >
                เช็ครายการซ่อม
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PaymentSuccess;
