import React, { useState, useContext, createContext } from "react";

const userFilterDataContext = createContext();

function FilterProvider({ children }) {
  /** ส่วน input search */
  const [searchService, setSearchService] = useState("");

  /** ส่วน selected drop down category */
  const [searchByType, setSearchByType] = useState("");
  const [isUserSelected, setIsUserSelected] = useState("");

  /** ส่วน slider จุดที่ 1 */
  const [searchBySlided1, setSearchBySlided1] = useState("");
  const [isUserSlided1, setIsUserSlided1] = useState("");

  /** ส่วน slider จุดที่ 2 */
  const [searchBySlided2, setSearchBySlided2] = useState("");
  const [isUserSlided2, setIsUserSlided2] = useState("");

  /** ส่วน selected drop down sort */
  const [sortByType, setSortByType] = useState("");
  const [isUserSort, setIsUserSort] = useState("");

  return (
    <userFilterDataContext.Provider
      value={{
        searchService,
        setSearchService,

        searchByType,
        setSearchByType,
        isUserSelected,
        setIsUserSelected,

        searchBySlided1,
        setSearchBySlided1,
        isUserSlided1,
        setIsUserSlided1,

        searchBySlided2,
        setSearchBySlided2,
        isUserSlided2,
        setIsUserSlided2,

        sortByType,
        setSortByType,
        isUserSort,
        setIsUserSort,
      }}
    >
      {children}
    </userFilterDataContext.Provider>
  );
}

const useFilter = () => useContext(userFilterDataContext);

export { FilterProvider, useFilter };
