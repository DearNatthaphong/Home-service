import React from "react";

function LoadingScreen() {
  return (
    <div className="w-screen h-screen flex items-center justify-center gap-[10px]">
      <span className="loading loading-dots w-[80px] h-[80px] text-blue-500"></span>
      <span className="loading loading-dots w-[100px] h-[100px] text-blue-600"></span>
    </div>
  );
}

export default LoadingScreen;
