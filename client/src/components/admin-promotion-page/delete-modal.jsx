import React from "react";
import { usePromotion } from "../../context/promotion-context";
import { useNavigate } from "react-router-dom";

function DeleteModal() {
  const { open, setOpen, keepId, filterPromotion, deletedPromotion } =
    usePromotion();
  const showCode = filterPromotion.find(
    (promotion) => promotion.promotion_id == keepId
  );
  const navigate = useNavigate();
  return (
    <>
      {open ? (
        <div
          className={`fixed inset-0 flex justify-center items-center transition-colors ${
            open ? "visible bg-black/75" : "invisible"
          }`}
        >
          <div className="bg-white rounded-xl shadow p-6 transition-all w-[360px] h-[270px] flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button
              className="absolute top-0 right-0 p-[12px] rounded-lg bg-white  w-[48px] h-[48px] flex items-center justify-center"
              onClick={() => setOpen(false)}
            >
              <div className="w-[24px] h-[24px] rounded-full flex items-center justify-center hover:bg-gray-50">
                <img src="/icons/exit-icon.png" alt="" />
              </div>
            </button>
            <div className="w-full max-w-[280px] h-full max-h-[198px] flex flex-col justify-between items-center">
              <div className="flex flex-col justify-center gap-[8px] w-full">
                <div className="w-full flex items-center justify-center">
                  <div className="w-[36px] h-[36px] flex items-center justify-center">
                    <img src="/icons/warning-icon.png" alt="" />
                  </div>
                </div>
                <p className="font-prompt font-medium text-[20px] text-gray-950 text-center">
                  ยืนยันการลบรายการ?
                </p>
                <p className="text-center text-gray-700 font-prompt font-light text-[16px]">
                  คุณต้องการลบรายการ '{showCode?.promotion_code ?? null}' <br />
                  ใช่หรือไม่
                </p>
              </div>
              <div className="w-full max-w-[240px] h-full max-h-[45px] flex justify-between">
                <button
                  className="w-full max-w-[112px] h-full bg-blue-600 rounded-[8px]"
                  onClick={() => {
                    deletedPromotion(keepId);
                  }}
                >
                  <span className="font-prompt font-medium text-[16px] text-white">
                    ลบรายการ
                  </span>
                </button>
                <button
                  className="w-full max-w-[112px] h-full border-[1px] border-blue-600 rounded-[8px]"
                  onClick={() => setOpen(false)}
                >
                  <span className="font-prompt font-medium text-[16px] text-blue-600">
                    ยกเลิก
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default DeleteModal;
