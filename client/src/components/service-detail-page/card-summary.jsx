import { useService } from '../../context/service-context';
import { formatPrice } from '../../utils/price-format';

function CardSummary() {
  const { orderItems, allServiceItems, totalPrice } = useService();
  const getServiceItemById = (serviceItemId) =>
    allServiceItems.find((item) => item.serviceItemId === serviceItemId);

  return (
    <div className="hidden md:w-1/3 md:block">
      <div className="bg-white border border-gray-300 rounded-lg p-3 text-gray-700">
        <div className="text-[16px] mb-3 xl:text-[20px] font-bold">
          สรุปรายการ
        </div>
        {orderItems.map((orderItem) => {
          const serviceItem = getServiceItemById(orderItem.serviceItemId);
          return (
            <p
              className="flex justify-between pb-2 text-gray-700"
              key={orderItem.serviceItemId}
            >
              <span className="text-black font-light">
                {serviceItem?.serviceItemName}
              </span>
              <span className="text-end text-gray-900 font-medium">
                {orderItem.quantity} รายการ
              </span>
            </p>
          );
        })}
        <div className="border-t border-gray-200 my-4"></div>
        <div className="text-[14px]">
          <div className="flex justify-between my-2 text-lg">
            <span>รวม</span>
            <span className="font-bold text-black ">
              {formatPrice(totalPrice)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSummary;
