import React from 'react';
import { useCategory } from '../../context/category-context';
import { formatDate } from '../../utils/admin-promotion-date-time-format';

function AdminViewCategoryMain() {
  const { category } = useCategory();

  return (
    <div className="w-full h-full p-[40px] flex flex-col">
      <form
        action=""
        className="w-full h-full max-h-[305px] bg-white rounded-[8px] border-[1px] border-gray-200 px-[24px] py-[40px]"
      >
        <div className="flex items-center">
          <p className="font-prompt font-medium text-[16px] text-gray-700 w-full max-w-[205px] h-full max-h-[24px] mr-[24px]">
            ชื่อหมวดหมุ่
          </p>
          <span className="font-prompt text-[16px] text-black">
            {category.category_name}
          </span>
        </div>
        <hr className="w-full border-[1px] border-gray-300 my-[40px]" />
        <div className="flex flex-col gap-[12px] w-full max-w-[390px] h-full max-h-[100px]">
          <div className="w-full max-w-[390px] h-[45px] flex items-center justify-between">
            <span className="font-prompt font-medium text-[16px] text-gray-700">
              สร้างเมื่อ
            </span>
            <span className="font-prompt text-[16px] text-gray-900">
              {formatDate(category.created_at)}
            </span>
          </div>
          <div className="w-full max-w-[390px] h-[45px] flex items-center justify-between">
            <span className="font-prompt font-medium text-[16px] text-gray-700">
              แก้ไขล่าสุด
            </span>
            <span className="font-prompt text-[16px] text-gray-900">
              {formatDate(category.updated_at)}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdminViewCategoryMain;
