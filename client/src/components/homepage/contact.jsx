import photo from "../../../public/images/constructionworker.png";
import houselogo from "../../../public/images/house.png";
function Contact() {
  return (
    <div className="w-[375px] h-[731px] flex-col justify-start items-start inline-flex mt-28">
      <div className="w-[375px] h-[278.49px] bg-blue-700/opacity-30" />
      <div className="w-[375px] h-[620px] px-6 py-8 bg-blue-600 flex-col justify-start items-start gap-6 flex">
        <div className="self-stretch text-white text-[32px] font-medium font-['Prompt'] leading-[48px]">
          มาร่วมเป็นพนักงานซ่อมกับ HomeServices
        </div>
        <div className="self-stretch text-white text-base font-medium font-['Prompt'] leading-normal">
          เข้ารับการฝึกอบรมที่ได้มาตรฐาน ฟรี!
          และยังได้รับค่าตอบแทนที่มากขึ้นกว่าเดิม
        </div>
        <div className="self-stretch text-white text-xl font-medium font-['Prompt'] leading-[30px]">
          ติดต่อมาที่อีเมล: job@homeservices.co
        </div>
        <img
          className="w-[375px] h-[306px] left-[0px] top-[2050px] absolute "
          src={photo}
        />
        <img
          className="w-[306px] h-[306px] left-[69px] top-[2558px] absolute "
          src={houselogo}
        />
      </div>
    </div>
  );
}

export default Contact;
