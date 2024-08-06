import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import photo from "/icons/arrow-icon.png";

function AdminServiceHeaderView() {
  const { id } = useParams(); // รับ ID จาก URL
  const [serviceName, setServiceName] = useState("Loading...");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServiceName = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/service/${id}`);
        const { main_service } = response.data;
        setServiceName(main_service.service_name);
      } catch (error) {
        console.error("Error fetching service name:", error);
        setServiceName("Error");
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
      <div className="flex w-full max-w-[320px] h-full max-h-[45px] justify-end">
        <button className="w-full h-full max-w-[130px] max-h-[45px] rounded-[8px] bg-blue-600 flex items-center justify-center gap-[8px] hover:bg-blue-500 active:bg-blue-800">
          <span className="font-prompt font-medium text-[16px] text-white">
            แก้ไข
          </span>
        </button>
      </div>
    </div>
  );
}

export default AdminServiceHeaderView;
