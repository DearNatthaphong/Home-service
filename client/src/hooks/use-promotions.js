import axios from 'axios';
import { useState } from 'react';

const usePromotions = () => {
  const [promotion, setPromotion] = useState(null);

  const getPromotionByQuery = async (code) => {
    try {
      const result = await axios.get(
        `http://localhost:4000/promotions?promotionCode=${code}`
      );
      console.log(result);
      setPromotion(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTotalPrice = async (promotionId, orderId) => {
    try {
      const result = await axios.put(
        `http://localhost:4000/promotions/${promotionId}/orders/${orderId}/update-total-price`
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    promotion,
    getPromotionByQuery,
    updateTotalPrice
  };
};

export default usePromotions;
