import React from "react";

function UserServiceHeader() {
  return (
    <div className="card mt-[270px] xl:mt-[100px] bg-white w-fit rounded-lg z-1">
      <div className="card-body p-3 xl:py-6 xl:px-9">
        <span className="card-title text-sm flex items-baseline xl:text-[16px]">
          บริการของเรา{" > "}
          <span className="text-blue-600 text-[20px] xl:text-[32px]">
            ล้างแอร์
          </span>
        </span>
      </div>
    </div>
  );
}

export default UserServiceHeader;
