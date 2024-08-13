import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const appointmentContext = createContext();

function AppointmentProvider(props) {
  // fetch all order items by order id start //
  const [serviceName, setServiceName] = useState('');
  const [serviceImage, setServiceImage] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderItems, setOrderItems] = useState([]);
  const { id } = useParams();

  const fetchAllOrderItems = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/orders/${id}/order-items`
      );
      setServiceName(result.data.serviceName);
      setServiceImage(result.data.serviceImage);
      setTotalPrice(result.data.totalPrice);
      setOrderItems(result.data.orderItems);
    } catch (error) {
      toast.error(error.response?.data?.message ?? 'พบข้อผิดพลาด');
    }
  };

  useEffect(() => {
    fetchAllOrderItems();
  }, []);
  // fetch all order items by order id end //

  // create a new appointment by order id start//
  const createAppointment = async (orderId, data) => {
    try {
      const result = await axios.post(
        `http://localhost:4000/orders/${orderId}/appointments`,
        data
      );
      toast.success(result.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message ?? 'พบข้อผิดพลาด');
    }
  };
  // create a new appointment by order id end//

  return (
    <appointmentContext.Provider
      value={{
        serviceImage,
        serviceName,
        orderItems,
        totalPrice,
        createAppointment,
        id
      }}
    >
      {props.children}
    </appointmentContext.Provider>
  );
}

const useAppointment = () => useContext(appointmentContext);
export { AppointmentProvider, useAppointment };
