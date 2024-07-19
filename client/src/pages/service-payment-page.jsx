import React from 'react';
import Header from '../components/header';
import {
  listIcon,
  editIcon,
  cardCheckIcon,
  qrcodeIcon,
  cardIcon
} from '../assets/icons/icon-service-detail.jsx';
import { useNavigate } from 'react-router-dom';

function ServicePayment() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <>
        <section className="relative font-prompt text-[14px] bg-background w-screen flex flex-col justify-center items-centers">
          {/* background image start */}
          <div className="absolute top-0 left-0 w-full h-[168px] xl:h-[240px] bg-cover bg-center bg-[url('images/bg-payment-mobile.png')] xl:bg-[url('images/bg-payment-desktop.png')]"></div>
          {/* background image end */}
          {/* card 1 & 2 start */}
          <div className="px-3 pt-12 pb-6 xl:pt-20 xl:px-[10%] xl:pb-12 flex flex-col gap-5 xl:gap-12">
            {/* card 1 start */}
            <div className="card bg-white w-fit rounded-lg">
              <div className="card-body p-3 xl:py-6 xl:px-9">
                <span className="card-title text-sm flex items-baseline xl:text-[16px]">
                  บริการของเรา{' > '}
                  <span className="text-blue-600 text-[20px] xl:text-[32px]">
                    ล้างแอร์
                  </span>
                </span>
              </div>
            </div>
            {/* card 1 end */}
            {/* card 2 start */}
            <div className="card bg-white rounded-lg border-[1px] border-gray-300">
              <div className="card-body p-4 xl:px-[20%] py-8">
                <div className="flex items-center justify-between relative">
                  <div className="flex flex-col items-center z-10">
                    <div className="bg-blue-500 text-white rounded-full p-2">
                      {listIcon}
                    </div>
                    <span className="text-blue-500">รายการ</span>
                  </div>
                  <div className="absolute top-1/3 left-2 w-[50%] transform -translate-y-1/2 flex justify-between items-center">
                    <hr className="border-t-2 border-blue-500 w-full" />
                  </div>
                  <div className="flex flex-col items-center z-10">
                    <div className="bg-blue-500 text-white rounded-full p-2">
                      {editIcon}
                    </div>
                    <span className="text-blue-500">กรอกข้อมูลบริการ</span>
                  </div>
                  <div className="absolute top-1/3 right-2 w-[50%] transform -translate-y-1/2 flex justify-between items-center">
                    <hr className="border-t-2 border-blue-500 w-full" />
                  </div>
                  <div className="flex flex-col items-center z-10">
                    <div className="bg-white border-2 border-blue-500 text-blue-500 rounded-full p-2">
                      {cardCheckIcon}
                    </div>
                    <span className="text-blue-500">ชำระเงิน</span>
                  </div>
                </div>
              </div>
            </div>
            {/* card 2 end */}
          </div>
          {/* card 1 & 2 end */}
          {/* card 3 & 4 start */}
          <div className="flex flex-col xl:px-[10%] xl:flex-row gap-5 xl:pb-20">
            {/* card 3 start */}
            <div className="px-3 xl:px-0 xl:w-2/3">
              <div className="card bg-white rounded-lg border-[1px] border-gray-300">
                <div className="card-body px-3 py-4 xl:px-6 xl:py-8">
                  <h2 className="card-title text-[18px]">กรอกข้อมูลบริการ</h2>
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
                      <label
                        htmlFor="creditNumber"
                        className="font-semibold text-gray-900"
                      >
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
                      <label
                        htmlFor="creditNumber"
                        className="font-semibold text-gray-900"
                      >
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
                        <label
                          htmlFor="creditNumber"
                          className="font-semibold text-gray-900"
                        >
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
                        <label
                          htmlFor="creditNumber"
                          className="font-semibold text-gray-900"
                        >
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
                    <hr />
                    <label
                      htmlFor="promotion"
                      className="mt-6 font-semibold text-[16px] text-gray-900 pb-0"
                    >
                      Promotion Code
                    </label>
                    <div className="flex gap-6 items-center">
                      <div className="w-2/3 xl:w-1/2 ">
                        <input
                          className="w-full bg-transparent placeholder:text-[16px] break-words outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] focus:text-gray-950 text-gray-950 px-4 py-2.5 mt-1 rounded-lg leading-6 "
                          placeholder="กรุณากรอกโค้ดส่วนลด"
                          id="promotion"
                          name="promotion"
                          type="text"
                          // onChange={handleChange}
                          // value={data.creditNumber}
                        />
                      </div>
                      <div className="w-1/3 xl:w-1/2">
                        <button
                          type="button"
                          className="w-full btn-sm btn-ghost rounded-lg text-white bg-blue-600  hover:bg-blue-500 hover:text-white focus:bg-blue-800 focus:text-white"
                        >
                          ใช้โค้ด
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* card 3 end */}
            {/* card 4 start */}
            <div className="xl:w-1/3">
              {/* <div className="fixed bottom-0 left-0 right-0 xl:w-1/3"> */}
              <div
                tabIndex={0}
                className="collapse collapse-arrow xl:collapse-open bg-white border border-b-0 border-gray-300 rounded-b-none rounded-t-lg pb-0 mb-0 xl:hidden"
              >
                <div className="collapse-arrow xl:hidden"></div>
                <div className="collapse-title text-[16px] font-bold">
                  สรุปรายการ
                </div>
                <div className="collapse-content text-[14px] pb-0">
                  <ul className="divide-y divide-gray-100 pb-0">
                    <li className="">
                      <div className="flex justify-between gap-x-6 py-2 xl:pb-4">
                        <p className="text-black">
                          9,000 - 18,000 BTU, แบบติดผนัง
                        </p>
                        <p>2 รายการ</p>
                      </div>
                    </li>
                    <hr />
                    <li>
                      <div className="flex justify-between gap-x-6 py-2 xl:pt-4">
                        <p className="test-gray-700">วันที่</p>
                        <p className="text-black">23 เม.ย. 2022</p>
                      </div>
                      <div className="flex justify-between gap-x-6 py-2">
                        <p className="test-gray-700">เวลา</p>
                        <p className="text-black">11.00 น.</p>
                      </div>
                      <div className="flex justify-between gap-x-6 py-2 xl:pb-4 text-end">
                        <p className="test-gray-700">สถานที่</p>
                        <p className="text-black">
                          444/4 คอนโดสุภาลัย เสนานิคม <br /> จตุจักร กรุงเทพฯ
                        </p>
                      </div>
                    </li>
                    <hr />
                    <li>
                      <div className="flex justify-between gap-x-6 pt-2 xl:pt-4">
                        <p className="test-gray-700">Promotion Code</p>
                        <p className="text-red">-50.00 บาท</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                tabIndex={0}
                className="hidden xl:block collapse-open bg-white border border-b-0 border-gray-300 rounded-b-none rounded-t-lg pb-0 mb-0"
              >
                <div className="collapse-arrow xl:hidden"></div>
                <div className="collapse-title text-[16px] font-bold">
                  สรุปรายการ
                </div>
                <div className="collapse-content text-[14px] pb-0">
                  <ul className="divide-y divide-gray-100 pb-0">
                    <li>
                      <div className="flex justify-between gap-x-6 py-2 xl:pb-4">
                        <p className="text-black">
                          9,000 - 18,000 BTU, แบบติดผนัง
                        </p>
                        <p>2 รายการ</p>
                      </div>
                    </li>
                    <hr />
                    <li>
                      <div className="flex justify-between gap-x-6 py-2 xl:pt-4">
                        <p className="test-gray-700">วันที่</p>
                        <p className="text-black">23 เม.ย. 2022</p>
                      </div>
                      <div className="flex justify-between gap-x-6 py-2">
                        <p className="test-gray-700">เวลา</p>
                        <p className="text-black">11.00 น.</p>
                      </div>
                      <div className="flex justify-between gap-x-6 py-2 xl:pb-4 text-end">
                        <p className="test-gray-700">สถานที่</p>
                        <p className="text-black">
                          444/4 คอนโดสุภาลัย เสนานิคม <br /> จตุจักร กรุงเทพฯ
                        </p>
                      </div>
                    </li>
                    <hr />
                    <li>
                      <div className="flex justify-between gap-x-6 pt-2 xl:pt-4">
                        <p className="test-gray-700">Promotion Code</p>
                        <p className="text-red">-50.00 บาท</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-compact bg-white border border-t-0 border-gray-300 rounded-t-none rounded-b-lg">
                <div className="card-body flex flex-row font-bold">
                  <p className=" text-base">รวม</p>
                  <p className="text-black text-end text-base">1,600.00 บาท</p>
                </div>
              </div>
            </div>
            {/* card 4 end */}
          </div>
          {/* card 3 & 4 end */}
        </section>
        <footer className="font-prompt w-screen text-[16px] xl:px-[10%]">
          {/* <footer className="fixed bottom-0 left-0 right-0 font-prompt w-screen text-[16px] xl:px-[10%]"> */}
          <div className=" bg-white flex gap-3 p-3 xl:justify-between">
            <div className="w-1/2 xl:w-fit">
              <button
                type="button"
                className="btn btn-outline text-blue-600 border-blue-600 hover:bg-white hover:text-blue-400 hover:border-blue-400 focus:text-blue-800 focus:border-blue-800 w-full"
              >
                <span className="xl:px-4">{'< '}ย้อนกลับ</span>
              </button>
            </div>
            <div className="w-1/2 xl:w-fit">
              <button
                type="button"
                className="btn btn-ghost text-white bg-blue-600  hover:bg-blue-500 hover:text-white focus:bg-blue-800 focus:text-white w-full"
                onClick={() => {
                  navigate('/services/carts/orders/payment/success');
                }}
              >
                {' '}
                <span>ยืนยันการชำระเงิน {' >'}</span>
              </button>
            </div>
          </div>
        </footer>
      </>
    </>
  );
}

export default ServicePayment;
