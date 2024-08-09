import React, { useEffect } from 'react';
import { useCategory } from '../../context/category-context';
import { formatDate } from '../../utils/admin-promotion-date-time-format';

function AdminEditCategoryMain() {
  const { category, categoryName, setCategoryName, setOpen, setKeepId } =
    useCategory();

  return (
    <div className="w-full h-full p-[40px] flex flex-col">
      <form
        action=""
        className="w-full h-full max-h-[305px] bg-white rounded-[8px] border-[1px] border-gray-200 px-[24px] py-[40px]"
      >
        <div className="w-full max-w-[665px] h-full max-h-[45px] flex items-center justify-between">
          <span className="font-prompt font-medium text-[16px] text-gray-700 flex">
            ชื่อหมวดหมู่<p className="text-red">*</p>
          </span>
          <input
            type="text"
            className="w-full max-w-[435px] h-full border-[1px] border-gray-300 rounded-[8px] bg-transparent outline-none px-[16px] py-[10px] font-prompt font-medium text-[16px] text-black"
            // name={category.category_name}
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        <hr className="w-full border-[1px] border-gray-300 my-[40px]" />
        <div className="flex flex-col gap-[12px] w-full max-w-[390px] h-full max-h-[100px]">
          <div className="w-full max-w-[390px] h-[45px] flex items-center justify-between">
            <span className="font-prompt font-medium text-[16px] text-gray-700">
              สร้างเมื่อ
            </span>
            <span className="font-prompt text-[16px] text-gray-900">
              {/** ด้านล่างนี้ แสดง Created_at */}
              {formatDate(category.created_at)}
              {/** ด้านบนนี้ แสดง Created_at */}
            </span>
          </div>
          <div className="w-full max-w-[390px] h-[45px] flex items-center justify-between">
            <span className="font-prompt font-medium text-[16px] text-gray-700">
              แก้ไขล่าสุด
            </span>
            <span className="font-prompt text-[16px] text-gray-900">
              {/** ด้านล่างนี้แสดง Updated_at */}
              {formatDate(category.updated_at)}
              {/** ด้านบนนี้แสดง Updated_at */}
            </span>
          </div>
        </div>
      </form>
      <div className="mt-[24px] flex justify-end">
        <button
          className="flex gap-[8px]"
          onClick={() => {
            setOpen(true);
            setKeepId(category.service_category_id);
          }}
        >
          <div className="w-[24px] h-[24px] flex items-center justify-center">
            <img src="/icons/trash-icon.png" alt="" />
          </div>
          <span className="font-prompt font-semibold text-[16px] text-gray-600">
            ลบ Promotion Code
          </span>
        </button>
      </div>
    </div>
  );
}

export default AdminEditCategoryMain;
