import React from 'react';
import Header from '../components/header';
import { successIcon } from '../assets/icons/icon-service-detail';

function PaymentSuccess() {
  return (
    <div>
      <Header />
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
              <ul role="list" clasName="divide-y divide-gray-100 pb-0 ">
                <li class="">
                  <div className="flex justify-between gap-x-6 py-2 sm:py-4">
                    <p className="text-black">9,000 - 18,000 BTU, แบบติดผนัง</p>
                    <p className="text-end">2 รายการ</p>
                  </div>
                </li>
                <hr />
                <li>
                  <div className="flex justify-between gap-x-6 py-2 sm:pt-6">
                    <p className="test-gray-700">วันที่</p>
                    <p className="text-black text-end">23 เม.ย. 2022</p>
                  </div>
                  <div className="flex justify-between gap-x-6 py-2 ">
                    <p className="test-gray-700">เวลา</p>
                    <p className="text-black text-end">11.00 น.</p>
                  </div>
                  <div className="flex justify-between gap-x-6 py-2 sm:pb-6">
                    <p className="test-gray-700">สถานที่</p>
                    <p className="text-black text-end">
                      444/4 คอนโดสุภาลัย เสนานิคม <br /> จตุจักร กรุงเทพฯ
                    </p>
                  </div>
                </li>
                <hr />
                <li>
                  <div className="flex justify-between gap-x-6 py-4">
                    <p className="test-gray-700">รวม</p>
                    <p className="text-black text-end">1,550.00 บาท</p>
                  </div>
                </li>
              </ul>
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
