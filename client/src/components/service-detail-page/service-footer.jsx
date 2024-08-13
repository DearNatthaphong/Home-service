import {
  Collapse,
  Typography,
  Card,
  CardContent,
  IconButton
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { useService } from '../../context/service-context';
import { formatPrice } from '../../utils/price-format';
import { useNavigate } from 'react-router-dom';

function ServiceFooter() {
  const [open, setOpen] = useState(false);

  const {
    orderItems,
    allServiceItems,
    totalPrice,
    createOrder,
    createOrderItems
  } = useService();

  const getServiceItemById = (serviceItemId) =>
    allServiceItems.find((item) => item.serviceItemId === serviceItemId);
  const navigate = useNavigate();

  const handleClicktoNext = async () => {
    const orderId = await createOrder(totalPrice);
    await createOrderItems(orderId, orderItems);
    navigate(`/services/orders/${orderId}/appointments`);
  };

  return (
    <footer className="w-full h-auto flex flex-col items-center justify-center shadow-shadow fixed z-10 bottom-0 bg-background md:bg-white">
      <div className="w-full max-w-[1120px] h-full">
        <div className="w-full md:hidden">
          <Card className="shadow-none border border-gray-300 rounded-t-xl border-b-0">
            <CardContent className="text-base flex justify-between items-center pb-1">
              <p className="text-gray-900">สรุปรายการ</p>
              <IconButton
                className="p-0 text-gray-900"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                style={{
                  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s'
                }}
              >
                <ArrowDropDownIcon />
              </IconButton>
            </CardContent>
            <Collapse in={open}>
              <CardContent className="overflow-y-auto max-h-auto border-0 py-2">
                <Typography className="m-0" paragraph>
                  {orderItems.map((orderItem) => {
                    const serviceItem = getServiceItemById(
                      orderItem.serviceItemId
                    );
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
                </Typography>
              </CardContent>
            </Collapse>
            <CardContent className="py-0 border-b-2 border-gray-300">
              <div className="text-base flex justify-between gap-x-6 pb-2">
                <p className="text-gray-700">รวม</p>
                <p className="text-black font-bold text-lg text-end">
                  {formatPrice(totalPrice)}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full h-[70px] bg-white p-3 flex gap-3 md:justify-between">
          <div className="w-1/2 md:w-1/6">
            <button
              type="button"
              onClick={() => navigate(`/servicelist`)}
              className="btn btn-outline text-blue-600 border-blue-600 hover:bg-white hover:text-blue-400 hover:border-blue-400 focus:text-blue-800 focus:border-blue-800 w-full"
            >
              <span className="text-lg">{'< '}ย้อนกลับ</span>
            </button>
          </div>
          <div className="w-1/2 md:w-1/6">
            <button
              type="button"
              onClick={handleClicktoNext}
              className={
                totalPrice > 0
                  ? 'btn btn-ghost text-white bg-blue-600 hover:bg-blue-500 hover:text-white focus:bg-blue-800 focus:text-white w-full'
                  : 'w-full text-white btn btn-outline-secondary'
              }
              disabled={totalPrice === 0}
            >
              <span className="text-lg">ดำเนินการต่อ {' >'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ServiceFooter;
