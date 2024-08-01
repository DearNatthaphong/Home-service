import {
  listIcon,
  editIcon,
  cardCheckIcon
} from '../../assets/icons/icon-service-detail';

function CardProcess() {
  return (
    <div className="card bg-white rounded-lg border-[1px] border-gray-300">
      <div className="card-body p-4 xl:px-[20%] py-8">
        <div className="flex items-center justify-between relative">
          <div className="flex flex-col items-center z-10">
            <div className="bg-blue-500 text-white rounded-full p-2">
              {listIcon}
            </div>
            <span className="text-blue-500">รายการ</span>
          </div>
          <div className="absolute top-1/3 left-2 w-[50%] transform -translate-y-1/2 flex justify-between items-center">
            <hr className="border-t-2 border-blue-500 w-full" />
          </div>
          <div className="flex flex-col items-center z-10">
            <div className="bg-blue-500 text-white rounded-full p-2">
              {editIcon}
            </div>
            <span className="text-blue-500">กรอกข้อมูลบริการ</span>
          </div>
          <div className="absolute top-1/3 right-2 w-[50%] transform -translate-y-1/2 flex justify-between items-center">
            <hr className="border-t-2 border-blue-500 w-full" />
          </div>
          <div className="flex flex-col items-center z-10">
            <div className="bg-white border-2 border-blue-500 text-blue-500 rounded-full p-2">
              {cardCheckIcon}
            </div>
            <span className="text-blue-500">ชำระเงิน</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProcess;
