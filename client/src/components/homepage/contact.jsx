import photo from "../../../public/images/constructionworker.png";
import houselogo from "../../../public/images/house.png";
function Contact() {
  return (
    <section className="xl:w-screen xl:flex xl:justify-center font-prompt md:w-screen md:flex md:justify-center">
      <div className="w-[375px] h-[731px] flex-col justify-start items-start inline-flex mt-28 lg:w-[1440px] lg:h-[378px] lg:relative md:relative lg:bg-blue-700 lg:mt-0">
        <div className="w-[375px] h-[278.49px] bg-blue-700/opacity-30 lg:w-[509px] lg:h-[378px] lg:left-0 lg:top-0 lg:absolute lg:bg-blue-700/opacity-30" />
        <div className="w-[375px] h-[620px] px-6 py-8 bg-blue-700 flex-col justify-start items-start gap-6 flex">
          <div
            className="self-stretch text-white text-[32px] font-medium leading-[48px]  lg:w-[450px] lg:h-[100px] lg:left-[640px] lg:top-[62px] lg:absolute lg:text-white lg:text-[40px] lg:font-semibold lg:leading-[50px]
"
          >
            มาร่วมเป็นพนักงานซ่อมกับ HomeServices
          </div>
          <div className="self-stretch text-white text-base font-medium leading-normal lg:w-[353px] lg:left-[640px] lg:top-[187px] lg:absolute lg:text-white lg:text-xl lg:font-normal lg:leading-[30px]">
            เข้ารับการฝึกอบรมที่ได้มาตรฐาน ฟรี!
            และยังได้รับค่าตอบแทนที่มากขึ้นกว่าเดิม
          </div>
          <div className="self-stretch text-white text-xl font-medium leading-[30px] lg:left-[640px] lg:top-[275px] lg:absolute lg:text-white lg:text-[32px] lg:font-medium  lg:leading-[48px]">
            ติดต่อมาที่อีเมล: job@homeservices.co
          </div>
          <img
            className="w-[375px] h-[306px] left-[0px] top-[2050px] absolute lg:absolute lg:top-[0px] lg:h-[378px] lg:w-[500px] md:absolute md:top-[-84px]"
            src={photo}
          />
          <img
            className="w-[306px] h-[306px] left-[69px] top-[2558px] absolute lg:absolute lg:top-[73px] lg:left-[1135px] md:absolute md:left-[71px] md:top-[426px]  "
            src={houselogo}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
