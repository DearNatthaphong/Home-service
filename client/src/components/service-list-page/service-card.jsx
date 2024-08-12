import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useFilter } from '../../context/filter-context';
import { useAuth } from '../../context/authentication';
import { useNavigate } from 'react-router-dom';

function getImageUrl(service_image) {
  // ตรวจสอบว่า service_image เป็น URL หรือชื่อไฟล์
  if (service_image.startsWith('http')) {
    // ถ้าเป็น URL เต็มรูปแบบ
    return service_image;
  } else {
    // ถ้าเป็น path ชื่อไฟล์
    return `http://localhost:4000/uploads/${service_image}`;
  }
}

function ServiceCard() {
  const { state } = useAuth();
  const navigate = useNavigate();

  const [servicePost, setServicePost] = useState([]);

  const {
    /** เอาค่าจาก input text เมื่อกดค้นหามา render */
    searchService,

    /** เอาค่าจาก select dropdown เลือก category เมื่อกดค้นหามา render */
    searchByType,

    /** เอาค่่าจาก slider เมื่อเลือก range ที่ต้องการตัวที่ 1 เมื่อกดค้นหามา render */
    searchBySlided1,
    /** เอาค่าจาก slider เมื่อเลือก range ที่ต้องการตัวที่ 2 เมื่อกดค้นหามา render */
    searchBySlided2,

    /** เอาค่า select dropdown เลือก sort เมื่อกดค้นหามา render */
    sortByType
  } = useFilter();

  const getServicePost = async () => {
    const result = await axios.get("http://localhost:4000/services");
    setServicePost(result.data.data);
  };

  const filterServices = servicePost
    .filter((items) => {
      const filterSearchText =
        searchService === '' ||
        items.service_name.includes(searchService) ||
        items.category_name.includes(searchService);
      const filterSearchType =
        searchByType === '' || items.category_name === searchByType;
      const filterSearchSlide =
        searchBySlided1 === '' ||
        (items.service_price >= searchBySlided1 &&
          items.service_price <= searchBySlided2);
      return filterSearchText && filterSearchType && filterSearchSlide;
    })
    .sort((a, b) => {
      if (sortByType === 'less2' || sortByType === 'less1') {
        return a.service_name.localeCompare(b.service_name, 'th');
      } else if (sortByType === 'more2' || sortByType === 'more1') {
        return b.service_name.localeCompare(a.service_name, 'th');
      }
    });

  useEffect(() => {
    getServicePost();
  }, []);

  const handleSelectService = (id) => {
    navigate(`/services/${id}`);
  };

  return (
    <div className="w-screen h-full flex items-center justify-center pt-[25px]">
      <div className="w-full max-w-[1125px] flex-wrap gap-x-[37px] gap-y-[24px] lg:gap-y-[48px] flex items-center justify-center">
        {filterServices.length !== 0 ? (
          filterServices.map((items, id) => (
            <div
              className="w-[350px] h-[350px] lg:h-[365px] bg-white rounded-[8px] border-[1px] border-gray-300"
              key={id}
            >
              <img
                src={getImageUrl(items.service_image)}
                alt=""
                className="w-full h-[200px] rounded-t-[8px]"
              />
              <div className="w-full h-[150px] lg:h-[165px] flex flex-col p-[15px]">
                <div className="w-full h-full justify-between flex-col flex">
                  <div className="w-full h-[82px] lg:h-[89px] flex flex-col justify-between">
                    <div className="w-full max-w-[40%] h-[26px] rounded-[8px] bg-blue-100 flex items-center justify-center">
                      <p className="text-[12px] font-prompt text-blue-800 ">
                        {items.category_name}
                      </p>
                    </div>
                    <div className="w-full h-[52px] flex flex-col justify-between">
                      <p className="font-prompt font-medium text-[18px] text-gray-950">
                        {items.service_name}
                      </p>
                      <div className="flex items-center gap-[8px]">
                        <img src="/icons/sell-icon.png" alt="" />
                        <p className="font-prompt text-[14px] text-gray-700">
                          ค่าบริการประมาณ {items.service_price} ฿
                        </p>
                      </div>
                    </div>
                  </div>
                  {state.user ? (
                    <button
                      className="w-[80px] h-[28px] flex items-center justify-center"
                      onClick={() => {
                        handleSelectService(items.service_id);
                      }}
                    >
                      <p className="font-prompt font-semibold text-[16px] text-blue-600 underline underline-offset-1">
                        เลือกบริการ
                      </p>
                    </button>
                  ) : (
                    <button
                      className="w-[80px] h-[28px] flex items-center justify-center"
                      onClick={() => {
                        navigate('/login');
                      }}
                    >
                      <p className="font-prompt font-semibold text-[16px] text-blue-600 underline underline-offset-1">
                        เลือกบริการ
                      </p>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-[10px]">
            <p className="mt-[20px] font-prompt text-[16px] text-gray-500">
              ขออภัยครับ ไม่พบการค้นหาบริการที่ท่านต้องการ
            </p>
            <p className="font-prompt text-[16px] text-gray-500">
              หากลูกค้าต้องการบริการใดๆเพิ่มเติม
            </p>
            <p className="font-prompt text-[16px] text-gray-500">
              สามารถติดต่อสอบถามได้ที่ 080-540-6357
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ServiceCard;
