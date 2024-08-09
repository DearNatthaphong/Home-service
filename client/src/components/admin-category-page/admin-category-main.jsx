import { useNavigate } from 'react-router-dom';
import { useCategory } from '../../context/category-context';
import { formatDate } from '../../utils/admin-promotion-date-time-format';
import photo from '/icons/frame-icon.png';

function AdminCategoryMain() {
  const navigate = useNavigate();
  const { filter, setKeepId, setOpen } = useCategory();

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
            <tbody>
              {filter.length > 0 ? (
                filter.map((category, index) => (
                  <tr
                    key={category.service_category_id}
                    className="w-full h-[90px] border-gray-200"
                  >
                    <td className="font-prompt text-[16px] font-light text-gray-300 px-[24px] pt-[10px]">
                      <div className="h-full">
                        <div className="w-[56px] h-[80px]">
                          <img
                            className="w-full h-full"
                            src={photo}
                            alt="dot"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="font-prompt text-[16px] font-light text-black px-[24px] pt-[10px]">
                      {index + 1}
                    </td>
                    <td className="font-prompt text-[16px] font-light text-black px-[24px] pt-[10px]">
                      {category.category_name}
                    </td>
                    <td className="font-prompt text-[16px] font-light text-black px-[24px] pt-[10px]">
                      {formatDate(category.created_at)}
                    </td>
                    <td className="font-prompt text-[16px] font-light text-black px-[24px] pt-[10px]">
                      {formatDate(category.updated_at)}
                    </td>
                    <td className="flex gap-[10px] w-full h-full mt-[20px]">
                      <button
                        className="w-[24px] h-[24px] flex items-center justify-center"
                        onClick={() => {
                          setOpen(true);
                          setKeepId(category.service_category_id);
                        }}
                      >
                        <img src="/icons/bin-icon.png" alt="Delete" />
                      </button>
                      <button
                        className="w-[24px] h-[24px] flex items-center justify-center"
                        onClick={() => {
                          navigate(
                            `/admin/category/edit-category/${category.service_category_id}`
                          );
                        }}
                      >
                        <img src="/icons/modify-icon.png" alt="View" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="text-center py-[20px] font-prompt text-[16px] font-light text-black"
                  >
                    ไม่พบหมวดหมู่ใดๆ
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminCategoryMain;

{
  /** ด้านล่างนี้เป็นยกตัวอย่าง filter ที่ผมทำขึ้นครับ */
}
{
  /* {filterPromotion.length !== 0 ? (
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
            )} */
}
{
  /** ด้านบนนี้เป็นยกตัวอย่าง filter ที่ผมทำขึ้นครับ */
}
