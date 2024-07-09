import photo from "../../../public/images/manpointhing.png";
function Hero() {
  return (
    <div className="w-[375px] h-[704px] px-4 py-14 bg-indigo-50 justify-start items-start gap-[319px] inline-flex lg:w-[1440px] lg:h-[540px] lg:relative">
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex lg:absolute lg:left-[162px] lg:top-[78px]">
        <div className="self-stretch h-[146px] flex-col justify-start items-start gap-4 flex lg:top-[0]">
          <div className="self-stretch text-blue-700 text-[40px] font-semibold font-['Prompt'] leading-[50px] lg:text-[64px] lg:leading-[96px]">
            เรื่องบ้าน...ให้เราช่วยดูแลคุณ
          </div>
          <div className="self-stretch text-black text-xl font-medium font-['Prompt'] leading-[30px] lg:text-[42px]">
            “สะดวก ราคาคุ้มค่า เชื่อถือได้“
          </div>
        </div>
        <div className="self-stretch text-gray-500 text-lg font-medium font-['Prompt'] leading-[27px] lg:w-[515px] lg:text-2xl lg:top-[277px]">
          ซ่อมเครื่องใช้ไฟฟ้า ซ่อมแอร์ ทำความสะอาดบ้าน <br />
          โดยพนักงานแม่บ้าน และช่างมืออาชีพ
        </div>
        <div className="px-8 py-3 bg-blue-600 rounded-lg justify-start items-start gap-2.5 inline-flex lg:absolute lg:left-[162px] lg:top-[396px]">
          <div className="text-center text-white text-xl font-medium font-['Prompt'] leading-[30px]">
            <button>เช็คราคาบริการ</button>
          </div>
        </div>
      </div>
      <img
        className="w-[327px] h-[311px] left-[78px] top-[393px] absolute lg:w-[520px] lg:h-[490px] lg:left-[810px] lg:top-[47px] lg:shadow lg:border lg:border-black"
        src={photo}
        alt="Example"
      />
    </div>
  );
}

export default Hero;

{
  /* <img
        className="w-[327px] h-[311px] left-[78px] top-[393px] absolute"
        src={photo}
      /> */
}
