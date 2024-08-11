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
// import SummaryDetail from './summary-detail.jsx';
// import SummaryPrice from './summary-price';
import axios from 'axios';
// import SummaryPriceMockup from './summary-price-mockup';

function ServiceFooter() {
  const [open, setOpen] = useState(false);
  // const navigate = useNavigate();
  // const [order, setOrder] = useState({});
  // const params = useParams();

  // const getOrder = async () => {
  //   const result = await axios(
  //     `http://localhost:4000/payment/orders/${params.id}`
  //   );
  //   setOrder(result.data);
  // };

  // useEffect(() => {
  //   getOrder();
  // }, []);

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
                  {/* <SummaryDetail details={order} isSummary={true} /> */}
                </Typography>
              </CardContent>
            </Collapse>
            <CardContent className="py-0 border-b-2 border-gray-300">
              {/* <SummaryPrice details={order} /> */}
              {/* <SummaryPriceMockup /> */}
              <div className="text-base flex justify-between gap-x-6 pb-2">
                <p className="text-gray-700">รวม</p>
                <p className="text-black font-bold text-lg text-end">
                  0.00 บาท
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full h-[70px] bg-white p-3 flex gap-3 md:justify-between">
          <div className="w-1/2 md:w-1/6">
            <button
              // onClick={goToServiceList}
              type="button"
              className="btn btn-outline text-blue-600 border-blue-600 hover:bg-white hover:text-blue-400 hover:border-blue-400 focus:text-blue-800 focus:border-blue-800 w-full"
            >
              <span className="xl:px-4 text-lg">{'< '}ย้อนกลับ</span>
            </button>
          </div>
          <div className="w-1/2 md:w-1/6">
            <button
              type="button"
              // className="btn btn-ghost text-white bg-blue-600  hover:bg-blue-500 hover:text-white focus:bg-blue-800 focus:text-white w-full"
              // onClick={handleSubmit}
              className="w-full text-white btn btn-outline-secondary"
              disabled
            >
              {' '}
              <span className="xl:px-4 text-lg">ดำเนินการต่อ {' >'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default ServiceFooter;
