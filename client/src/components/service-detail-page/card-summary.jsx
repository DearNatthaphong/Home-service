import React, { useState, useEffect } from 'react';
// import SummaryDetail from './summary-detail';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import SummaryPrice from './summary-price';

function CardSummary() {
  return (
    <div className="hidden md:w-1/3 md:block">
      <div className="bg-white border border-gray-300 rounded-lg p-3 text-gray-700">
        <div className="text-[16px] xl:text-[20px] font-bold">สรุปรายการ</div>
        <div className="border-t border-gray-200 my-4"></div>{' '}
        {/* Divider line */}
        <div className="text-[14px]">
          <ul>{/* <SummaryDetail /> */}</ul>
          <div className="flex justify-between my-2 text-lg">
            <span>รวม</span>
            <span className="font-bold text-black ">0.00 บาท</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSummary;
