import photo from "../../../public/images/construction-worker.png";
import houselogo from "../../../public/images/house.png";
function Contact() {
  return (
    // <section className="font-prompt">
    //   <div className="w-full h-[731px] lg:h-[378px] bg-blue-700 mt-5 lg:mt-0 relative lg:flex lg:flex-row lg:justify-center">
    //     <div className="w-full h-full flex flex-col justify-center items-center gap-6 absolute top-20 lg:top-0 lg:w-auto lg:flex lg:flex-col lg:justify-center lg:items-start lg:ml-[480px]">
    //       <div className="w-[327px] text-white text-[32px] font-medium leading-[48px]  lg:text-[40px] lg:font-semibold lg:leading-[50px] lg:w-[405px] ">
    //         มาร่วมเป็นพนักงานซ่อมกับ HomeServices
    //       </div>
    //       <div className="w-[327px] text-white text-base font-medium leading-normal lg:w-[330px] lg:text-xl lg:font-normal lg:leading-[30px]">
    //         เข้ารับการฝึกอบรมที่ได้มาตรฐาน ฟรี!
    //         และยังได้รับค่าตอบแทนที่มากขึ้นกว่าเดิม
    //       </div>
    //       <div className="w-[327px] text-white text-xl font-medium leading-[30px] lg:w-[600px] lg:text-[32px] lg:font-medium">
    //         ติดต่อมาที่อีเมล: job@homeservices.co
    //       </div>
    //     </div>
    //     <div>
    //       <img
    //         className="absolute bottom-0 right-0 w-[250px] lg:w-[300px]"
    //         src={houselogo}
    //       />
    //     </div>
    //     <div className="w-full flex justify-center lg:flex-row lg:justify-start">
    //       <img
    //         className="absolute top-0 w-[400px] lg:h-full lg:w-[500px]"
    //         src={photo}
    //       />
    //     </div>
    //   </div>
    // </section>

    <section className="font-prompt bg-blue-700 flex justify-center">
      <div className="w-full h-[731px] lg:h-[378px] b mt-5 lg:mt-0 relative lg:flex lg:flex-row lg:justify-center lg:items-center lg:w-[1440px]">
        <div className="w-full h-full flex flex-col justify-center items-center gap-6 absolute top-20 lg:top-0 lg:flex lg:flex-row lg:justify-center lg:items-center ">
          <div className=" w-full lg:w-[1100px] flex justify-center lg:justify-start absolute top-[-80px] lg:relative lg:h-[378px] lg:mt-[160px] mt-[-20px]">
            <img className="w-[400px] lg:w-[550px]" src={photo} />
          </div>
          <div className="flex flex-col lg:w-full gap-6 ">
            <div className="w-[327px] text-white text-[32px] font-medium leading-[48px]  lg:text-[40px] lg:font-semibold lg:leading-[50px] lg:w-[405px] ">
              มาร่วมเป็นพนักงานซ่อมกับ HomeServices
            </div>
            <div className="w-[327px] text-white text-base font-medium leading-normal lg:w-[330px] lg:text-xl lg:font-normal lg:leading-[30px]">
              เข้ารับการฝึกอบรมที่ได้มาตรฐาน ฟรี!
              และยังได้รับค่าตอบแทนที่มากขึ้นกว่าเดิม
            </div>
            <div className="w-[327px] text-white text-xl font-medium leading-[30px] lg:w-[600px] lg:text-[32px] lg:font-medium">
              ติดต่อมาที่อีเมล: job@homeservices.co
            </div>
          </div>
          <div className=" w-full lg:w-[500px] lg:h-[280px]  flex justify-end items-end absolute bottom-20 lg:right-0 lg:bottom-0 ">
            <img className="w-[250px] lg:w-[320px]" src={houselogo} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
