import React from "react";
import photo from "/public/icons/frame-icon.png";
import photo1 from "/public/icons/bin-icon.png";
import photo2 from "/public/icons/pen-icon.png";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function AdminServiceMain() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:4000/service");
        console.log(response);
        setServices(response.data.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchServices();
  }, []);
  return (
    <div className="w-full h-full p-[40px] flex justify-center">
      <div className="w-full h-full bg-white border rounded-lg">
        <div className="w-full h-[41px] bg-gray-100 flex items-center justify-between">
          <div className="flex flex-row gap-3 items-center">
            <div className="h-full w-[56px]">
              <div></div>
            </div>
            <div className="h-full px-3 ">
              <div className=" text-[#646c80] text-sm 2xl:text-base font-normal  ">
                ลำดับ
              </div>
            </div>
            <div className="h-full w-[200px] px-5">
              <div className="w-[75px] text-[#646c80] text-sm 2xl:text-base font-normal ">
                ชื่อบริการ
              </div>
            </div>
          </div>
          <div className="w-[150px] flex justify-start">
            <div className="text-[#646c80] text-sm 2xl:text-base font-normal px-3">
              หมวดหมู่
            </div>
          </div>
          <div className="flex">
            <div className="w-[240px] flex justify-start px-5">
              <div className="text-[#646c80] text-sm font-normal 2xl:text-base">
                สร้างเมื่อ
              </div>
            </div>
            <div className="w-[240px] px-5">
              <div className="text-[#646c80] text-sm font-normal 2xl:text-base">
                แก้ไขล่าสุด
              </div>
            </div>
          </div>
          <div className="w-[120px] flex px-5">
            <div className="text-[#646c80] text-sm font-normal 2xl:text-base">
              Action
            </div>
          </div>
        </div>
        {services.length === 0 ? (
          <div className="w-full h-[90px] bg-white flex items-center justify-center">
            No services available
          </div>
        ) : (
          services.map((service, index) => (
            <div
              key={service.id}
              className="w-full h-[90px] bg-white flex items-center justify-between"
            >
              <div className="flex flex-row gap-3 items-center">
                <div className="h-full">
                  <div>
                    <img
                      className="w-[56px] h-[80px]"
                      src={photo}
                      alt="service"
                    />
                  </div>
                </div>
                <div className="h-full px-3">
                  <div className="w-[37.55px] flex justify-center 2xl:text-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="h-full w-[200px] px-5">
                  <div className="2xl:text-lg">{service.service_name}</div>
                </div>
              </div>
              <div className="w-[150px] flex justify-start">
                <div
                  className={`2xl:text-lg rounded-[8px]  px-3 py-1 ${
                    service.category_name === "บริการทั่วไป"
                      ? "bg-blue-100 text-blue-800"
                      : service.category_name === "บริการห้องน้ำ"
                      ? "bg-purple-100 text-purple-900"
                      : service.category_name === "บริการห้องครัว"
                      ? "bg-green-100 text-green-900"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {service.category_name}
                </div>
              </div>
              <div className="flex">
                <div className="w-[240px] flex justify-start px-5">
                  <div className="2xl:text-lg">
                    {new Date(service.created_at).toLocaleString()}
                  </div>
                </div>
                <div className="w-[240px] px-5">
                  <div className="2xl:text-lg">
                    {new Date(service.updated_at).toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="w-[120px] flex gap-8">
                <img className="w-[24px] h-[24px]" src={photo1} alt="delete" />
                <img className="w-[24px] h-[24px]" src={photo2} alt="edit" />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
export default AdminServiceMain;
