import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import axios from "axios";
import photo from "/icons/add-image-icon.png";
import photo1 from "/icons/frame-icon.png";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AdminServiceMain2 = forwardRef((props, ref) => {
  const submitRef = useRef();
  const navigate = useNavigate();

  const [serviceName, setServiceName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [subServices, setSubServices] = useState([
    { id: Date.now(), name: "", price: "", unit: "" },
  ]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleAddSubService = () => {
    setSubServices([
      ...subServices,
      { id: Date.now(), name: "", price: "", unit: "" },
    ]);
  };

  const handleSubServiceChange = (id, field, value) => {
    setSubServices((prevSubServices) =>
      prevSubServices.map((service) =>
        service.id === id ? { ...service, [field]: value } : service
      )
    );
  };

  const handleRemoveSubService = (id) => {
    setSubServices((prevSubServices) =>
      prevSubServices.filter((service) => service.id !== id)
    );
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("service_name", serviceName);
      formData.append("category_name", category);
      if (image) {
        formData.append("service_image", image);
      }
      formData.append(
        "subServices",
        JSON.stringify(subServices.map(({ id, ...rest }) => rest))
      );

      const response = await axios.post(
        "http://localhost:4000/service",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.success("สร้างบริการสำเร็จ!");
      navigate(`/admin/service`);
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการสร้างบริการ:", error);
      toast.error("เกิดข้อผิดพลาดในการสร้างบริการ!");
    }
  };

  useImperativeHandle(ref, () => ({
    handleSubmit,
  }));
  return (
    <div className="w-full h-screen p-[40px] flex justify-center">
      <div className="w-full h-full bg-white border rounded-lg flex flex-col overflow-y-scroll">
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
              className="border-dashed border-[3px] py-6 flex flex-col items-center justify-center cursor-pointer"
            >
              {!image && (
                <img
                  className="w-[48px] h-[48px]"
                  src={photo}
                  alt="add image"
                />
              )}
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt="Uploaded"
                  className="max-h-32 rounded-[8px]"
                />
              ) : (
                <div className="text-center">
                  อัพโหลดรูปภาพ หรือ ลากและวางที่นี่ <br />
                  PNG, JPG ขนาดไม่เกิด 5MB
                </div>
              )}
            </label>
            <div className="py-2">ขนาดภาพที่แนะนำ: 1440 x 225 PX</div>
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
          <div key={service.id} className="px-8 flex gap-3 items-center mb-4">
            <img className="" src={photo1} alt="service icon" />
            <div>
              <div className="text-[#646c80] text-sm font-normal leading-[21px] 2xl:text-base">
                ชื่อรายการ
              </div>
              <input
                type="text"
                className="border rounded px-2 py-1 min-w-[400px]"
                value={service.name}
                onChange={(e) =>
                  handleSubServiceChange(service.id, "name", e.target.value)
                }
              />
            </div>
            <div>
              <div className="text-[#646c80] text-sm font-normal leading-[21px] 2xl:text-base">
                ค่าบริการ / 1 หน่วย
              </div>
              <input
                type="text"
                className="border rounded px-2 py-1 min-w-[240px]"
                value={service.price}
                onChange={(e) =>
                  handleSubServiceChange(service.id, "price", e.target.value)
                }
              />
            </div>
            <div>
              <div className="text-[#646c80] text-sm font-normal leading-[21px] 2xl:text-base">
                หน่วยการบริการ
              </div>
              <input
                type="text"
                className="border rounded px-2 py-1 min-w-[240px]"
                value={service.unit}
                onChange={(e) =>
                  handleSubServiceChange(service.id, "unit", e.target.value)
                }
              />
            </div>
            <button
              onClick={() => handleRemoveSubService(service.id)}
              className="text-[#b3b8c4] text-base font-semibold underline"
            >
              ลบรายการ
            </button>
          </div>
        ))}
        <div className="w-full h-full px-8 py-8 mb-10">
          <button
            onClick={handleAddSubService}
            className="group w-full border border-blue-600 max-w-[175px] h-[45px] rounded-[8px] bg-white flex items-center justify-center gap-[8px] hover:bg-blue-500 active:bg-blue-800 "
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
      </div>
    </div>
  );
});

export default AdminServiceMain2;
