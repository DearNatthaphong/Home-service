import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authentication';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { registerValidate } from '../../validations/register-validations';

function RegisterForm() {
  const [data, setData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    awareness: false
  });

  const { register } = useAuth();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = registerValidate(data);

    if (Object.keys(newErrors).length === 0) {
      register(data);
    } else {
      toast.error(Object.values(newErrors)[0]);
    }
  };

  return (
    <section className="bg-background text-black w-screen flex flex-col justify-center items-center font-prompt">
      <div className="flex flex-col px-4 py-8 mx-4 my-8 sm:mt-10 sm:mb-20 sm:px-20 text-base leading-6 bg-white rounded-xl border-[1px] border-gray-300 border-solid max-w-[614px]">
        <div className="text-xl sm:text-3xl  font-bold text-center text-blue-950">
          ลงทะเบียน
        </div>
        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
          <label
            htmlFor="fullName"
            className="mt-6 font-semibold text-gray-900"
          >
            ชื่อ - นามสกุล<span className="text-rose-700">*</span>
          </label>
          <input
            className="w-full px-4 py-2.5 mt-1 placeholder-gray-700 bg-white rounded-lg border border-gray-300 border-solid"
            placeholder="กรุณากรอกชื่อ นามสกุล"
            id="fullName"
            name="fullName"
            type="text"
            onChange={handleChange}
            value={data.fullName}
          />
          <label
            htmlFor="phoneNumber"
            className="mt-6 font-semibold text-gray-900"
          >
            เบอร์โทรศัพท์<span className="text-rose-700">*</span>
          </label>
          <input
            className="w-full px-4 py-2.5 mt-1 placeholder-gray-700 bg-white rounded-lg border border-gray-300 border-solid"
            placeholder="กรุณากรอกเบอร์โทรศัพท์"
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            onChange={handleChange}
            value={data.phoneNumber}
          />
          <label htmlFor="email" className="mt-6 font-semibold text-gray-900">
            อีเมล<span className="text-rose-700">*</span>
          </label>
          <input
            className="w-full px-4 py-2.5 mt-1 placeholder-gray-700 bg-white rounded-lg border border-gray-300 border-solid"
            placeholder="กรุณากรอกอีเมล"
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
            value={data.email}
          />
          <label
            htmlFor="password"
            className="mt-6 font-semibold text-gray-900"
          >
            รหัสผ่าน<span className="text-rose-700">*</span>
          </label>
          <input
            className="w-full px-4 py-2.5 mt-1 placeholder-gray-700 bg-white rounded-lg border border-gray-300 border-solid"
            placeholder="กรุณากรอกรหัสผ่าน"
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            value={data.password}
          />
          <div className="flex justify-center gap-3 my-10">
            <input
              type="checkbox"
              className="checkbox border-gray-300"
              id="awareness"
              name="awareness"
              onChange={handleChange}
              checked={data.awareness}
            />
            <label className="text-gray-900 leading-7" htmlFor="awareness">
              ยอมรับ
              <span className="font-semibold text-blue-600 underline px-2">
                ข้อตกลงและเงื่อนไข
              </span>
              และ
              <span className="pl-2 font-semibold text-blue-600 underline">
                นโยบายความเป็นส่วนตัว
              </span>
            </label>
          </div>
          <button
            className="justify-center items-center px-6 py-2.5 font-medium text-center text-white whitespace-nowrap bg-blue-600 rounded-lg mb-3"
            type="submit"
          >
            ลงทะเบียน
          </button>
        </form>
        <Link
          className="self-center mt-6 font-semibold text-blue-600 underline cursor-pointer"
          to="/login"
        >
          กลับไปหน้าเข้าสู่ระบบ
        </Link>
      </div>
    </section>
  );
}

export default RegisterForm;
