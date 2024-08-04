import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const adminAddPromotionContext = createContext();

function AddPromotionProvider({ children }) {
  const [isFixed, setIsFixed] = useState(true);
  const [isPercent, setIsPercent] = useState(false);
  // console.log(isFixed);
  // console.log(isPercent);

  // เก็บค่าที่ส่งออกมาจาก Form
  // เก็บค่า Promotion Code
  const [isPromotionCode, setIsPromotionCode] = useState("");

  // เก็บค่า สถานะว่าเป็น fixed หรือ percent
  const [isType, setIsType] = useState("fixed");

  // เก็บค่า ราคา ที่ลด แบบ fixed
  const [isNumFixed, setIsNumFixed] = useState("");
  // เก็บค่า ราคา ที่ลด แบบ %
  const [isNumPercent, setIsNumPercent] = useState("");

  // เก็บค่า จำนวนที่ใช้ได้
  const [isUsageLimit, setIsUsageLimit] = useState("");

  // เก็บค่า วันสุดท้ายที่ใช้ได้
  const [isExpiryDate, setIsExpiryDate] = useState("");
  // เก็บค่า เวลาสุดท้ายที่ใช้ได้
  const [isExpiryTime, setIsExpiryTime] = useState("");

  const navigate = useNavigate();
  const dataPost = {
    isPromotionCode,
    isType,
    isNumFixed,
    isNumPercent,
    isUsageLimit,
    isExpiryDate,
    isExpiryTime,
  };
  const createPromotion = async () => {
    try {
      await axios.post(`http://localhost:4000/promotions`, dataPost);
      navigate("/admin/promotion");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <adminAddPromotionContext.Provider
      value={{
        isFixed,
        setIsFixed,

        isPercent,
        setIsPercent,

        isPromotionCode,
        setIsPromotionCode,

        isType,
        setIsType,

        isNumFixed,
        setIsNumFixed,

        isNumPercent,
        setIsNumPercent,

        isUsageLimit,
        setIsUsageLimit,

        isExpiryDate,
        setIsExpiryDate,

        isExpiryTime,
        setIsExpiryTime,

        createPromotion,
      }}
    >
      {children}
    </adminAddPromotionContext.Provider>
  );
}

const useAddPromotion = () => useContext(adminAddPromotionContext);
export { AddPromotionProvider, useAddPromotion };
