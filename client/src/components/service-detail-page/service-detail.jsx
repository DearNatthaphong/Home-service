import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  listIcon,
  editIcon,
  cardCheckIcon,
} from "../../assets/icons/icon-service-detail.jsx";

import axios from "axios";

function ServiceDetail() {
  const [serviceItems, setServiceItems] = useState([]);
  const [orderItems, setOrderItems] = useState([
    { serviceItemId: "", quantity: 0 },
  ]);

  const params = useParams();

  const navigate = useNavigate();
  const goToServiceList = () => {
    navigate("/servicelist");
  };

  const goToServiceInform = () => {
    navigate("/service/information");
  };

  const getServiceItems = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/service/${params.id}`
      );
      console.log(result);
      setServiceItems(result.data.data);
    } catch (error) {
      console.error("Error fetching service items:", error);
    }
  };
  console.log(serviceItems);

  useEffect(() => {
    getServiceItems();
  }, []);

  const handleAddItem = (serviceItemId) => {
    setOrderItems((prev) => {
      const existingItem = prev.find(
        (item) => item.serviceItemId === serviceItemId
      );
      if (existingItem) {
        return prev.map((item) =>
          item.serviceItemId === serviceItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { serviceItemId, quantity: 1 }];
      }
    });
  };

  const handleRemoveItem = (serviceItemId) => {
    setOrderItems((prev) => {
      const existingItem = prev.find(
        (item) => item.serviceItemId === serviceItemId
      );
      if (existingItem && existingItem.quantity > 1) {
        return prev.map((item) =>
          item.serviceItemId === serviceItemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prev.filter((item) => item.serviceItemId !== serviceItemId);
      }
    });
  };

  const postOrders = async (data) => {
    try {
      const response = await axios.post(`http://localhost:4000/orders`, data);
      return response.data.data;
    } catch (error) {
      console.error("Failed to create orders", error);
      return null;
    }
  };

  const postOrderItems = async (orderId, orderItems) => {
    try {
      await axios.post(
        `http://localhost:4000/orders/${orderId}/order-items`,
        orderItems
      );
    } catch (error) {
      console.error("Failed to create order items", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Calculate the total price
      const totalPrice = orderItems.reduce((total, item) => {
        const serviceItem = serviceItems.find(
          (service) => service.service_item_id === item.serviceItemId
        );

        if (serviceItem) {
          return total + serviceItem.service_price * item.quantity;
        } else {
          console.error(`Service item with ID ${item.serviceItemId} not found`);
          return total;
        }
      }, 0);

      // Prepare the order data
      const orderData = {
        total_price: totalPrice,
      };

      // Create the order and get the order ID
      const order = await postOrders(orderData);
      console.log(order);

      // Prepare the order items data
      const orderItemsData = orderItems.map((item) => ({
        service_item_id: item.serviceItemId,
        quantity: item.quantity,
      }));

      // Post the order items
      await postOrderItems(order.order_id, orderItemsData);
      navigate(`/service/information/orders/${order.order_id}/appointments`);
    } catch (error) {
      console.error("Error processing the order:", error);
    }
  };
  return (
    <section className="relative text-[14px] font-prompt bg-gray-100 w-screen flex flex-col justify-center">
      <div className="absolute top-0 left-0 w-full h-[168px] xl:h-[240px] bg-cover bg-center bg-[url('images/bg-payment-mobile.png')] xl:bg-[url('images/bg-payment-desktop.png')]"></div>
      <div className="px-3 pt-20 pb-6 flex flex-col gap-3">
        <div className="px-3 pt-12 pb-6 xl:pt-20 xl:px-[10%] xl:pb-12 flex flex-col gap-5 xl:gap-12">
          <div className="card bg-white w-fit rounded-lg">
            <div className="card-body p-3 xl:py-6 xl:px-9">
              <span className="card-title text-sm flex items-baseline xl:text-[16px]">
                บริการของเรา{" > "}
                <span className="text-blue-600 text-[20px] xl:text-[32px]"></span>
              </span>
            </div>
          </div>
          <div className="card bg-white rounded-lg border-[1px] border-gray-300">
            <div className="card-body p-4 xl:px-[20%] py-8">
              <div className="flex items-center justify-between relative">
                <div className="flex flex-col items-center z-10">
                  <div className="bg-blue-500 text-white rounded-full p-2">
                    {listIcon}
                  </div>
                  <span className="text-blue-500">รายการ</span>
                </div>
                <div className="absolute top-1/3 left-2 w-[50%] transform -translate-y-1/2 flex justify-between items-center">
                  <hr className="border-t-2 border-gray-300 w-full" />
                </div>
                <div className="flex flex-col items-center z-10">
                  <div className="bg-gray-300 text-white rounded-full p-2">
                    {editIcon}
                  </div>
                  <span className="text-gray-300">กรอกข้อมูลบริการ</span>
                </div>
                <div className="absolute top-1/3 right-2 w-[50%] transform -translate-y-1/2 flex justify-between items-center">
                  <hr className="border-t-2 border-gray-300 w-full" />
                </div>
                <div className="flex flex-col items-center z-10">
                  <div className="bg-white border-2 border-gray-300 text-gray-300 rounded-full p-2">
                    {cardCheckIcon}
                  </div>
                  <span className="text-gray-300">ชำระเงิน</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-white rounded-lg lg:ml-36 lg:mr-[550px]">
          <div>
            <div className="card-body p-3 border border-gray-300 rounded-lg">
              <p className="card text-[18px] flex text-gray-700 mb-2">
                เลือกรายการบริการล้างแอร์
              </p>
              <div className="text-black text-[16px]">
                {serviceItems.map((item) => (
                  <div key={item.service_item_id}>
                    <div className="flex justify-between mt-3">
                      <div className="w-1/2">
                        {item.service_name}
                        <div className="text-gray-500">
                          {item.service_price} ฿ / เครื่อง
                        </div>
                      </div>
                      <div className="h-fit">
                        <div className="flex justify-between">
                          <button
                            className="btn btn-sm bg-white border border-blue-600"
                            onClick={() =>
                              handleRemoveItem(item.service_item_id)
                            }
                            disabled={
                              !(
                                orderItems.find(
                                  (orderItem) =>
                                    orderItem.serviceItemId ===
                                    item.service_item_id
                                )?.quantity > 0
                              )
                            }
                          >
                            <div className="text-blue-600">-</div>
                          </button>
                          <div className="justify-center items-center flex ml-3 mr-3">
                            {orderItems.find(
                              (orderItem) =>
                                orderItem.serviceItemId === item.service_item_id
                            )?.quantity || 0}
                          </div>
                          <button
                            className="btn btn-sm bg-white border border-blue-600"
                            onClick={() => handleAddItem(item.service_item_id)}
                          >
                            <div className="text-blue-600">+</div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr className="w-full mt-3" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <footer className="font-prompt w-screen text-[16px] xl:px-[10%]">
          <div className=" bg-white flex gap-3 p-3 xl:justify-between">
            <div className="w-1/2 xl:w-fit">
              <button
                onClick={goToServiceList}
                type="button"
                className="btn btn-outline text-blue-600 border-blue-600 hover:bg-white hover:text-blue-400 hover:border-blue-400 focus:text-blue-800 focus:border-blue-800 w-full"
              >
                <span className="xl:px-4">{"< "}ย้อนกลับ</span>
              </button>
            </div>
            <div className="w-1/2 xl:w-fit">
              <button
                type="button"
                className="btn btn-ghost text-white bg-blue-600  hover:bg-blue-500 hover:text-white focus:bg-blue-800 focus:text-white w-full"
                onClick={handleSubmit}
              >
                {" "}
                <span>ดำเนินการต่อ {" >"}</span>
              </button>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default ServiceDetail;
