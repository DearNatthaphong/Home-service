import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const adminPromotionContext = createContext();

function PromotionProvider({ children }) {
  /** POST Promotion Start */
  const [isFixed, setIsFixed] = useState(true);
  const [isPercent, setIsPercent] = useState(false);

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
      const result = await axios.post(
        `http://localhost:4000/promotions/admin`,
        dataPost
      );
      toast.success(result.data.message);
      navigate("/admin/promotion");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  /** POST Promotion End */

  /** Search Promotion In Promotion Main Page Start */
  const [isSearchPromotion, setIsSearchPromotion] = useState("");
  /** Search Promotion In Promotion Main Page End */

  /** GET All Promotion Start */
  const [isAllPromotion, setIsAllPromotion] = useState([]);

  const getAllPromotion = async () => {
    const result = await axios.get(`http://localhost:4000/promotions/admin`);
    setIsAllPromotion(result.data.data);
  };

  useEffect(() => {
    getAllPromotion();
  }, [isSearchPromotion]);
  /** GET All Promotion End */

  const filterPromotion = isAllPromotion.filter((items) => {
    const filterSearchPromotion =
      isSearchPromotion === "" ||
      items.promotion_code.includes(isSearchPromotion.toUpperCase());
    return filterSearchPromotion;
  });

  /** เก็บค่า id เมื่อทำการคลิกที่ icon ว่าที่่กดอยู่เป็น id ที่เท่าไหร่ Start */
  const [open, setOpen] = useState(false);
  const [keepId, setKeepId] = useState("");
  /** เก็บค่า id เมื่อทำการคลิกที่ icon ว่าที่กดอยู่เป็น id ที่เท่าไหร่ End */

  /** DELETE Promotion By Id Start */
  const deletedPromotion = async (promotionId) => {
    try {
      const result = await axios.delete(
        `http://localhost:4000/promotions/admin/${promotionId}`
      );
      const newPromotions = isAllPromotion.filter((items) => {
        return items.promotion_id !== promotionId;
      });
      setIsAllPromotion(newPromotions);
      setOpen(false);
      toast.success(result.data.message);
      navigate("/admin/promotion");
    } catch (error) {
      console.log(error);
    }
  };
  /** DELETE Promotion By Id End */

  /** GET Promotion By Id Start */
  const [isOnePromotion, setIsOnePromotion] = useState({
    promotion_code: "",
    discount: "",
    usage_limit: "",
    expiry_date: "",
    expiry_time: "",
  });
  const [isOldPromotionCode, setIsOldPromotionCode] = useState("");

  const getPromotionById = async (promotionId) => {
    try {
      const result = await axios.get(
        `http://localhost:4000/promotions/admin/${promotionId}`
      );

      setIsOnePromotion(result.data.data[0]);
      setIsOldPromotionCode(result.data.data[0].promotion_code);
      setIsType(result.data.data[0].discount_type);
      if (result.data.data[0].discount_type === "fixed") {
        setIsFixed(true);
        setIsPercent(false);
      } else if (result.data.data[0].discount_type === "percent") {
        setIsPercent(true);
        setIsFixed(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  /** GET Promotion By Id End */

  /** PUT Promotion By Id Start */
  const updatedPromotion = async (promotionId) => {
    try {
      const result = await axios.put(
        `http://localhost:4000/promotions/admin/${promotionId}`,
        isOnePromotion
      );
      toast.success(result.data.message);
      navigate(`/admin/promotion/${promotionId}`);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  /** PUT Promotion By Id End */

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

        // Filter Promotion Start //
        filterPromotion,
        // Filter Promotion End //

        // Search On Promotion Main Page Start //
        isSearchPromotion,
        setIsSearchPromotion,
        // Search On Promotion Main Page End //

        // DELETE Promotion By ID Start //
        deletedPromotion,
        // Modal DELETE Promotion Start //
        open,
        setOpen,
        keepId,
        setKeepId,
        // Modal DELETE Promotion End //
        // DELETE Promotion By ID End //

        getPromotionById,

        isOnePromotion,
        setIsOnePromotion,

        updatedPromotion,

        isOldPromotionCode,
      }}
    >
      {children}
    </adminPromotionContext.Provider>
  );
}

const usePromotion = () => useContext(adminPromotionContext);
export { PromotionProvider, usePromotion };
