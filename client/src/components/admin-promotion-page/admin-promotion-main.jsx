import React from "react";
import { usePromotion } from "../../context/promotion-context";
function AdminPromotionMain() {
  const { isAllPromotion, isSearchPromotion } = usePromotion();

  const filterPromotion = isAllPromotion.filter((items) => {
    const filterSearchPromotion =
      isSearchPromotion === "" ||
      items.promotion_code.includes(isSearchPromotion.toUpperCase());
    return filterSearchPromotion;
  });

  return (
    <div className="w-full h-full p-[40px] flex justify-center">
      <div className="w-full h-full bg-white rounded-[8px] border-collapse border-[1px] border-gray-200 overflow-auto">
        <div className="overflow-auto w-full h-full max-h-[390px] 2xl:max-h-[750px]">
          <table className="table table-pin-rows table-pin-cols">
            <thead className="w-full h-[41px]">
              <tr className="font-prompt text-[14px] text-gray-700 border-gray-200">
                <td className="px-[24px] py-[10px]">Promotion Code</td>
                <td className="px-[24px] py-[10px]">ประเภท</td>
                <td className="px-[24px] py-[10px]">โควต้าการใช้(ครั้ง)</td>
                <td className="px-[24px] py-[10px]">ราคาที่ลด</td>
                <td className="px-[24px] py-[10px]">สร้างเมื่อ</td>
                <td className="px-[24px] py-[10px]">วันหมดอายุ</td>
                <td className="px-[24px] py-[10px]">Action</td>
              </tr>
            </thead>
            {filterPromotion.length !== 0 ? (
              filterPromotion.map((items, id) => {
                return (
                  <tbody key={id}>
                    <tr className="w-full h-[90px] border-gray-200 ">
                      <td className="font-prompt text-[16px] font-light text-black px-[24px] pt-[10px]">
                        {items.promotion_code}
                      </td>
                      <td className="font-prompt text-[16px] font-light text-black px-[24px] pt-[10px]">
                        {items.discount_type[0].toUpperCase() +
                          items.discount_type.slice(1)}
                      </td>
                      <td className="font-prompt text-[16px] font-light text-black px-[24px] pt-[10px]">
                        <span>0</span>
                        <span className="mx-[2px]">/</span>
                        {items.usage_limit}
                      </td>
                      <td className="font-prompt text-[16px] font-light text-red px-[24px] pt-[10px]">
                        <span className="mr-[2px]">-</span>
                        {items.discount}
                        {items.discount_type === "fixed" ? (
                          <span className="ml-[2px]">฿</span>
                        ) : (
                          <span className="ml-[2px]">%</span>
                        )}
                      </td>
                      <td className="font-prompt text-[16px] font-light text-black px-[24px] pt-[10px]">
                        {items.created_at.slice(0, 10)}{" "}
                        {items.created_at.slice(11, 19)}
                      </td>
                      <td className="font-prompt text-[16px] font-light text-black px-[24px] pt-[10px]">
                        {items.expiry_date.slice(0, 10)} {items.expiry_time}
                      </td>
                      <td className="flex gap-[10px] w-full h-full mt-[20px]">
                        <button className="w-[24px] h-[24px] flex items-center justify-center">
                          <img src="/icons/bin-icon.png" alt="" />
                        </button>
                        <button className="w-[24px] h-[24px] flex items-center justify-center">
                          <img src="/icons/modify-icon.png" alt="" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })
            ) : (
              <tbody>
                <tr className="w-full h-[50px] flex items-center font-prompt text-[16px] font-medium text-black px-[24px] pt-[10px] border-none">
                  ไม่พบ Promotion ที่ค้นหา
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminPromotionMain;
