import React from "react";
import { useAuth } from "../context/authentication";
import axios from "axios";

function AdminHomePage() {
  const { adminLogout } = useAuth();
  return (
    <div className="w-screen h-screen bg-blue-300">
      <p className="text-[60px] font-prompt text-black">คุณมาถึงหน้าHomeแล้ว</p>
      <button
        className="w-[200px] h-[100px] bg-gray-400 text-[50px] text-black"
        onClick={() => adminLogout()}
      >
        Logout
      </button>

      <button
        className="w-[200px] h-[50px] bg-white"
        onClick={async () => {
          await axios.get("http://localhost:4000/");
        }}
      >
        get
      </button>
    </div>
  );
}

export default AdminHomePage;
