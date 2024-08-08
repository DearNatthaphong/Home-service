import React, { useState, useEffect } from "react";
import airImage from "../../../public/images/image-air.png";
import { useNavigate, useParams } from "react-router-dom";
import { usePayment } from "../../context/payment-context";
import axios from "axios";
import {
  listIcon,
  editIcon,
  cardCheckIcon,
} from "../../assets/icons/icon-service-detail";

function ServiceInformation() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    address: "",
    additionalInfo: "",
  });

  const [orderItems, setOrderItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const goToServiceDetail = (id) => {
    navigate(`/servicedetail/${id}`);
  };

 
  const [provinces, setProvinces] = useState([]);
  const [amphures, setAmphures] = useState([]);
  const [tambons, setTambons] = useState([]);
  const [selected, setSelected] = useState({
    province_id: "",
    amphure_id: "",
    tambon_id: "",
  });

  useEffect(() => {
    (() => {
      fetch(
        "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json"
      )
        .then((response) => response.json())
        .then((result) => {
          setProvinces(result);
        });
    })();
  }, []);

  const DropdownList = ({
    label,
    id,
    list,
    child,
    childsId = [],
    setChilds = [],
  }) => {
    const onChangeHandle = (event) => {
      setChilds.forEach((setChild) => setChild([]));
      const entries = childsId.map((child) => [child, undefined]);
      const unSelectChilds = Object.fromEntries(entries);

      const input = event.target.value;
      const dependId = input ? Number(input) : undefined;
      setSelected((prev) => ({ ...prev, ...unSelectChilds, [id]: dependId }));

      if (!input) return;

      if (child) {
        const parent = list.find((item) => item.id === dependId);
        const { [child]: childs } = parent;
        const [setChild] = setChilds;
        setChild(childs);
      }
    };
    return (
      <div className="flex flex-col">
        <label htmlFor={label}>{label}</label>
        <select
          value={selected[id]}
          onChange={onChangeHandle}
          className="mt-1 px-3 py-2 border border-gray-300 rounded-lg outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] text-gray-700 placeholder-gray-700  "
        >
          <option value="">{label}</option>
          <option label="" />
          {list &&
            list.map((item) => (
              <option
                key={item.id}
                value={item.id}
                label={`${item.name_th} - ${item.name_en}`}
              />
            ))}
        </select>
      </div>
    );
  };
  const params = useParams();

  const getOrderItems = async () => {
    try {
      const result = await axios.get(
        `http://localhost:4000/orders/${params.id}/order-items`
      );
      console.log(result);
      setOrderItems(result.data.order_items);
      setTotalPrice(result.data.total_price);
    } catch (error) {
      console.log("Error fetching service items:", error);
    }
  };

  const postAppointment = async (appointmentData) => {
    try {
      const result = await axios.post(
        "http://localhost:4000/appointments",
        appointmentData
      );
      return result.data;
    } catch (error) {
      console.log("Error posting appointment:", error);
    }
  };
  //const { id } = useParams();
  //const { handleClickToPayment } = usePayment();

  // const handleClick = () => {
  //  handleClickToPayment(id);
  //};

  const handleSubmit = async (event) => {
    event.preventDefault();

    // แปลง ID เป็นชื่อ
    const provinceName =
      provinces.find((p) => p.id === selected.province_id)?.name_th || "";
    const amphureName =
      amphures.find((a) => a.id === selected.amphure_id)?.name_th || "";
    const tambonName =
      tambons.find((t) => t.id === selected.tambon_id)?.name_th || "";

    const appointmentData = {
      service_date: formData.date,
      service_time: formData.time,
      province: provinceName,
      district: amphureName,
      subdistrict: tambonName,
      address: formData.address,
      additional_info: formData.additionalInfo,
    };

    try {
      const response = await postAppointment(appointmentData);
      if (response && response.data) {
        navigate("/services/carts/orders/payment/success");
      } else {
        alert("เกิดข้อผิดพลาดในการสร้างการนัดหมาย กรุณาลองใหม่อีกครั้ง");
      }
    } catch (error) {
      console.log("Error handling submit:", error);
      alert("เกิดข้อผิดพลาดในการสร้างการนัดหมาย กรุณาลองใหม่อีกครั้ง");
    }
  };
  useEffect(() => {
    getOrderItems();
  }, []);

  return (
    <section className="w-screen min-h-screen font-prompt text-sm bg-background">
      <div className="relative bottom-[160px] xl:bottom-auto xl:static flex flex-col items-center">
      <div
        className="absolute top-[53px] left-0 mt-[160px] xl:mt-0 w-full h-[168px] bg-cover bg-center"
        style={{
          backgroundImage: url('../../public/images/bg-payment-mobile.png'),
        }}
      ></div>
      <div className="px-3 pt-20 pb-6 flex flex-col gap-3">
        <div className="px-3 pt-12 pb-6 xl:pt-20 xl:px-[10%] xl:pb-12 flex flex-col gap-5 xl:gap-12">
          {/* card 1 start */}
          <div className="card mt-[270px] xl:mt-[100px] bg-white w-fit rounded-lg z-1">
            <div className="card-body p-3 xl:py-6 xl:px-9">
              <span className="card-title text-sm flex items-baseline xl:text-[16px]">
                บริการของเรา{" > "}
                <span className="text-blue-600 text-[20px] xl:text-[32px]">
                  ล้างแอร์
                </span>
              </span>
            </div>
          </div>
          {/* card 1 end */}
        </div>
        <div className="card  bg-white rounded-lg border-[1px] border-gray-300">
          <div className="card-body p-4 xl:px-[20%]">
            <div className="flex items-center justify-between relative">
              <div className="flex flex-col items-center z-10">
                <div className="bg-blue-500 text-white rounded-full p-2">
                  {listIcon}
                </div>
                <span className="text-blue-500">รายการ</span>
              </div>
              <div className="absolute top-1/3 left-2 w-[50%] transform -translate-y-1/2 flex justify-between items-center">
                <hr className="border-t-2 border-blue-500 w-full z-8" />
              </div>
              <div className="flex flex-col items-center z-10">
                <div className="bg-blue-500 text-white rounded-full p-2">
                  {editIcon}
                </div>
                <span className="text-blue-500">กรอกข้อมูลบริการ</span>
              </div>
              <div className="absolute top-1/3 right-2 w-[50%] transform -translate-y-1/2 flex justify-between items-center">
                <hr className="border-t-2 border-gray-700 w-full z-8" />
              </div>
              <div className="flex flex-col items-center z-10">
                <div className="bg-white border-2 border-gray-700 text-gray-700 rounded-full p-2">
                  {cardCheckIcon}
                </div>
                <span className="text-gray-700">ชำระเงิน</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-white rounded-lg lg:ml-36 lg:mr-[550px]">
          <div className="card-body p-3 border border-gray-300 rounded-lg">
            <div className=" p-6 bg-white rounded-lg shadow-md text-[16px] ">
              <h2 className="text-xl font-bold mb-6 text-gray-700">
                กรอกข้อมูลบริการ
              </h2>
              <form>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="mb-4">
                    <label className="block text-black">
                      วันที่สะดวกใช้บริการ
                      <span className="text-rose-700">*</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border bg-white border-gray-300 rounded-lg outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] text-gray-700 placeholder-gray-700"
                      placeholder="กรุณาเลือกวันที่"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-black">
                      เวลาที่สะดวกใช้บริการ
                      <span className="text-rose-700">*</span>
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border bg-white border-gray-300 rounded-lg outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] text-gray-700 placeholder-gray-700"
                      placeholder="กรุณาเลือกเวลา"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-black">
                      ที่อยู่<span className="text-rose-700">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 bg-white border border-gray-300 rounded-lg outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] text-gray-700 placeholder-gray-700"
                      placeholder="กรุณากรอกที่อยู่"
                    />
                  </div>
                  <div className="mb-4">
                    <DropdownList
                      label="เลือกแขวง / ตำบล "
                      id="amphure_id"
                      list={amphures}
                      child="tambon"
                      childsId={["tambon_id"]}
                      setChilds={[setTambons]}
                      name="district"
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border bg-white border-gray-300 rounded-lg outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] text-gray-700 placeholder-gray-700"
                    />
                  </div>
                  <div className="mb-4">
                    <DropdownList
                      label="เลือกเขต / อำเภอ"
                      id="tambon_id"
                      list={tambons}
                      type="text"
                      name="subdistrict"
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border bg-white border-gray-300 rounded-lg outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] text-gray-700 placeholder-gray-700"
                    />
                  </div>
                  <div className="mb-4">
                    <DropdownList
                      label="เลือกจังหวัด "
                      id="province_id"
                      list={provinces}
                      child="amphure"
                      childsId={["amphure_id", "tambon_id"]}
                      setChilds={[setAmphures, setTambons]}
                      type="text"
                      name="province"
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border bg-white border-gray-300 rounded-lg outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] text-gray-700 placeholder-gray-700"
                    />
                  </div>
                  <div className="mb-4 lg:col-span-2">
                    <label className="block text-black">
                      ระบุข้อมูลเพิ่มเติม
                    </label>
                    <textarea
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border bg-white border-gray-300 rounded-lg outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] text-gray-700 placeholder-gray-700"
                      placeholder="กรุณาระบุข้อมูลเพิ่มเติม"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="xl:w-1/3">
          {/* <div className="fixed bottom-0 left-0 right-0 xl:w-1/3"> */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow xl:collapse-open bg-white border border-b-0 border-gray-300 rounded-b-none rounded-t-lg pb-0 mb-0 xl:hidden"
          >
            <div className="collapse-arrow xl:hidden"></div>
            <div className="collapse-title text-[16px] font-bold">
              สรุปรายการ
            </div>
            <div className="collapse-content text-[14px] pb-0">
              <ul className="divide-y divide-gray-100 pb-0">
                {orderItems.map((item) => (
                  <li key={item.service_item_id}>
                    <div className="flex justify-between gap-x-6 py-2 xl:pb-4">
                      <p className="text-black">{item.service_name}</p>
                      <p className="text-end">{item.quantity} เครื่อง</p>
                    </div>
                  </li>
                ))}
                <hr />
                <li>
                  <div className="flex justify-between gap-x-6 py-2 xl:pt-4">
                    <p className="test-gray-700">วันที่</p>
                    <p className="text-black">{formData.date}</p>
                  </div>
                  <div className="flex justify-between gap-x-6 py-2">
                    <p className="test-gray-700">เวลา</p>
                    <p className="text-black">{formData.time} น.</p>
                  </div>
                  <div className="flex justify-between gap-x-6 py-2 xl:pb-4 text-end">
                    <p className="test-gray-700">สถานที่</p>
                    <p className="text-black">
                      {formData.address}{" "}
                      {
                        amphures.find((a) => a.id === selected.amphure_id)
                          ?.name_th
                      }
                      <br />
                      {
                        tambons.find((t) => t.id === selected.tambon_id)
                          ?.name_th
                      }{" "}
                      {
                        provinces.find((p) => p.id === selected.province_id)
                          ?.name_th
                      }
                    </p>
                  </div>
                </li>
                <hr />
                <li>
                  <div className="flex justify-between gap-x-6 pt-2 xl:pt-4">
                    <p className="test-gray-700">Promotion Code</p>
                    <p className="text-red">-50.00 บาท</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            tabIndex={0}
            className="hidden xl:block collapse-open bg-white border border-b-0 border-gray-300 rounded-b-none rounded-t-lg pb-0 mb-0"
          >
            <div className="collapse-arrow xl:hidden"></div>
            <div className="collapse-title text-[16px] font-bold">
              สรุปรายการ
            </div>

            <div className="collapse-content text-[14px] pb-0">
              <ul className="divide-y divide-gray-100 pb-0">
                {orderItems.map((item) => (
                  <li key={item.service_item_id}>
                    <div className="flex justify-between gap-x-6 py-2 xl:pb-4">
                      <p className="text-black">{item.service_name}</p>
                      <p>{item.quantity} เครื่อง</p>
                    </div>
                  </li>
                ))}
                <hr />
                <li>
                  <div className="flex justify-between gap-x-6 py-2 xl:pt-4">
                    <p className="test-gray-700">วันที่</p>
                    <p className="text-black">{formData.date}</p>
                  </div>
                  <div className="flex justify-between gap-x-6 py-2">
                    <p className="test-gray-700">เวลา</p>
                    <p className="text-black">{formData.time} น.</p>
                  </div>
                  <div className="flex justify-between gap-x-6 py-2 xl:pb-4 text-end">
                    <p className="test-gray-700">สถานที่</p>
                    <p className="text-black">
                      {formData.address}{" "}
                      {
                        amphures.find((a) => a.id === selected.amphure_id)
                          ?.name_th
                      }
                      <br />
                      {
                        tambons.find((t) => t.id === selected.tambon_id)
                          ?.name_th
                      }{" "}
                      {
                        provinces.find((p) => p.id === selected.province_id)
                          ?.name_th
                      }
                    </p>
                  </div>
                </li>
                <hr />
              </ul>
            </div>
          </div>
          <div className="card-compact bg-white border border-t-0 border-gray-300 rounded-t-none rounded-b-lg">
            <div className="card-body flex flex-row font-bold">
              <p className=" text-base">รวม</p>
              <p className="text-black text-end text-base">{totalPrice} ฿</p>
            </div>
          </div>
        </div>
        <footer className="font-prompt w-screen text-[16px] xl:px-[10%]">
          {/* <footer className="fixed bottom-0 left-0 right-0 font-prompt w-screen text-[16px] xl:px-[10%]"> */}
          <div className=" bg-white flex gap-3 p-3 xl:justify-between">
            <div className="w-1/2 xl:w-fit">
              <button
                onClick={goToServiceDetail}
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
      </div>
    </section>
  );
}

export default ServiceInformation;