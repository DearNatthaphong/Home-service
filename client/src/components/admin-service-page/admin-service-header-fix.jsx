import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import photo from "/icons/arrow-icon.png";

function AdminServiceHeaderFix({ onConfirm }) {
  const { id } = useParams(); // รับ ID จาก URL
  const [serviceName, setServiceName] = useState("Loading...");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServiceName = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/service/${id}`);
        // ตรวจสอบโครงสร้างของข้อมูลที่ได้รับ
        console.log("Response data:", response.data);

        // ตรวจสอบว่า `main_service` และ `service_name` มีอยู่ในข้อมูลหรือไม่
        if (
          response.data &&
          response.data.main_service &&
          response.data.main_service.service_name
        ) {
          setServiceName(response.data.main_service.service_name);
        } else {
          setServiceName("Service name not found");
        }
      } catch (error) {
        console.error("Error fetching service name:", error);
        setServiceName("Error loading service name");
      }
    };

    fetchServiceName();
  }, [id]);

  const goToServicePage = () => {
    navigate("/admin/service");
  };

  return (
    <div className="w-full h-full min-h-[80px] max-h-[80px] border-b-[1px] border-gray-300 flex items-center bg-white px-[40px] justify-between flex-shrink: 0">
      <div className="flex gap-5">
        <button onClick={goToServicePage}>
          <img className="w-[40px] h-[40px]" src={photo} alt="goback" />
        </button>
        <div className="flex flex-col">
          <span className="text-[#646c80] text-sm font-normal">บริการ</span>
          <span className="text-[20px] font-medium text-black">
            {serviceName}
          </span>
        </div>
      </div>
      <div className="flex w-full max-w-[320px] h-full max-h-[45px] justify-around">
        <button
          className="w-full h-full max-w-[130px] max-h-[45px] rounded-[8px] bg-white flex items-center justify-center gap-[8px] hover:bg-gray-100 active:bg-gray-600 border border-blue-600"
          onClick={goToServicePage}
        >
          <span className="font-prompt font-medium text-[16px] text-blue-600">
            ยกเลิก
          </span>
        </button>
        <button
          className="w-full h-full max-w-[130px] max-h-[45px] rounded-[8px] bg-blue-600 flex items-center justify-center gap-[8px] hover:bg-blue-500 active:bg-blue-800"
          onClick={onConfirm}
        >
          <span className="font-prompt font-medium text-[16px] text-white">
            ยืนยัน
          </span>
        </button>
      </div>
    </div>
  );
}

export default AdminServiceHeaderFix;
