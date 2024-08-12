import React from "react";
import { useNavigate } from "react-router-dom";

function UserNotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <img
        src="/images/user-dog.png"
        alt=""
        className="rounded-full w-[250px] h-[250px]"
      />
      <span className="font-prompt font-semibold text-[24px] text-blue-600 my-[10px]">
        ERROR 404
      </span>
      <span className="font-prompt font-medium text-[40px]">
        Page Not Found
      </span>
      <button
        className="w-[150px] h-[50px] bg-blue-600 mt-[10px] rounded-[8px] hover:bg-blue-500 active:bg-blue-800"
        onClick={() => navigate("/")}
      >
        <span className="font-prompt text-white text-[16px]">Home</span>
      </button>
    </div>
  );
}

export default UserNotFoundPage;
