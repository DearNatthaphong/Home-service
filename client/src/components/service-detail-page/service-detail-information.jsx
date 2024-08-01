import React, { useState, useEffect } from 'react';
import airImage from '../../../public/images/image-air.png';
import { useNavigate, useParams } from 'react-router-dom';
import { usePayment } from '../../context/payment-context';

function ServiceInformation() {
  const { id } = useParams();
  const { handleClickToPayment } = usePayment();

  const handleClick = () => {
    handleClickToPayment(id);
  };

  const [formData, setFormData] = useState({
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const navigate = useNavigate();
  const goToServiceDetail = () => {
    navigate('/servicedetail');
  };

  return (
    <section className="relative font-prompt bg-gray-100 w-screen flex flex-col justify-center">
      <div className="absolute top-0 left-0">
        <img className="w-full" src={airImage} alt="air" />
      </div>
      <div className="px-3 pt-20 pb-6 flex flex-col gap-3">
        <div className="card bg-white w-fit rounded-lg border border-gray-300 lg:ml-36">
          <div className="card-body p-4">
            <p className="card-title text-sm flex items-baseline">
              บริการของเรา{' > '}
              <span className="text-blue-600">ล้างแอร์</span>
            </p>
          </div>
        </div>
        <div className="card bg-white rounded-lg border border-gray-300 lg:ml-36 lg:mr-36 lg:w-[1190px]">
          <div className="card-body">
            <div className="flex"></div>
          </div>
        </div>
        <div className="card bg-white rounded-lg lg:ml-36 lg:mr-[550px]">
          <div className="card-body p-3 border border-gray-300 rounded-lg">
            <div className=" p-6 bg-white rounded-lg shadow-md text-[16px] ">
              <h2 className="text-xl font-bold mb-6 text-gray-700">
                กรอกข้อมูลบริการ
              </h2>
              <form>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="mb-4">
                    <label className="block text-black">
                      วันที่สะดวกใช้บริการ
                      <span className="text-rose-700">*</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] text-gray-700 placeholder-gray-700"
                      placeholder="กรุณาเลือกวันที่"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-black">
                      เวลาที่สะดวกใช้บริการ
                      <span className="text-rose-700">*</span>
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] text-gray-700 placeholder-gray-700"
                      placeholder="กรุณาเลือกเวลา"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-black">
                      ที่อยู่<span className="text-rose-700">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] text-gray-700 placeholder-gray-700"
                      placeholder="กรุณากรอกที่อยู่"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-black">
                      แขวง / ตำบล<span className="text-rose-700">*</span>
                    </label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] text-gray-700 placeholder-gray-700"
                      placeholder="เลือกแขวง / ตำบล"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-black">
                      เขต / อำเภอ<span className="text-rose-700">*</span>
                    </label>
                    <input
                      type="text"
                      name="subdistrict"
                      value={formData.subdistrict}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] text-gray-700 placeholder-gray-700"
                      placeholder="เลือกเขต / อำเภอ"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-black">
                      จังหวัด<span className="text-rose-700">*</span>
                    </label>
                    <input
                      type="text"
                      name="province"
                      value={formData.province}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] text-gray-700 placeholder-gray-700"
                      placeholder="เลือกจังหวัด"
                    />
                  </div>
                  <div className="mb-4 lg:col-span-2">
                    <label className="block text-black">
                      ระบุข้อมูลเพิ่มเติม
                    </label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] text-gray-700 placeholder-gray-700"
                      placeholder="กรุณาระบุข้อมูลเพิ่มเติม"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-screen">
          <div className="flex justify-around items-center bg-white h-[72px] fixed bottom-0 w-full">
            <button
              onClick={goToServiceDetail}
              className="w-[164px] bg-white btn btn-sm border border-blue-600 text-blue-600 lg:ml-[150px]"
            >
              {' < '}ย้อนกลับ{' '}
            </button>
            <button
              onClick={handleClick}
              className="w-[164px] bg-white btn btn-sm border border-blue-600 text-blue-600 lg:mr-[200px]"
            >
              ดำเนินการต่อ{' > '}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceInformation;
