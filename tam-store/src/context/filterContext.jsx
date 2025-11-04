import { createContext, useState } from "react";

export const FilterContext = createContext({});

export const FilterProvider = ({ children }) => {
  const [currentFilter, setCurrentFilter] = useState(null);

  return (
    <FilterContext.Provider value={{ currentFilter, setCurrentFilter }}>
      {children}
    </FilterContext.Provider>
  );
};