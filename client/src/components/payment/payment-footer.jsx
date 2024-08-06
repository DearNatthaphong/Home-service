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
import SummaryDetail from './summary-detail.jsx';
import SummaryPrice from './summary-price.jsx';
import axios from 'axios';

function PaymentFooter() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [order, setOrder] = useState({});
  const params = useParams();

  const getOrder = async () => {
    const result = await axios(
      `http://localhost:4000/payment/orders/${params.id}`
    );
    setOrder(result.data);
  };

  useEffect(() => {
    getOrder();
  }, []);

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
                  <SummaryDetail details={order} isSummary={true} />
                </Typography>
              </CardContent>
            </Collapse>
            <CardContent className="py-0 border-b-2 border-gray-300">
              <SummaryPrice details={order} />
            </CardContent>
          </Card>
        </div>
        <div className="w-full h-[70px] bg-white p-3">
          <button
            onClick={() =>
              navigate(`/service/information/orders/${params.id}/appointments`)
            }
            className="w-full md:w-2/3 btn btn-outline text-blue-600 border-blue-600 hover:bg-white hover:text-blue-400 hover:border-blue-400 focus:text-blue-800 focus:border-blue-800 "
          >{`< ย้อนกลับ`}</button>
        </div>
      </div>
    </footer>
  );
}

export default PaymentFooter;
