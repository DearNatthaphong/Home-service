import { userIcon } from "../../../public/icons/icon-user-2";
import photo2 from "../../../public/images/listpad-icon.svg";
import photo3 from "../../../public/images/clock-icon.svg";
function Orderlist() {
  return (
    <section className="font-prompt flex justify-center">
      <div>
        <div className="w-[343px]">
          <div className="py-2">บัญชีผู้ใช้</div>
          <hr />
          <div className="flex py-2 justify-between px-2 ">
            <div className="group cursor-pointer flex items-center ">
              <div className="group-hover:text-blue-600 transition-colors duration-200 text-gray-500">
                {userIcon}
              </div>

              <span className=" group-hover:text-blue-600 transition-colors duration-200">
                ข้อมูลผู้ใช้งาน
              </span>
            </div>
            <div className="group cursor-pointer flex">
              <img src={photo2} />
              รายการคำสั่งซ่อม
            </div>
            <div className="group cursor-pointer flex">
              <img src={photo3} />
              ประวัติการซ่อม
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Orderlist;
