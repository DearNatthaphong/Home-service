import React from 'react';
import { useNavigate } from 'react-router-dom';

function PaymentFooter() {
  const navigate = useNavigate();
  return (
    <>
      <footer className="font-prompt w-screen text-[16px] ">
        {/* <footer className="fixed bottom-0 left-0 right-0 font-prompt w-screen text-[16px] xl:px-[10%]"> */}
        <div
          tabIndex={0}
          className="xl:hidden collapse collapse-arrow bg-white border border-b-0 border-gray-300 rounded-b-none rounded-t-lg pb-0 mb-0"
        >
          <div className="collapse-arrow xl:hidden"></div>
          <div className="collapse-title text-[16px] font-bold text-gray-700">
            สรุปรายการ
          </div>
          <div className="collapse-content text-[14px] pb-0">
            <ul className="divide-y divide-gray-100 pb-0">
              <li>
                <div className="flex justify-between gap-x-6 py-2 xl:pb-4">
                  <p className="text-black">9,000 - 18,000 BTU, แบบติดผนัง</p>
                  <p>2 รายการ</p>
                </div>
              </li>
              <hr />
              <li>
                <div className="flex justify-between gap-x-6 py-2 xl:pt-4">
                  <p className="text-gray-700">วันที่</p>
                  <p className="text-black">23 เม.ย. 2022</p>
                </div>
                <div className="flex justify-between gap-x-6 py-2">
                  <p className="text-gray-700">เวลา</p>
                  <p className="text-black">11.00 น.</p>
                </div>
                <div className="flex justify-between gap-x-6 py-2 xl:pb-4 text-end">
                  <p className="text-gray-700">สถานที่</p>
                  <p className="text-black">
                    444/4 คอนโดสุภาลัย เสนานิคม <br /> จตุจักร กรุงเทพฯ
                  </p>
                </div>
              </li>
              <hr />
              <li>
                <div className="flex justify-between gap-x-6 pt-2 xl:pt-4">
                  <p className="text-gray-700">Promotion Code</p>
                  <p className="text-red text-end">-50.00 บาท</p>
                </div>
                <div className="flex justify-between gap-x-6 py-4">
                  <p className="text-gray-700">รวม</p>
                  <p className="text-black text-end">1,550.00 บาท</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className=" bg-white flex gap-3 p-3 xl:justify-between xl:px-[10%]">
          <div className="w-1/2 xl:w-fit">
            <button
              type="button"
              className="btn btn-outline text-blue-600 border-blue-600 hover:bg-white hover:text-blue-400 hover:border-blue-400 focus:text-blue-800 focus:border-blue-800 w-full"
            >
              <span className="xl:px-4">{'< '}ย้อนกลับ</span>
            </button>
          </div>
          <div className="w-1/2 xl:w-fit">
            {/* <button
            type="button"
            className="btn btn-ghost text-white bg-blue-600  hover:bg-blue-500 hover:text-white focus:bg-blue-800 focus:text-white w-full"
            onClick={() => {
              navigate('/services/carts/orders/payment/success');
            }}
          >
            {' '}
            <span>ยืนยันการชำระเงิน {' >'}</span>
          </button> */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default PaymentFooter;
