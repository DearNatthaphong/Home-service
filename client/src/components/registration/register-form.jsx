import { Link } from 'react-router-dom';

function RegisterForm() {
  return (
    <section className="bg-background w-screen h-screen flex flex-col justify-center items-center font-prompt">
      <div className="flex flex-col px-4 py-8 mx-4 sm:px-20 text-base leading-6 bg-white rounded-xl border-[1px] border-gray-300 border-solid max-w-[614px]">
        <div className="text-xl sm:text-3xl  font-bold text-center text-blue-950">
          ลงทะเบียน
        </div>
        <form action="" className="flex flex-col">
          <label
            htmlFor="fullname"
            className="mt-6 font-semibold text-gray-900"
          >
            ชื่อ - นามสกุล<span className="text-rose-700">*</span>
          </label>
          <input
            className="w-full px-4 py-2.5 mt-1 placeholder-gray-700 bg-white rounded-lg border border-gray-300 border-solid"
            // className="input input-bordered w-full max-w-xs"
            placeholder="กรุณากรอกชื่อ นามสกุล"
            id="fullname"
            name="fullname"
            type="text"
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
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
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
          />
          <label htmlFor="pwd" className="mt-6 font-semibold text-gray-900">
            รหัสผ่าน<span className="text-rose-700">*</span>
          </label>
          <input
            className="w-full px-4 py-2.5 mt-1 placeholder-gray-700 bg-white rounded-lg border border-gray-300 border-solid"
            placeholder="กรุณากรอกรหัสผ่าน"
            id="pwd"
            name="pwd"
            type="password"
          />
          <div className="flex justify-center gap-3 my-10">
            <input
              type="checkbox"
              className="checkbox border-gray-300"
              id="awareness"
              name="awareness"
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
          <button className="justify-center items-center px-6 py-2.5 font-medium text-center text-white whitespace-nowrap bg-blue-600 rounded-lg mb-3">
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
