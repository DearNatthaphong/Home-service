import React, { useEffect } from 'react';
import { useCategory } from '../../context/category-context';
import { useNavigate } from 'react-router-dom';

function AdminEditCategoryHeader() {
  const { category, updateCategory, id } = useCategory();
  const navigate = useNavigate();

  return (
    <div className="w-full h-full max-h-[80px] border-b-[1px] border-gray-300 flex items-center bg-white px-[40px] justify-between">
      <div className="gap-[14px] h-full max-h-[50px] flex items-center">
        <div className="w-[40px] h-[40px] flex items-center justify-center">
          <img src="/icons/left-icon.png" alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <span className="font-prompt text-[12px] text-gray-700">
            หมวดหมู่
          </span>
          <span className="font-prompt font-medium text-[20px] text-gray-950">
            {category?.category_name}
          </span>
        </div>
      </div>
      <div className="flex w-full max-w-[250px] h-full max-h-[45px] justify-between">
        <button
          className="w-full h-full max-w-[112px] max-h-[45px] rounded-[8px] bg-white border-[1px] border-blue-600 flex items-center justify-center"
          onClick={() => {
            navigate('/admin/category');
          }}
        >
          <span className="font-prompt font-medium text-[16px] text-blue-600">
            ยกเลิก
          </span>
        </button>
        <button
          className="w-full h-full max-w-[112px] max-h-[45px] rounded-[8px] bg-blue-600 flex items-center justify-center"
          type="submit"
          onClick={() => {
            updateCategory(id);
          }}
        >
          <span className="font-prompt font-medium text-[16px] text-white">
            ยืนยัน
          </span>
        </button>
      </div>
    </div>
  );
}

export default AdminEditCategoryHeader;
