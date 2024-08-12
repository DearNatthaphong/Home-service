import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import photo1 from "/icons/frame-icon.png";
import photo from "/icons/add-image-icon.png";
import { toast } from "react-toastify";
import uuid4 from "uuid4";
import supabase from "./supabase-client";

function getImageUrl(image) {
  if (typeof image === "string" && image.startsWith("http")) {
    return image;
  } else if (typeof image === "object") {
    return URL.createObjectURL(image);
  } else {
    return null;
  }
}

const uploadphoto = async (image) => {
  const avatarFile = image;
  console.log(avatarFile);
  const filename = uuid4();
  console.log(filename);
  // const { data, error } = await supabase.from("services").select();
  const { data, error } = await supabase.storage
    .from("servicephoto")
    .upload(`service/${filename}`, avatarFile);

  const { data: url } = supabase.storage
    .from("servicephoto")
    .getPublicUrl(`service/${filename}`);

  console.log(data);
  console.log(error);
  console.log(url);

  return url.publicUrl;
};

const AdminServiceMainFix = forwardRef((props, ref) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const submitRef = useRef();

  const [mainService, setMainService] = useState(null);
  const [subServices, setSubServices] = useState([]);
  const [serviceName, setServiceName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/service/auth/${id}`
        );
        const { main_service, sub_services } = response.data;
        setMainService(main_service);
        setSubServices(sub_services || []);
        console.log("SubServices after fetch:", sub_services);
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
      setImage(file);
      // setImage(URL.createObjectURL(file));
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
        service_item_name: "",
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
      if (image && typeof image === "string") {
        formData.append("service_image", image);
      } else if (image && typeof image === "object") {
        const result = await uploadphoto(image);
        formData.append("service_image", result);
        console.log(result);
      }

      if (subServices && subServices.length > 0) {
        const subServicesWithId = subServices.map(
          ({
            service_item_id,
            service_item_name,
            service_price,
            service_unit,
          }) => ({
            service_item_id: service_item_id || null,
            service_item_name,
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
        `http://localhost:4000/service/auth/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("อัปเดตเซอร์วิสสำเร็จ!");

      setMainService(response.data.main_service);

      navigate(`/admin/service/view/${id}`);
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการอัปเดตบริการ:", error);
      toast.error("เกิดข้อผิดพลาดในการอัปเดตเซอร์วิส!");
    }
  };

  useImperativeHandle(ref, () => ({
    handleSubmit,
  }));

  if (!mainService) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-screen p-[40px] flex justify-center">
      <div className="w-full h-full bg-white border rounded-lg flex flex-col overflow-y-scroll">
        <div className="px-8 py-6 flex items-center mt-5">
          <div className="min-w-[250px]">
            <div className="text-[#646c80] text-base font-medium 2xl:text-lg ">
              ชื่อบริการ
            </div>
          </div>
          <input
            type="text"
            className="border rounded px-2 py-1 max-w-[400px] flex-grow 2xl:max-w-[700px] transition-all duration-500 bg-white text-black"
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
            className="border rounded px-2 py-1 max-w-[400px] flex-grow 2xl:max-w-[700px] transition-all duration-500 bg-white text-black"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">เลือกหมวดหมู่</option>
            <option value="บริการทั่วไป">บริการทั่วไป</option>
            <option value="บริการห้องครัว">บริการห้องครัว</option>
            <option value="บริการห้องน้ำ">บริการห้องน้ำ</option>
            <option value="บริการอุปกรณ์ไฟฟ้า">บริการอุปกรณ์ไฟฟ้า</option>
            <option value="บริการห้องอเนกประสงค์">บริการห้องอเนกประสงค์</option>
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
              className="border-[3px] py-6 flex flex-col items-center justify-center cursor-pointer bg-white text-black"
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

            <div className="flex justify-between bg-white text-black">
              <div className="py-2">ขนาดภาพที่แนะนำ: 1440 x 225 PX</div>
              {image && (
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
                  value={service.service_item_name}
                  onChange={(e) =>
                    handleSubServiceChange(
                      service.service_item_id,
                      "service_item_name",
                      e.target.value
                    )
                  }
                  className="border rounded px-2 py-1 w-[400px] flex-grow 2xl:max-w-[700px] transition-all duration-500 bg-white text-black"
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
                  className="border rounded px-2 py-1 max-w-[400px] flex-grow 2xl:max-w-[700px] transition-all duration-500 bg-white text-black"
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
                  className="border rounded px-2 py-1 max-w-[400px] flex-grow 2xl:max-w-[700px] transition-all duration-500 bg-white text-black"
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
            className="group w-full border border-blue-600 max-w-[175px] h-[45px] rounded-[8px] bg-white flex items-center justify-center gap-[8px] hover:bg-blue-500 active:bg-blue-800"
          >
            <span className="font-prompt font-medium text-[16px] text-blue-600 group-hover:text-white">
              เพิ่มรายการ
            </span>
            <div className="w-[20px] h-[20px] flex items-center justify-center">
              <img
                src="/icons/plus-icon-blue.svg"
                alt="plus icon"
                className="group-hover:invert group-hover:brightness-0"
              />
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
          <div>
            {new Date(mainService.created_at)
              .toLocaleDateString(undefined, {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              })
              .replace(/\//g, "/")}{" "}
            {new Date(mainService.updated_at)
              .toLocaleTimeString(undefined, {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })
              .replace(" ", "")}
          </div>
        </div>
        <div className="px-8 py-3 flex items-center mb-10">
          <div className="min-w-[250px]">
            <div className="text-[#646c80] text-base font-medium 2xl:text-lg">
              แก้ไขล่าสุด
            </div>
          </div>
          <div>
            {new Date(mainService.updated_at)
              .toLocaleDateString(undefined, {
                month: "2-digit",
                day: "2-digit",
                year: "numeric",
              })
              .replace(/\//g, "/")}{" "}
            {new Date(mainService.updated_at)
              .toLocaleTimeString(undefined, {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })
              .replace(" ", "")}
          </div>
        </div>
      </div>
    </div>
  );
});

export default AdminServiceMainFix;
