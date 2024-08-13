import React, { useState, createContext, useContext } from 'react';

const userServiceDetailContext = createContext();

function ServiceDetailProvider({ children }) {
  /** ส่วนของการทำ Selected Dropdown Start */
  const [provinces, setProvinces] = useState([]);
  const [amphures, setAmphures] = useState([]);
  const [tambons, setTambons] = useState([]);
  const [selected, setSelected] = useState({
    province_id: undefined,
    amphure_id: undefined,
    tambon_id: undefined
  });

  const [selectedName, setSelectedName] = useState({
    province_id: undefined,
    amphure_id: undefined,
    tambon_id: undefined
  });
  /** ส่วนของการทำ Selected Dropdown End */

  /** ข้อมูลส่วนอื่นๆ Start */
  const [isDate, setIsDate] = useState('');
  const [isTime, setIsTime] = useState('');
  const [isAddress, setIsAddress] = useState('');
  const [isSpecify, setIsSpecify] = useState('');
  /** ข้อมูลส่วนอื่นๆ End */

  return (
    <userServiceDetailContext.Provider
      value={{
        provinces,
        setProvinces,
        amphures,
        setAmphures,
        tambons,
        setTambons,
        selected,
        setSelected,
        selectedName,
        setSelectedName,
        isDate,
        setIsDate,
        isTime,
        setIsTime,
        isAddress,
        setIsAddress,
        isSpecify,
        setIsSpecify
      }}
    >
      {children}
    </userServiceDetailContext.Provider>
  );
}

const useServiceDetail = () => useContext(userServiceDetailContext);
export { ServiceDetailProvider, useServiceDetail };
