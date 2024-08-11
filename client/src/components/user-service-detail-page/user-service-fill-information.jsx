import React, { useState, useEffect } from "react";
import { useServiceDetail } from "../../context/user-service-detail-context";

function UserServiceFillInformation() {
  const {
    provinces,
    setProvinces,
    amphures,
    setAmphures,
    tambons,
    setTambons,
    selected,
    setSelected,
    selectedName,
    setSelectedName,
    isDate,
    setIsDate,
    isTime,
    setIsTime,
    isAddress,
    setIsAddress,
    isSpecify,
    setIsSpecify,
  } = useServiceDetail();

  useEffect(() => {
    (() => {
      fetch(
        "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json"
      )
        .then((response) => response.json())
        .then((result) => {
          setProvinces(result);
        });
    })();
  }, []);

  const DropdownList = ({
    label,
    id,
    list,
    child,
    childsId = [],
    setChilds = [],
  }) => {
    const onChangeHandle = (event) => {
      setChilds.forEach((setChild) => setChild([]));
      const entries = childsId.map((child) => [child, undefined]);
      const unSelectChilds = Object.fromEntries(entries);

      const input = event.target.value;
      const dependId = input ? Number(input) : undefined;
      setSelected((prev) => ({ ...prev, ...unSelectChilds, [id]: dependId }));
      const nameList = list.find((value) => value.id === dependId)?.name_th;
      setSelectedName({ ...selectedName, [id]: nameList });
      if (!input) return;

      if (child) {
        const parent = list.find((item) => item.id === dependId);
        const { [child]: childs } = parent;
        const [setChild] = setChilds;
        setChild(childs);
      }
    };

    return (
      <>
        <label htmlFor={label}>{label}</label>
        <select
          value={selected[id]}
          onChange={onChangeHandle}
          className="bg-transparent w-full h-[44px] border-[1px] border-gray-300 rounded-[8px] px-[16px] py-[10px] focus:border-blue-600 text-black text-[16px] placeholder:text-gray-700"
        >
          <option label="โปรดเลือก ..." />
          {list &&
            list.map((item) => (
              <option
                key={item.id}
                value={item.id}
                label={`${item.name_th} - ${item.name_en}`}
              />
            ))}
        </select>
      </>
    );
  };

  return (
    <div className="xl:px-0 xl:w-2/3 h-[750px] sm:h-full w-full">
      <div className="bg-white rounded-lg border-[1px] border-gray-300 items-center h-full max-h-[779px]">
        <div className="px-3 py-4 xl:px-6">
          <h2 className="text-[18px]">กรอกข้อมูลบริการ</h2>
          <div className="w-full h-[432px] mt-[30px] flex flex-col gap-[32px] items-center">
            <div className="w-full h-full max-h-[168px] gap-[24px] sm:max-h-[72px] flex flex-col sm:flex-row justify-between">
              <div className="w-[311px] h-full flex flex-col justify-between">
                <label className="font-prompt font-medium text-[16px] text-gray-900 flex">
                  วันที่สะดวกใช้บริการ<p className="text-red">*</p>
                </label>
                <input
                  type="date"
                  className="bg-transparent w-full h-[44px] border-[1px] border-gray-300 rounded-[8px] px-[16px] py-[10px] outline-none focus:border-blue-600 text-[16px] text-black"
                  value={isDate}
                  onChange={(e) => {
                    setIsDate(e.target.value);
                  }}
                />
              </div>
              <div className="w-[311px] h-full flex flex-col justify-between">
                <label className="font-prompt font-medium text-[16px] text-gray-900 flex">
                  เวลาสะดวกใช้บริการ<p className="text-red">*</p>
                </label>
                <input
                  type="time"
                  className="bg-transparent w-full h-[44px] border-[1px] border-gray-300 rounded-[8px] px-[16px] py-[10px] outline-none focus:border-blue-600 text-[16px] text-black"
                  value={isTime}
                  onChange={(e) => {
                    setIsTime(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-full h-full gap-[24px] max-h-[168px] sm:max-h-[72px] flex flex-col sm:flex-row justify-between">
              <div className="w-[311px] h-full flex flex-col justify-between">
                <label className="font-prompt font-medium text-[16px] text-gray-900 flex">
                  ที่อยู่<p className="text-red">*</p>
                </label>
                <input
                  type="text"
                  placeholder="กรุณากรอกที่อยู่"
                  className="bg-transparent w-full h-[44px] border-[1px] border-gray-300 rounded-[8px] px-[16px] py-[10px] focus:border-blue-600 outline-none placeholder:text-[16px] placeholder:text-black text-black"
                  value={isAddress}
                  onChange={(e) => {
                    setIsAddress(e.target.value);
                  }}
                />
              </div>
              <div className="w-[311px] h-full flex flex-col justify-between">
                <label className="font-prompt font-medium text-[16px] text-gray-900 flex">
                  แขวง / ตำบล<p className="text-red">*</p>
                </label>
                <DropdownList id="tambon_id" list={tambons} />
              </div>
            </div>
            <div className="w-full h-full gap-[24px] max-h-[168px] sm:max-h-[72px] flex flex-col sm:flex-row justify-between">
              <div className="w-[311px] h-full flex flex-col justify-between">
                <label className="font-prompt font-medium text-[16px] text-gray-900 flex">
                  เขต / อำเภอ<p className="text-red">*</p>
                </label>
                <DropdownList
                  id="amphure_id"
                  list={amphures}
                  child="tambon"
                  childsId={["tambon_id"]}
                  setChilds={[setTambons]}
                />
              </div>
              <div className="w-[311px] h-full flex flex-col justify-between">
                <label className="font-prompt font-medium text-[16px] text-gray-900 flex">
                  จังหวัด<p className="text-red">*</p>
                </label>
                <DropdownList
                  id="province_id"
                  list={provinces}
                  child="amphure"
                  childsId={["amphure_id", "tambon_id"]}
                  setChilds={[setAmphures, setTambons]}
                />
              </div>
            </div>
            <div className="w-full h-[120px] flex flex-col justify-between">
              <label className="font-prompt font-medium text-[16px] text-gray-900 flex">
                ระบุข้อมูลเพิ่มเติม
              </label>
              <textarea
                name=""
                id=""
                className="h-[92px] bg-transparent border-[1px] border-gray-300 rounded-[8px] px-[16px] py-[10px] outline-none focus:border-blue-600"
                placeholder="กรุณาระบุข้อมูลเพิ่มเติม"
                value={isSpecify}
                onChange={(e) => {
                  setIsSpecify(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserServiceFillInformation;
