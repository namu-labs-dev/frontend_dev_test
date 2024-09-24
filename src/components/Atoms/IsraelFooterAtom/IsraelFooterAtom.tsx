import React, { useState } from "react";
import SVGAtom from "../SVGAtom/SVGAtom";
import * as svgs from "public/svgs";

type Props = {
  title: string;
};

type TabItemProps = {
  iconName: keyof typeof svgs;
  isActive: boolean;
  onClick: () => void;
};

const TabItem = (props: TabItemProps) => {
  const { iconName, isActive, onClick } = props;

  return (
    <div
      onClick={onClick}
      className={`flex cursor-pointer flex-col items-center justify-center p-2 transition-all duration-200 ${
        isActive
          ? "border-t-2 border-[#00EC97]"
          : "border-t-2 border-transparent hover:bg-gray-700"
      }`}
    >
      <SVGAtom
        iconName={iconName}
        className='h-6 w-6'
        color={`${isActive ? "white" : ""}`}
      />
    </div>
  );
};

export type Tab = {
  id: string;
  iconName: keyof typeof svgs;
  content: React.ReactNode;
};

type TabProps = {
  tabs: Tab[];
  activeTabId: string;
  setActiveTabId: React.Dispatch<React.SetStateAction<string>>;
};

export const IsraelFooterAtom = (props: TabProps) => {
  const { tabs, activeTabId, setActiveTabId } = props;
  console.log(tabs);

  return (
    <div>
      <div className='flex justify-around bg-[#262626] pb-2'>
        {tabs.map((tab) => (
          <TabItem
            key={tab.id}
            iconName={tab.iconName}
            isActive={activeTabId === tab.id}
            onClick={() => setActiveTabId(tab.id)}
          />
        ))}
      </div>
    </div>
  );
};
