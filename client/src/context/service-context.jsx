import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const serviceContext = createContext();

function ServiceProvider(props) {
  // fetch all service items by service id start //
  const [serviceName, setServiceName] = useState('');
  const [serviceImage, setServiceImage] = useState('');
  const [allServiceItems, setAllServiceItems] = useState([]);
  const { id } = useParams();

  const fetchAllServiceItems = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/services/${id}/service-items`
      );
      setServiceName(result.data.serviceName);
      setServiceImage(result.data.serviceImage);
      setAllServiceItems(result.data.serviceItems);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchAllServiceItems();
  }, []);
  // fetch all service items by service id end //

  // อัปเดต orderItems เมื่อมีการเปลี่ยน quantity start //
  const [orderItems, setOrderItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateOrderItems = (serviceItemId, quantity) => {
    setOrderItems((prevOrderItems) => {
      // ตรวจสอบว่ามี serviceItemId นี้อยู่ใน orderItems หรือไม่
      const existingItemIndex = prevOrderItems.findIndex(
        (item) => item.serviceItemId === serviceItemId
      );

      let updatedOrderItems;
      if (existingItemIndex >= 0) {
        // อัปเดต quantity ของ item เดิม
        updatedOrderItems = [...prevOrderItems];
        updatedOrderItems[existingItemIndex].quantity = quantity;

        // ลบ item ที่ quantity = 0
        updatedOrderItems = updatedOrderItems.filter(
          (item) => item.quantity > 0
        );
      } else {
        // เพิ่ม item ใหม่ถ้า quantity > 0
        return quantity > 0
          ? [...prevOrderItems, { serviceItemId, quantity }]
          : prevOrderItems;
      }

      return updatedOrderItems;
    });
  };

  useEffect(() => {
    const newTotalPrice = orderItems.reduce((total, item) => {
      const serviceItem = allServiceItems.find(
        (si) => si.serviceItemId === item.serviceItemId
      );
      return total + (serviceItem?.servicePrice || 0) * item.quantity;
    }, 0);

    setTotalPrice(newTotalPrice);
    // ตรวจสอบการเปลี่ยนแปลงของทั้ง orderItems และ allServiceItems
  }, [orderItems, allServiceItems]);
  // อัปเดต orderItems เมื่อมีการเปลี่ยน quantity start //

  // create a new order start //
  // create a new order end //

  // create all new order items by order id start//
  // create all new order items by order id end//
  return (
    <serviceContext.Provider
      value={{
        serviceName,
        serviceImage,
        allServiceItems,
        orderItems,
        updateOrderItems,
        totalPrice
      }}
    >
      {props.children}
    </serviceContext.Provider>
  );
}

const useService = () => useContext(serviceContext);
export { ServiceProvider, useService };
