import photo1 from "../../../public/images/image-hero.png";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate();
  const goToServiceList = () => {
    navigate("/servicelist");
  };
  return (
    <section className="font-prompt ">
      <div className="w-full h-[704px] sm:h-[540px] bg-blue-100 flex flex-col gap-5  px-4 py-12 justify-start items-center h-transition duration-200 relative lg:relative ">
        <div className=" max-w-[1440px] lg:absolute lg:left-[150px] 2xl:w-[1130px] 2xl:static w-transition duration-200">
          <div className="flex flex-col gap-3 ">
            <div className=" text-blue-700 text-[40px] font-semibold leading-[50px] md:text-[50px] md:leading-[60px] lg:text-[64px] lg:font-bold lg:leading-[96px]">
              เรื่องบ้าน...ให้เราช่วยดูแลคุณ
            </div>
            <div className=" text-black text-xl font-medium leading-[30px] md:text-[30px] lg:text-[42px] lg:font-semibold">
              “สะดวก ราคาคุ้มค่า เชื่อถือได้“
            </div>
          </div>
          <div className=" text-gray-600 text-lg font-medium leading-[27px] py-5 ]">
            ซ่อมเครื่องใช้ไฟฟ้า ซ่อมแอร์ ทำความสะอาดบ้าน <br />
            โดยพนักงานแม่บ้าน และช่างมืออาชีพ
          </div>
          <div className="px-8 py-3 bg-blue-600 rounded-lg w-[200px] text-center text-white text-xl font-medium leading-[30px] z-10 relative">
            <button className=" z-20" onClick={goToServiceList}>
              เช็คราคาบริการ
            </button>
          </div>
        </div>
        <div className=" w-full flex justify-center absolute bottom-0 sm:left-52  lg:left-[350px] z-0">
          <img
            className="w-[327px] sm:w-[380px] md:w-[420px] lg:w-[520px] w-transition duration-150"
            src={photo1}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
