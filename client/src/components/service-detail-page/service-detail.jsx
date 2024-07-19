import React, { useState, useEffect } from "react";
import airImage from "../../../public/images/image-air.png";
import { useNavigate } from "react-router-dom";

function ServiceDetail() {
  const [units1, setUnits1] = useState(0);
  const [units2, setUnits2] = useState(0);
  const [units3, setUnits3] = useState(0);
  const [units4, setUnits4] = useState(0);
  const [total, setTotal] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const goToServiceDetail = () => {
    navigate("/servicedetail");
  };

  const goToServiceInform = () => {
    navigate("/service/imformation");
  };

  const handleIncrease = (setUnits, units) => {
    setUnits(units + 1);
  };

  const handleDecrease = (setUnits, units) => {
    if (units > 0) {
      setUnits(units - 1);
    }
  };
  
  useEffect(() => {
    const totalAmount = (units1 + units2 + units3 + units4) * 800;
    setTotal(totalAmount);
  }, [units1, units2, units3, units4]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <section className="relative text-[14px] font-prompt bg-gray-100 w-screen flex flex-col justify-center">
      <div className="absolute top-0 left-0">
        <img className="w-full" src={airImage} alt="air" />
      </div>
      <div className="px-3 pt-20 pb-6 flex flex-col gap-3">
        <div className="card bg-white w-fit rounded-lg border border-gray-300 lg:ml-36">
          <div className="card-body p-4">
            <p className="card-title text-sm flex items-baseline">
              บริการของเรา{" > "}
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
          <div>
            <div className="card-body p-3 border border-gray-300 rounded-lg">
              <p className="card text-[18px] flex text-gray-700 mb-2">
                เลือกรายการบริการล้างแอร์
              </p>
              <div className="text-black text-[16px]">
                {[units1, units2, units3, units4].map((units, index) => (
                  <div key={index}>
                    <div className="flex justify-between mt-3">
                      <div className="w-1/2">
                        9,000 - 18,000 BTU, แบบติดผนัง
                        <div className="text-gray-500">800.00 ฿ / เครื่อง</div>
                      </div>
                      <div className="h-fit">
                        <div className="flex justify-between">
                          <button
                            className="btn btn-sm bg-white border border-blue-600"
                            onClick={() =>
                              handleDecrease(
                                [setUnits1, setUnits2, setUnits3, setUnits4][
                                  index
                                ],
                                units
                              )
                            }
                          >
                            <div className="text-blue-600">-</div>
                          </button>
                          <div className="justify-center items-center flex ml-3 mr-3">
                            {units}
                          </div>
                          <button
                            className="btn btn-sm bg-white border border-blue-600"
                            onClick={() =>
                              handleIncrease(
                                [setUnits1, setUnits2, setUnits3, setUnits4][
                                  index
                                ],
                                units
                              )
                            }
                          >
                            <div className="text-blue-600 ">+</div>
                          </button>
                        </div>
                      </div>
                    </div>
                    {index < 3 && <hr className="w-full mt-3" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer flex flex-col fixed bottom-14 ">
          <div className="flex flex-col lg:ml-[980px] border border-gray-500 rounded-lg bg-red p-3 text-gray-700 text-[16px]">
            <div className="footer-body mb-2 cursor-pointer w-[343px]" onClick={toggleDropdown}>
              สรุปรายการ
            </div>
            {isDropdownOpen && (
              <div className="mt-2 ">
                <div className="mb-2 justify-between text-black">
                  9,000 - 18,000 BTU, แบบติดผนัง {units1 + units2 + units3 + units4} รายการ
                </div>
                <hr className="w-full mb-2" />
              </div>
            )}
            <div className="mb-2">รวม {total} ฿</div>
          </div>
        </div>
        <div className="w-screen">
          <div className="flex justify-around items-center bg-white h-[72px] fixed bottom-0 w-full">
            <button className="w-[164px] bg-white btn btn-sm border border-blue-600 text-blue-600 lg:ml-[150px]">
              {" < "}ย้อนกลับ{" "}
            </button>
            <button onClick={goToServiceInform} className="w-[164px] bg-white btn btn-sm border border-blue-600 text-blue-600 lg:mr-[200px]">
              ดำเนินการต่อ{" > "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetail;
