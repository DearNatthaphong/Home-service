import React, { useState, useContext, createContext } from "react";

const UserFilterDataContext = createContext();

function FilterProvider({ children }) {
  const [searchService, setSearchService] = useState("");

  return (
    <UserFilterDataContext.Provider value={{ searchService, setSearchService }}>
      {children}
    </UserFilterDataContext.Provider>
  );
}

const UseFilter = () => useContext(UserFilterDataContext);

export { FilterProvider, UseFilter };
