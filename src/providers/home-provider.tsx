"use client";

import { createContext, useContext, useState } from "react";

type HomeContextType = {
  activeItem: string;
  setActiveItem: (item: string) => void;
};

export const HomeContext = createContext<HomeContextType>({
  activeItem: "wallet",
  setActiveItem: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const HomeProvider = (props: Props) => {
  const [activeItem, setActiveItem] = useState<string>("wallet");
  return (
    <HomeContext.Provider value={{ activeItem, setActiveItem }}>
      {props.children}
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error(
      "useHomeContext must be used/called within the HomeProvider"
    );
  }
  return context;
};

export default HomeProvider;
