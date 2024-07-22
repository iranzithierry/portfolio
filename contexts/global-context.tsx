"use client";
import React, { createContext, useContext, useState } from "react";

interface GlobalContextType {
  items: any[];
  setItems:React.Dispatch<React.SetStateAction<any[]>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<any[]>([]);

  return (
    <GlobalContext.Provider value={{ items, setItems }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal must be used within an GlobalProvider");
  }
  return context;
};