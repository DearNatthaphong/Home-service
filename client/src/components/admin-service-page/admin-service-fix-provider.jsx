// import React, { createContext, useContext, useState } from "react";

// // สร้าง Context
// const ServiceContext = createContext();

// // สร้าง Provider
// export function ServiceProvider({ children }) {
//   const [serviceData, setServiceData] = useState(null);

//   const updateServiceData = (data) => {
//     setServiceData(data);
//   };

//   return (
//     <ServiceContext.Provider value={{ serviceData, updateServiceData }}>
//       {children}
//     </ServiceContext.Provider>
//   );
// }

// // สร้าง Custom Hook สำหรับใช้ Context
// export function useService() {
//   const context = useContext(ServiceContext);
//   if (!context) {
//     throw new Error("useService must be used within a ServiceProvider");
//   }
//   return context;
// }
