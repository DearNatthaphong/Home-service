import React from 'react';
import { useCategory } from '../../context/category-context';

function AdminAddCategoryMain() {
  const { categoryName, setCategoryName } = useCategory();

  return (
    <div className="w-full h-full p-[40px] flex">
      <form
        action=""
        className="w-full h-full max-h-[125px] bg-white rounded-[8px] border-[1px] border-gray-200 px-[24px] py-[40px]"
      >
        <div className="w-full max-w-[665px] h-full flex items-center justify-between">
          <span className="font-prompt font-medium text-[16px] text-gray-700 flex">
            ชื่อหมวดหมู่<p className="text-red">*</p>
          </span>
          <input
            type="text"
            className="w-full max-w-[435px] h-full border-[1px] border-gray-300 rounded-[8px] bg-transparent outline-none px-[16px] py-[10px] font-prompt font-medium text-[16px] text-black"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default AdminAddCategoryMain;
