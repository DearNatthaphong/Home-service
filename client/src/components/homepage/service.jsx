import photo from "../../../public/images/image-air.png";
import photo1 from "../../../public/images/image-clean.png";
import photo2 from "../../../public/images/image-wash.png";
import photo3 from "../../../public/images/label.png";
import { useNavigate } from "react-router-dom";
const services = [
  {
    img: photo1,
    category: "บริการทั่วไป",
    title: "ทำความสะอาดทั่วไป",
    price: "ค่าบริการประมาณ 500.00 - 1,000.00 ฿",
  },
  {
    img: photo,
    category: "บริการทั่วไป",
    title: "ล้างแอร์",
    price: "ค่าบริการประมาณ 500.00 - 1,000.00 ฿",
  },
  {
    img: photo2,
    category: "บริการทั่วไป",
    title: "ซ่อมเครื่องซักผ้า",
    price: "ค่าบริการประมาณ 500.00 ฿",
  },
];

function Service() {
  const navigate = useNavigate();
  const goToServiceList = () => {
    navigate("/servicelist");
  };
  return (
    <section className="font-prompt flex justify-center">
      <div className="w-[375px] h-[1316px] px-4 pt-10 pb-14 flex-col justify-center items-center gap-6 inline-flex lg:w-[1440px] lg:h-[790px] lg:relative ">
        <div className="self-stretch text-center text-blue-950 text-xl font-medium leading-[30px] lg:left-[574px] lg:top-[80px] lg:absolute lg:text-[32px] lg:leading-[48px]">
          บริการยอดฮิตของเรา
        </div>
        <div className=" h-[1098px] flex-col justify-start items-start gap-6 flex lg:flex-row lg:gap-[37px] lg:top-[170px] lg:left-[150px] lg:absolute transition-all duration-500 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="self-stretch h-[350px] bg-white rounded-lg border border-gray-300 flex-col justify-start items-center flex lg:w-[349px] lg:h-[365px]"
            >
              <img
                className="w-[349px] h-[200px]"
                src={service.img}
                alt={`Service ${index + 1}`}
              />
              <div className="self-stretch h-[150px] p-4 flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch h-[82px] flex-col justify-start items-start gap-1 flex">
                  <div className="px-2.5 py-1 bg-indigo-50 rounded-lg justify-start items-start gap-2.5 inline-flex">
                    <div className="text-blue-800 text-xs font-normal leading-[18px]">
                      {service.category}
                    </div>
                  </div>
                  <div className="self-stretch h-[52px] flex-col justify-start items-start gap-1 flex">
                    <div className="self-stretch text-zinc-800 text-lg font-medium leading-[27px]">
                      {service.title}
                    </div>
                    <div className="self-stretch justify-start items-center inline-flex">
                      <div className="relative">
                        <div className="w-[13.34px] h-[13.33px] left-[1.33px] top-[1.33px] absolute"></div>
                      </div>
                      <img
                        className="w-[16px] h-[16px]"
                        src={photo3}
                        alt="label"
                      />
                      <div className="grow shrink basis-0 text-gray-500 text-sm font-normal leading-[21px] pl-2">
                        {service.price}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="py-0.5 rounded-lg justify-start items-start gap-2.5 inline-flex">
                  <div className="text-blue-600 text-base font-semibold underline leading-normal">
                    เลือกบริการ
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-6 py-2.5 bg-blue-600 rounded-lg justify-center items-center gap-2 inline-flex lg:absolute lg:left-[643px] lg:top-[599px]">
          <div className="text-center text-white text-base font-medium leading-normal">
            <button onClick={goToServiceList}>ดูบริการท้ังหมด</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
