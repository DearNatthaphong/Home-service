import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { useService } from '../../context/service-context';
import { formatPrice } from '../../utils/price-format';

function CardBody() {
  const { serviceName, allServiceItems, orderItems, updateOrderItems } =
    useService();

  const getQuantity = (serviceItemId) => {
    const item = orderItems.find(
      (orderItem) => orderItem.serviceItemId === serviceItemId
    );
    return item ? item.quantity : 0;
  };

  return (
    <div className="md:px-0 md:w-2/3">
      <div className="card bg-white rounded-lg border-[1px] border-gray-300">
        <div className="card-body px-3 py-4 md:px-6">
          <h2 className="card-title text-[18px] text-gray-700">
            เลือกรายการบริการ{serviceName}
          </h2>
          {allServiceItems.map((item) => (
            <div className="text-black text-[16px]" key={item.serviceItemId}>
              <div className="flex justify-between border-b py-3 border-gray-200 last:border-b-0">
                <div>
                  <h3 className="text-lg font-medium">
                    {/* 9,000 - 18,000 BTU, แบบติดผนัง */}
                    {item.serviceItemName}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    <LocalOfferOutlinedIcon className="text-sm mr-2" />
                    {/* 800.00 ฿ /เครื่อง */}
                    {formatPrice(item.servicePrice)} / {item.serviceUnit}
                  </p>
                </div>
                <div className="h-fit">
                  <div className="flex justify-between">
                    <button
                      onClick={() => {
                        const currentQuantity = getQuantity(item.serviceItemId);
                        if (currentQuantity > 0) {
                          updateOrderItems(
                            item.serviceItemId,
                            currentQuantity - 1
                          );
                        }
                      }}
                      className="btn btn-sm bg-white border border-blue-600 text-blue-600 text-xl"
                    >
                      -
                    </button>
                    <div className="justify-center items-center flex mx-5">
                      {getQuantity(item.serviceItemId)}
                    </div>
                    <button
                      onClick={() =>
                        updateOrderItems(
                          item.serviceItemId,
                          getQuantity(item.serviceItemId) + 1
                        )
                      }
                      className="btn btn-sm bg-white border border-blue-600 text-blue-600 text-xl"
                    >
                      +
                    </button>
                    <hr className="bg-gray-700 w-full mt-3 " />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardBody;
