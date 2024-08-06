function PromotionForm() {
  return (
    <form action="" className="mt-6">
      <hr className="mb-3" />
      <label
        htmlFor="promotion"
        className="font-semibold text-[16px] text-gray-900"
      >
        Promotion Code
      </label>
      <div className="flex gap-6 items-center">
        <div className="w-2/3 xl:w-1/2 ">
          <input
            className="w-full bg-transparent placeholder:text-[16px] break-words outline outline-gray-300 outline-[1px] focus:outline-blue-600 focus:outline-[1px] focus:text-gray-950 text-gray-950 px-4 py-2.5 mt-1 rounded-lg leading-6 "
            placeholder="กรุณากรอกโค้ดส่วนลด"
            id="promotion"
            name="promotion"
            type="text"
            // onChange={handleChange}
            // value={data.creditNumber}
          />
        </div>
        <div className="w-1/3 xl:w-1/2">
          <button
            type="button"
            className="w-full btn btn-ghost rounded-lg text-white bg-blue-600  hover:bg-blue-500 hover:text-white focus:bg-blue-800 focus:text-white"
          >
            ใช้โค้ด
          </button>
        </div>
      </div>
      <hr className="mt-6" />
    </form>
  );
}

export default PromotionForm;
