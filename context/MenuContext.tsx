"use client";
import React, { createContext, useState, ReactNode } from "react";

export const MenuContext = createContext<{
  open: boolean;
  toggle: () => void;
}>({
  open: false,
  toggle: () => {},
});

const MenuContextProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(true);

  const toggle = () => {
    console.log({open});
    setOpen((prev) => !prev);
  };

  return (
    <MenuContext.Provider value={{ open, toggle }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
