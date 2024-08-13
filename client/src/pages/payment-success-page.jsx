import React, { useEffect, useState } from 'react';
import { successIcon } from '../assets/icons/icon-service-detail';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import SummaryDetail from '../components/payment/summary-detail';
import SummaryPrice from '../components/payment/summary-price';
import ServiceHeader from '../components/service-list-page/service-header';
import { usePayment } from '../context/payment-context';

function PaymentSuccess() {
  const navigate = useNavigate();
  // const [order, setOrder] = useState({});
  // const { id } = useParams();

  // const getOrder = async () => {
  //   const result = await axios.get(
  //     `http://localhost:4000/payment/orders/${id}`
  //   );
  //   setOrder(result.data);
  // };

  // useEffect(() => {
  //   getOrder();
  // }, []);

  const { order } = usePayment();

  return (
    <div className="w-screen min-h-screen font-prompt text-sm bg-background">
      <ServiceHeader />
      <section className="w-full h-full mt-[53px] flex flex-col items-center pt-10 px-3 ">
        <div className="card w-full max-w-[542px] bg-white rounded-lg border border-gray-300 ">
          <div className="card-body p-3 sm:px-10">
            <div className="flex flex-col justify-center items-center pt-8">
              <span className="bg-green-900 text-white w-[64px] h-[64px] rounded-full flex items-center justify-center">
                {successIcon}
              </span>
              <h1 className="pt-8 text-[20px] md:text-[32px] text-black">
                ชำระเงินเรียบร้อย !
              </h1>
            </div>
            <div className="text-[14px] mt-8">
              <ul className="divide-y divide-gray-100 pb-0">
                <SummaryDetail details={order} />
                <SummaryPrice details={order} />
              </ul>
            </div>
            <div className="pb-4">
              <button
                type="button"
                onClick={() => navigate('/orderlist')}
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
