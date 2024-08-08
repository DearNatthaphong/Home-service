import React from "react";

function AdminCategoryMain() {
  return (
    <div className="w-full h-full p-[40px] flex justify-center relative">
      <div className="w-full h-full bg-white rounded-[8px] border-collapse border-[1px] border-gray-200 overflow-auto">
        <div className="overflow-auto w-full h-full max-h-[390px] 2xl:max-h-[750px]">
          <table className="table table-pin-rows table-pin-cols">
            <thead className="w-full h-[41px]">
              <tr className="font-prompt text-[14px] text-gray-700 border-gray-200">
                <td className="w-[56px]"></td>
                <td className="px-[24px] py-[10px]">ลำดับ</td>
                <td className="px-[24px] py-[10px]">ชื่อหมวดหมู่</td>
                <td className="px-[24px] py-[10px]">สร้างเมื่อ</td>
                <td className="px-[24px] py-[10px]">แก้ไขล่าสุด</td>
                <td className="px-[24px] py-[10px]">Action</td>
              </tr>
            </thead>

            {/** ด้านล่างนี้เป็นยกตัวอย่าง filter ที่ผมทำขึ้นครับ */}

            {/* {filterPromotion.length !== 0 ? (
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
                        {formatDate(items.created_at)}
                      </td>
                      <td className="font-prompt text-[16px] font-light text-black px-[24px] pt-[10px]">
                        {formatExpiryDate(items.expiry_date)}{" "}
                        {formatExpiryTime(items.expiry_time)}
                      </td>
                      <td className="flex gap-[10px] w-full h-full mt-[20px]">
                        <button
                          className="w-[24px] h-[24px] flex items-center justify-center"
                          onClick={() => {
                            setOpen(true);
                            setKeepId(items.promotion_id);
                          }}
                        >
                          <img src="/icons/bin-icon.png" alt="" />
                        </button>
                        <button
                          className="w-[24px] h-[24px] flex items-center justify-center"
                          onClick={() => {
                            navigate(`edit-promotion/${items.promotion_id}`);
                          }}
                        >
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
                  ไม่พบหมวดหมู่ที่ค้นหา
                </tr>
              </tbody>
            )} */}

            {/** ด้านบนนี้เป็นยกตัวอย่าง filter ที่ผมทำขึ้นครับ */}
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminCategoryMain;
