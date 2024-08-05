import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const adminPromotionContext = createContext();

function PromotionProvider({ children }) {
  /** POST Promotion Start */
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
  /** POST Promotion End */

  /** Search Promotion In Promotion Main Page Start */
  const [isSearchPromotion, setIsSearchPromotion] = useState("");
  /** Search Promotion In Promotion Main Page End */

  /** GET All Promotion Start */
  const [isAllPromotion, setIsAllPromotion] = useState([]);

  const getAllPromotion = async () => {
    const result = await axios.get(`http://localhost:4000/promotions`);
    console.log(result.data.data);
    setIsAllPromotion(result.data.data);
  };

  useEffect(() => {
    getAllPromotion();
  }, [isSearchPromotion]);
  /** GET All Promotion End */

  return (
    <adminPromotionContext.Provider
      value={{
        // POST Promotion Start //
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
        // POST Promotion End //

        // GET All Promotion Start //
        isAllPromotion,
        // GET All Promotion End //

        // Search On Promotion Main Page Start //
        isSearchPromotion,
        setIsSearchPromotion,
        // Search On Promotion Main Page End //
      }}
    >
      {children}
    </adminPromotionContext.Provider>
  );
}

const usePromotion = () => useContext(adminPromotionContext);
export { PromotionProvider, usePromotion };
