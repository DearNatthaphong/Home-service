import logo from '/public/images/house-icon.png';
import { useAuth } from '../context/authentication';
import { useNavigate } from 'react-router-dom';
import userImage from '/public/images/image-user.png';
import bellImage from '/public/images/image-bell.svg';
import {
  orderIcon,
  userIcon,
  historyIcon,
  logoutIcon
} from '../assets/icons/icon-user';

function Header() {
  const navigate = useNavigate();
  const goToLoginPage = () => {
    navigate('/login');
  };

  const goToHomePage = () => {
    navigate('/');
  };

  /* แก้จาก 2 บรรทัดให้เหลือ บรรทัดเดียว (start) */
  const { state, logout } = useAuth();
  /* แก้จาก 2 บรรทัดให้เหลือ บรรทัดเดียว (end) */

  return (
    <section className="font-prompt h-[53px] lg:h-[80px] flex justify-center lg:relative bg-white">
      <div className="flex justify-center items-center h-[53px] gap-10 lg:h-[80px]  lg:justify-start lg:absolute lg:left-[150px] 2xl:w-[1130px] 2xl:static lg:w-[1100px] left-transition duration-300">
        <button
          className="inline-flex items-center gap-[5px]"
          onClick={goToHomePage}
        >
          <img
            className="w-[26px] h-[25px] mb-1 lg:w-[32px] lg:h-[32px]"
            src={logo}
          />
          <div className="text-blue-600 text-sm font-medium lg:text-2xl">
            HomeServices
          </div>
        </button>
        <div className="items-center gap-2 justify-between flex gap-transition duration-300 w-full ">
          <div className="text-black text-sm font-normal leading-[21px] lg:text-base lg:font-medium lg:leading-normal flex items-center justify-center p-2 ">
            <p className="">บริการของเรา</p>
          </div>
          {state.user ? (
            <div className="flex items-center gap-3">
              <span>{state.user.fullName}</span>
              <div className="dropdown dropdown-bottom dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className=" m-1 rounded-full w-[32px] h-[32px] flex justify-center items-center"
                >
                  <img
                    src={userImage}
                    alt="image-user"
                    className="w-[24px] h-[24px] rounded-full "
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="bg-white dropdown-content menu rounded-box z-[1] w-[210px] shadow p-0 text-gray-800  "
                >
                  <li className="w-full">
                    <a className=" group">
                      <span className="text-gray-500 group-hover:text-gray-950 ">
                        {userIcon}
                      </span>
                      <span className="text-gray-800 group-hover:text-gray-950 ">
                        ข้อมูลผู้ใช้งาน
                      </span>
                    </a>

                    <a className="group">
                      <span className="text-gray-500 group-hover:text-gray-950 ">
                        {orderIcon}
                      </span>
                      <span className="text-gray-800 group-hover:text-gray-950 ">
                        รายการคำสั่งซ่อม
                      </span>
                    </a>

                    <a className="group">
                      <span className="text-gray-500 group-hover:text-gray-950 ">
                        {historyIcon}
                      </span>
                      <span className="text-gray-800 group-hover:text-gray-950 ">
                        ประวัติการซ่อม
                      </span>
                    </a>
                  </li>
                  <hr className="w-full" />

                  <li className="w-full ">
                    <a className="group" onClick={() => logout()}>
                      <span className="text-gray-500 group-hover:text-gray-950 ">
                        {logoutIcon}
                      </span>
                      <span className="text-gray-800 group-hover:text-gray-950 ">
                        ออกจากระบบ
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="">
                <div className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-gray-100 ">
                  <img
                    src={bellImage}
                    alt="image-bell"
                    className="w-[24px] h-[24px] rounded-full "
                  />
                </div>
              </div>
            </div>
          ) : (
            <div
              className="w-[95px] h-[37px] px-4 py-2 rounded-lg border border-blue-600 justify-start items-start gap-2.5 inline-flex
              lg:w-[120px] lg:h-10 lg:px-6 lg:py-2"
            >
              <button
                className="text-center text-blue-600 text-sm font-medium lg:text-base lg:font-medium"
                onClick={goToLoginPage}
              >
                เข้าสู่ระบบ
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Header;
