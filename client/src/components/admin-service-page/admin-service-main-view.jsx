import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import photo1 from "/icons/frame-icon.png";

function getImageUrl(service_image) {
  if (!service_image) {
    console.error("Invalid service_image:", service_image);
    return "";
  }

  if (service_image.startsWith("http")) {
    return service_image;
  } else {
    return `http://localhost:4000/uploads/${service_image}`;
  }
}

function AdminServiceMainView() {
  const { id } = useParams();
  const [mainService, setMainService] = useState(null);
  const [subServices, setSubServices] = useState([]);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/service/${id}`);
        const { main_service, sub_services } = response.data;
        setMainService(main_service);
        setSubServices(sub_services);
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };

    fetchServiceData();
  }, [id]);

  if (!mainService) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen p-[40px] flex justify-center">
      <div className="w-full h-full bg-white border rounded-lg flex flex-col overflow-y-scroll">
        <div className="px-8 py-6 flex items-center mt-5">
          <div className="min-w-[250px]">
            <div className="text-[#646c80] text-base font-medium 2xl:text-lg">
              ชื่อบริการ
            </div>
          </div>
          <div className="text-black text-base font-medium 2xl:text-lg">
            {mainService.service_name}
          </div>
        </div>
        <div className="px-8 py-6 flex items-center">
          <div className="min-w-[250px]">
            <div className="text-[#646c80] text-base font-medium 2xl:text-lg">
              หมวดหมู่
            </div>
          </div>
          <div className="text-black text-base font-medium 2xl:text-lg">
            {mainService.category_name}
          </div>
        </div>
        <div className="px-8 py-6 flex items-start">
          <div className="min-w-[250px]">
            <div className="text-[#646c80] text-base font-medium 2xl:text-lg ">
              รูปภาพ
            </div>
          </div>
          <div className="w-[300px] h-[150px]">
            <img
              src={getImageUrl(mainService.service_image)}
              // src={mainService.service_image}
              alt="service"
              className="w-full h-full object-cover rounded-[8px]"
            />
          </div>
        </div>
        <hr className="border-gray-300 w-[95%] mx-auto" />
        <div className="px-8 py-8 text-[#646c80] text-base font-medium 2xl:text-lg">
          รายการบริการย่อย
        </div>
        {subServices.length === 0 ? (
          <div className="px-8 py-4 text-[#646c80] text-sm flex justify-center">
            ไม่มีรายการบริการย่อย
          </div>
        ) : (
          subServices.map((service) => (
            <div key={service.id} className="px-8 flex gap-3 items-center mb-4">
              <img
                className="w-[56px] h-[56px]"
                src={photo1}
                alt="service icon"
              />
              <div className="flex flex-col gap-2">
                <div className="text-[#646c80] text-sm font-normal leading-[21px] 2xl:text-base min-w-[400px]">
                  ชื่อรายการ
                </div>
                <div className="text-black text-base font-medium 2xl:text-lg">
                  {service.service_name}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="text-[#646c80] text-sm font-normal leading-[21px] 2xl:text-base min-w-[240px]">
                  หน่วยการบริการ
                </div>
                <div className="text-black text-base font-medium 2xl:text-lg">
                  {service.service_unit}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-[#646c80] text-sm font-normal leading-[21px] 2xl:text-base min-w-[240px]">
                  ค่าบริการ / 1 หน่วย
                </div>
                <div className="text-black text-base font-medium 2xl:text-lg">
                  {service.service_price}
                </div>
              </div>
            </div>
          ))
        )}
        <hr className="border-gray-300 w-[95%] mx-auto mt-8" />
        <div className="px-8 py-3 flex items-center mt-8">
          <div className="min-w-[250px]">
            <div className="text-[#646c80] text-base font-medium 2xl:text-lg">
              สร้างเมื่อ
            </div>
          </div>
          <div>{new Date(mainService.created_at).toLocaleString()}</div>
        </div>
        <div className="px-8 py-3 flex items-center mb-10">
          <div className="min-w-[250px]">
            <div className="text-[#646c80] text-base font-medium 2xl:text-lg">
              แก้ไขล่าสุด
            </div>
          </div>
          <div>{new Date(mainService.updated_at).toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}

export default AdminServiceMainView;
