import React from 'react';
import { qrcodeIcon, cardIcon } from '../../assets/icons/icon-service-detail';

function HsCheckoutForm() {
  return (
    <form className="mt-3 flex flex-col" action="">
      <div className="mb-6 flex gap-3 xl:gap-6 h-[95px] xl:h-[86px]">
        <div className="w-1/2 h-full">
          <button
            type="button"
            className="group border-gray-300 hover:bg-white hover:border-blue-600 focus:bg-blue-100 focus:border-blue-600 btn btn-outline rounded-md w-full h-full"
          >
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <span className="text-gray-400 group-hover:text-blue-600 group-focus:text-blue-600">
                {qrcodeIcon}
              </span>
              <span className="text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600">
                พร้อมเพย์
              </span>
            </div>
          </button>
        </div>
        <div className="w-1/2 h-full">
          <button
            type="button"
            className="group border-gray-300 hover:bg-white hover:border-blue-600 focus:bg-blue-100 focus:border-blue-600 btn btn-outline rounded-md w-full h-full"
          >
            <div className="flex flex-col justify-center items-center gap-3 py-4">
              <span className="text-gray-400 group-hover:text-blue-600 group-focus:text-blue-600">
                {cardIcon}
              </span>
              <span className="text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600">
                บัตรเครดิต
              </span>
            </div>
          </button>
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="creditNumber" className="font-semibold text-gray-900">
          หมายเลขบัตรเครดิต
          <span className="text-rose-700">*</span>
        </label>
        <input
          className="bg-transparent placeholder:text-gray-700 outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] focus:text-gray-950 text-gray-950 w-full px-4 py-2.5 mt-1 rounded-lg"
          placeholder="กรุณากรอกหมายเลขบัตรเครดิต"
          id="creditNumber"
          name="creditNumber"
          type="text"
          // onChange={handleChange}
          // value={data.creditNumber}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="creditNumber" className="font-semibold text-gray-900">
          ชื่อบนบัตร<span className="text-rose-700">*</span>
        </label>
        <input
          className="bg-transparent placeholder:text-gray-700 outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] focus:text-gray-950 text-gray-950 w-full px-4 py-2.5 mt-1 rounded-lg"
          placeholder="กรุณากรอกชื่อบนบัตร"
          id="creditNumber"
          name="creditNumber"
          type="text"
          // onChange={handleChange}
          // value={data.creditNumber}
        />
      </div>
      <div className="mb-6 flex flex-col xl:flex-row gap-6 xl:pb-3">
        <div className="wxl:ซw-1/2">
          <label htmlFor="creditNumber" className="font-semibold text-gray-900">
            วันหมดอายุ<span className="text-rose-700">*</span>
          </label>
          <input
            className="bg-transparent placeholder:text-gray-700 outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] focus:text-gray-950 text-gray-950 w-full px-4 py-2.5 mt-1 rounded-lg"
            placeholder="MM/YY"
            id="creditNumber"
            name="creditNumber"
            type="text"
            // onChange={handleChange}
            // value={data.creditNumber}
          />
        </div>
        <div className="xl:w-1/2">
          <label htmlFor="creditNumber" className="font-semibold text-gray-900">
            รหัส CVC / CVV<span className="text-rose-700">*</span>
          </label>
          <input
            className="bg-transparent placeholder:text-gray-700 outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] focus:text-gray-950 text-gray-950 w-full px-4 py-2.5 mt-1 rounded-lg"
            placeholder="xxx"
            id="creditNumber"
            name="creditNumber"
            type="text"
            // onChange={handleChange}
            // value={data.creditNumber}
          />
        </div>
      </div>
    </form>
  );
}

export default HsCheckoutForm;
