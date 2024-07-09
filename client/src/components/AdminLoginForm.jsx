import React from "react";

function AdminLoginForm() {
  const css = {
    styleTextLabel: "font-prompt text-[16px] font-medium text-black",
    styleTestLabelStar: "font-prompt text-[16px] font-medium text-red",
    styleInputBox:
      "w-[440px] h-[44px] bg-white border-[1px] border-gray-300 rounded-[8px] text-black pl-[10px]",
  };

  return (
    <div className="w-[614px] h-[498px] bg-white rounded-[8px] border-[1px] border-gray-300 flex items-center justify-center flex-col">
      {/** Section Text Header Start */}
      <span className="text-blue-950 font-prompt text-[32px] font-medium mb-[13px]">
        เข้าสู่ระบบแอดมิน
      </span>
      {/** Section Text Header End */}
      {/** Section Login Form Start */}
      <form action="" className="flex flex-col gap-[20px]">
        {/** Section Email Start */}
        <div className="flex flex-col gap-[4px]">
          <label htmlFor="" className={css.styleTextLabel}>
            Email
            <span className={css.styleTestLabelStar}>*</span>
          </label>
          <input type="text" className={css.styleInputBox} />
        </div>
        {/** Section Email End */}
        {/** Section Password Start */}
        <div className="flex flex-col gap-[4px]">
          <label htmlFor="" className={css.styleTextLabel}>
            Password
            <span className={css.styleTestLabelStar}>*</span>
          </label>
          <input type="password" className={css.styleInputBox} />
        </div>
        {/** Section Password End */}
      </form>
      {/** Section Login Form End */}
      {/** Section Button To Login Start */}
      <button className="w-[440px] h-[44px] bg-blue-600 rounded-[8px] mt-[45px]">
        <span className="font-prompt text-[16px] font-medium text-white">
          เข้าสู่ระบบ
        </span>
      </button>
      {/** Section Button To Login End */}
    </div>
  );
}

export default AdminLoginForm;
