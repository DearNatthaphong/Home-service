import logo from "../../../public/images/house-icon.png";
import { useAuth } from "../../context/authentication";

function Header() {
  const { state } = useAuth();
  return (
    <section className="font-prompt w-full h-[53px] lg:h-[80px] flex justify-center lg:relative ">
      <div className="flex justify-center items-center h-[53px] gap-10 lg:h-[80px]  lg:justify-start lg:absolute lg:left-[150px] 2xl:w-[1130px] 2xl:static lg:w-[1100px] left-transition duration-300">
        <div className="inline-flex items-center gap-[5px]">
          <img
            className="w-[26px] h-[25px] mb-1 lg:w-[32px] lg:h-[32px]"
            src={logo}
          />
          <div className="text-blue-600 text-sm font-medium lg:text-2xl">
            HomeServices
          </div>
        </div>
        <div className="inline-flex items-center gap-2 lg:gap-[400px] xl:gap-[600px] gap-transition duration-300">
          <div className="text-black text-sm font-normal leading-[21px] lg:text-base lg:font-medium lg:leading-normal  ">
            บริการของเรา
          </div>
          <div
            className="w-[95px] h-[37px] px-4 py-2 rounded-lg border border-blue-600 justify-start items-start gap-2.5 inline-flex
          lg:w-[120px] lg:h-10 lg:px-6 lg:py-2"
          >
            {state.user ? (
              <h1> {state.user.fullName} </h1>
            ) : (
              <button className="text-center text-blue-600 text-sm font-medium lg:text-base lg:font-medium">
                เข้าสู่ระบบ
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
