import React, { useEffect, useState } from "react";
import axios from "axios";
import { UseFilter } from "../../context/filter-context";
import { useAuth } from "../../context/authentication";
import { useNavigate } from "react-router-dom";

function ServiceCard() {
  const { state } = useAuth();
  const navigate = useNavigate();

  const [servicePost, setServicePost] = useState([]);
  const { searchService } = UseFilter();
  console.log(searchService);

  const getServicePost = async () => {
    const result = await axios.get("http://localhost:4000/service");
    console.log(result.data.data);
    setServicePost(result.data.data);
  };

  useEffect(() => {
    getServicePost();
  }, [searchService]);

  return (
    <div className="w-screen h-full flex items-center justify-center pt-[25px]">
      <div className="w-full max-w-[1125px] flex-wrap gap-x-[37px] gap-y-[24px] lg:gap-y-[48px] flex items-center justify-center">
        {servicePost
          .filter((items) => {
            if (searchService === "") {
              return items;
            } else {
              return items.service_name.includes(searchService);
            }
          })
          .map((items, id) => (
            <div
              className="w-[350px] h-[350px] lg:h-[365px] bg-white rounded-[8px] border-[1px] border-gray-300"
              key={id}
            >
              <img
                src=""
                alt=""
                className="w-full h-[200px] bg-green-300 rounded-t-[8px]"
              />
              <div className="w-full h-[150px] lg:h-[165px] flex flex-col p-[15px]">
                <div className="w-full h-full justify-between flex-col flex">
                  <div className="w-full h-[82px] lg:h-[89px] flex flex-col justify-between">
                    <div className="w-[79px] h-[26px] rounded-[8px] bg-blue-100 flex items-center justify-center">
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
                          {items.service_price}
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
    </div>
  );
}

export default ServiceCard;
