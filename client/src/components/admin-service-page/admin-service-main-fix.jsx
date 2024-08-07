import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import photo1 from "/icons/frame-icon.png";
import photo from "/icons/add-image-icon.png";

function getImageUrl(image) {
  if (typeof image === "string" && image.startsWith("http")) {
    return image;
  } else if (image instanceof File) {
    return URL.createObjectURL(image);
  } else {
    return `http://localhost:4000/uploads/${image}`;
  }
}

function AdminServiceMainFix() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [mainService, setMainService] = useState(null);
  const [subServices, setSubServices] = useState([]);
  const [serviceName, setServiceName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/service/${id}`);
        const { main_service, sub_services } = response.data;
        setMainService(main_service);
        setSubServices(sub_services || []); // ตรวจสอบให้แน่ใจว่า sub_services ไม่เป็น undefined
        console.log("SubServices after fetch:", sub_services); // ตรวจสอบค่าที่นี่
        setServiceName(main_service.service_name);
        setCategory(main_service.category_name);
        setImage(main_service.service_image);
      } catch (error) {
        console.error("Error fetching service data:", error);
      }
    };

    fetchServiceData();
  }, [id]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file); // Set the File object instead of URL
    }
  };

  const handleImageRemove = () => {
    setImage(null);
  };

  const handleSubServiceChange = (service_item_id, field, value) => {
    setSubServices((prevSubServices) =>
      prevSubServices.map((service) =>
        service.service_item_id === service_item_id
          ? { ...service, [field]: value }
          : service
      )
    );
  };

  const handleAddSubService = () => {
    setSubServices((prevSubServices) => [
      ...prevSubServices,
      {
        service_item_id: Date.now(),
        service_name: "",
        service_price: "",
        service_unit: "",
      },
    ]);
  };

  const handleRemoveSubService = (service_item_id) => {
    setSubServices((prevSubServices) =>
      prevSubServices.filter(
        (service) => service.service_item_id !== service_item_id
      )
    );
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("service_name", serviceName);
      formData.append("category_name", category);
      if (image && typeof image !== "string") {
        formData.append("service_image", image);
      }

      if (subServices && subServices.length > 0) {
        const subServicesWithId = subServices.map(
          ({ service_item_id, service_name, service_price, service_unit }) => ({
            service_item_id: service_item_id || null,
            service_name,
            service_price,
            service_unit,
          })
        );
        formData.append("subServices", JSON.stringify(subServicesWithId));
        console.log("SubServices before submit:", subServicesWithId);
      } else {
        console.error("SubServices is empty or undefined");
      }

      const response = await axios.put(
        `http://localhost:4000/service/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response from API:", response);
      alert(response.data.message || "อัปเดตบริการสำเร็จ!");

      // Update the mainService state with the new data
      setMainService(response.data.main_service);

      navigate(`/admin/service/view/${id}`);
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการอัปเดตบริการ:", error);
      alert("เกิดข้อผิดพลาดในการอัปเดตบริการ!");
    }
  };

  if (!mainService) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen p-[40px] flex justify-center">
      <div className="w-full h-full bg-white border rounded-lg flex flex-col overflow-y-scroll">
        {/* Main Service Details */}
        <div className="px-8 py-6 flex items-center mt-5">
          <div className="min-w-[250px]">
            <div className="text-[#646c80] text-base font-medium 2xl:text-lg">
              ชื่อบริการ
            </div>
          </div>
          <input
            type="text"
            className="border rounded px-2 py-1 max-w-[400px] flex-grow 2xl:max-w-[700px] transition-all duration-500"
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
          />
        </div>
        <div className="px-8 py-6 flex items-center">
          <div className="min-w-[250px]">
            <div className="text-[#646c80] text-base font-medium 2xl:text-lg">
              หมวดหมู่
            </div>
          </div>
          <select
            className="border rounded px-2 py-1 max-w-[400px] flex-grow 2xl:max-w-[700px] transition-all duration-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">เลือกหมวดหมู่</option>
            <option value="บริการทั่วไป">บริการทั่วไป</option>
            <option value="บริการห้องครัว">บริการห้องครัว</option>
            <option value="บริการห้องน้ำ">บริการห้องน้ำ</option>
          </select>
        </div>
        <div className="px-8 py-6 flex items-start">
          <div className="min-w-[250px]">
            <div className="text-[#646c80] text-base font-medium 2xl:text-lg">
              รูปภาพ
            </div>
          </div>
          <div className="max-w-[400px] flex-grow 2xl:max-w-[700px] transition-all duration-500">
            <label
              htmlFor="file-upload"
              className="border-[3px] py-6 flex flex-col items-center justify-center cursor-pointer"
            >
              {!image ? (
                <>
                  <img
                    className="w-[48px] h-[48px]"
                    src={photo}
                    alt="add image"
                  />
                  <div className="text-center mt-2">
                    อัพโหลดรูปภาพ หรือ ลากและวางที่นี่ <br />
                    PNG, JPG ขนาดไม่เกิน 5MB
                  </div>
                </>
              ) : typeof image === "string" && image.startsWith("blob:") ? (
                <img
                  src={image}
                  alt="Uploaded"
                  className="max-w-[300px] max-h-32 rounded-[8px]"
                />
              ) : (
                <img
                  src={getImageUrl(image)}
                  alt="Uploaded"
                  className="max-w-[300px] max-h-32 rounded-[8px]"
                />
              )}
            </label>

            <div className="flex justify-between">
              <div className="py-2">ขนาดภาพที่แนะนำ: 1440 x 225 PX</div>
              {image && typeof image === "string" && (
                <button
                  type="button"
                  onClick={handleImageRemove}
                  className="text-[#336df2] text-base font-semibold underline"
                >
                  ลบรูปภาพ
                </button>
              )}
            </div>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
        </div>
        <hr className="border-gray-300 w-[95%] mx-auto" />
        {/* Sub Services */}
        <div className="px-8 py-8 text-[#646c80] text-base font-medium 2xl:text-lg">
          รายการบริการย่อย
        </div>
        {subServices.map((service) => (
          <div
            key={service.service_item_id}
            className="px-8 flex gap-3 items-center mb-4"
          >
            <img
              className="w-[56px] h-[56px]"
              src={photo1}
              alt="service icon"
            />
            <div className="flex flex-row gap-2">
              <div>
                <div className="text-[#646c80] text-sm font-normal leading-[21px] 2xl:text-base min-w-[400px]">
                  ชื่อรายการ
                </div>
                <input
                  type="text"
                  value={service.service_name}
                  onChange={(e) =>
                    handleSubServiceChange(
                      service.service_item_id,
                      "service_name",
                      e.target.value
                    )
                  }
                  className="border rounded px-2 py-1 w-[400px] flex-grow 2xl:max-w-[700px] transition-all duration-500"
                />
              </div>
              <div>
                <div className="text-[#646c80] text-sm font-normal leading-[21px] 2xl:text-base">
                  ราคาบริการ
                </div>
                <input
                  type="text"
                  value={service.service_price}
                  onChange={(e) =>
                    handleSubServiceChange(
                      service.service_item_id,
                      "service_price",
                      e.target.value
                    )
                  }
                  className="border rounded px-2 py-1 max-w-[400px] flex-grow 2xl:max-w-[700px] transition-all duration-500"
                />
              </div>
              <div>
                <div className="text-[#646c80] text-sm font-normal leading-[21px] 2xl:text-base">
                  หน่วยบริการ
                </div>
                <input
                  type="text"
                  value={service.service_unit}
                  onChange={(e) =>
                    handleSubServiceChange(
                      service.service_item_id,
                      "service_unit",
                      e.target.value
                    )
                  }
                  className="border rounded px-2 py-1 max-w-[400px] flex-grow 2xl:max-w-[700px] transition-all duration-500"
                />
              </div>
              <button
                type="button"
                onClick={() => handleRemoveSubService(service.service_item_id)}
                className="text-[#336df2] text-base font-semibold  underline "
              >
                ลบรายการ
              </button>
            </div>
          </div>
        ))}
        <div className="px-8 py-5">
          <button
            onClick={handleAddSubService}
            className=" w-full border border-blue-600 max-w-[175px] h-[45px] rounded-[8px] bg-white flex items-center justify-center gap-[8px] hover:bg-blue-500 active:bg-blue-800"
          >
            <span className="font-prompt font-medium text-[16px] text-blue-600">
              เพิ่มรายการ
            </span>
            <div className="w-[20px] h-[20px] flex items-center justify-center">
              <img src="/icons/plus-icon-blue.svg" alt="plus icon" />
            </div>
          </button>
        </div>
        <hr className="border-gray-300 w-[95%] mx-auto mt-5" />
        <div className="px-8 py-3 flex items-center mt-8">
          <div className="min-w-[250px]">
            <div className="text-[#646c80] text-base font-medium 2xl:text-lg">
              สร้างเมื่อ
            </div>
          </div>
          <div>{new Date(mainService.created_at).toLocaleString()}</div>
        </div>
        <div className="px-8 py-3 flex items-center mb-10">
          <div className="min-w-[250px]">
            <div className="text-[#646c80] text-base font-medium 2xl:text-lg">
              แก้ไขล่าสุด
            </div>
          </div>
          <div>{new Date(mainService.updated_at).toLocaleString()}</div>
        </div>
        <div className="px-8 py-4 flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-[#336df2] text-white px-4 py-2 rounded"
          >
            บันทึกการเปลี่ยนแปลง
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminServiceMainFix;
