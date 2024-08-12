import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/authentication";
import { useNavigate } from "react-router-dom";

function LandingService() {
  const [isShowServices, setIsShowServices] = useState([]);
  const { state } = useAuth();
  const navigate = useNavigate();

  const getSomeServices = async () => {
    const result = await axios.get("http://localhost:4000/service/limit3");
    setIsShowServices(result.data.data);
  };

  useEffect(() => {
    getSomeServices();
  }, []);

  function getImageUrl(service_image) {
    // ตรวจสอบว่า service_image เป็น URL หรือชื่อไฟล์
    if (service_image.startsWith("http")) {
      // ถ้าเป็น URL เต็มรูปแบบ
      return service_image;
    } else {
      // ถ้าเป็น path ชื่อไฟล์
      return `http://localhost:4000/uploads/${service_image}`;
    }
  }

  return (
    <div className="h-[1316px] md:h-[790px] bg-background px-[16px] pt-[40px] md:pt-[78px] pb-[56px] flex items-center justify-center">
      <div className="w-full max-w-[345px] md:max-w-[1095px] h-full flex flex-col justify-center items-center">
        <p className="font-prompt font-medium text-[20px] text-blue-950 text-center md:text-[32px]">
          บริการยอดฮิตของเรา
        </p>
        <div className="w-full h-full max-h-[1098px] md:max-h-[365px] flex flex-col md:flex-row justify-between mt-[24px] md:mt-[42px]">
          {isShowServices.map((items, id) => (
            <div
              className="w-full max-w-[349px] h-full max-h-[350px] md:max-h-[365px] bg-white rounded-[8px] border-[1px] border-gray-300"
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
                        navigate("/demo");
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
                        navigate("/login");
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
          ))}
        </div>
        <button
          className="w-[155px] h-[44px] mt-[24px] lg:mt-[64px] bg-blue-600 rounded-[8px] hover:bg-blue-500 active:bg-blue-800"
          onClick={() => navigate("/servicelist")}
        >
          <span className="font-prompt font-medium text-[16px] text-white">
            ดูบริการทั้งหมด
          </span>
        </button>
      </div>
    </div>
  );
}

export default LandingService;
