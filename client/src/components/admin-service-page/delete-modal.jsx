import React from "react";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-lg w-1/3">
        <h2 className="text-lg font-semibold">ยืนยันการลบ</h2>
        <p className="mt-2">คุณแน่ใจหรือไม่ว่าต้องการลบรายการนี้?</p>
        <div className="mt-4 flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={onConfirm}
          >
            ลบ
          </button>
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
            ยกเลิก
          </button>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-50"></div>
    </div>
  );
};

export default ConfirmationModal;
