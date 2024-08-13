import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Collapse,
  Typography,
  Card,
  CardContent,
  IconButton
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import UserServiceSummaryMini from './user-service-summary-mini';
import { formatPrice } from '../../utils/price-format';
import { useAppointment } from '../../context/appointment-context';
import { useServiceDetail } from '../../context/user-service-detail-context';
import { usePayment } from '../../context/payment-context';

function UserServiceDetailFooter() {
  const [open, setOpen] = useState(false);
  const { selectedName, isDate, isTime, isAddress, isSpecify } =
    useServiceDetail();

  const { totalPrice, createAppointment, id } = useAppointment();
  const { createClientSecret } = usePayment();

  const navigate = useNavigate();

  const data = {
    serviceDate: isDate,
    serviceTime: isTime,
    address: isAddress,
    subdistrict: selectedName.tambon_id,
    district: selectedName.amphure_id,
    province: selectedName.province_id
  };

  const handleClickToNext = async () => {
    await createAppointment(id, data);
    navigate(`/payment/${id}`);
    await createClientSecret(id);
  };

  // const getOrder = async () => {
  //   const result = await axios(
  //     `http://localhost:4000/payment/orders/${params.id}`
  //   );
  //   setOrder(result.data);
  // };

  // useEffect(() => {
  //   if (params.id) {
  //     getOrder();
  //   }
  // }, []);

  // const handleClicktoNext = async () => {
  //   try {
  //     await createClientSecret(params.id);
  //     navigate(`/payment/${params.id}`);
  //   } catch (error) {
  //     console.log(error);
  //     toast.error(error.response.data.message);
  //   }
  // };

  return (
    <footer className="w-full h-auto flex flex-col items-center justify-center shadow-shadow fixed z-10 bottom-0 bg-background md:bg-white">
      <div className="w-full max-w-[1120px] h-full">
        <div className="w-full md:hidden">
          <Card className="shadow-none border border-gray-300 rounded-t-xl border-b-0 ">
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
                  <UserServiceSummaryMini />
                </Typography>
              </CardContent>
            </Collapse>
            <CardContent className="py-0 border-b-2 border-gray-300 ">
              <div className="mb-[15px] mt-[8px] flex justify-between">
                <span className="font-prompt text-[16px] text-gray-700">
                  รวม
                </span>
                <span className="font-prompt text-[16px] font-medium text-black">
                  {formatPrice(totalPrice)}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full h-[70px] bg-white p-3 flex justify-between">
          <button
            onClick={() =>
              navigate(`/service/orders/${params.id}/appointments`)
            }
            className="w-full max-w-[162px] md:w-2/3 btn btn-outline text-blue-600 border-blue-600 hover:bg-white hover:text-blue-400 hover:border-blue-400 focus:text-blue-800 focus:border-blue-800 "
          >{`< ย้อนกลับ`}</button>
          <button
            onClick={handleClickToNext}
            className="w-full max-w-[162px] bg-blue-600 md:w-2/3 btn btn-outline text-white border-blue-600 hover:bg-blue-500 focus:border-blue-800 "
          >{`ดำเนินการต่อ >`}</button>
        </div>
      </div>
    </footer>
  );
}

export default UserServiceDetailFooter;
