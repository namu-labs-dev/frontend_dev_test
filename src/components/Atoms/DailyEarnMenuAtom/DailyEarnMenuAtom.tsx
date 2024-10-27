import React, { useState } from "react";

type Props = {
  tabs: string[];
};
const DailyEarnMenuAtom = (props: Props) => {
  const [activeTab, setActiveTab] = useState(props.tabs[0] ?? "");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab); // Set the clicked tab as active
  };

  return (
    <div
      style={{
        border: "2px solid black",
        borderRadius: "10px",
      }}
      className='h-[183px] w-[133px] px-[15px] py-[20px] shadow-[4px_4px_0px_black]'
    >
      <div className='flex h-full w-full flex-col justify-between gap-y-2 bg-white text-sm text-black'>
        {props.tabs.map((tab, index) => (
          <button
            key={index}
            className={`inline-block rounded-lg px-[12px] py-[8px] text-left ${activeTab === tab && "bg-black px-1 py-1 text-base-green"}`}
            onClick={() => handleTabClick(tab)} // Set active tab on click
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DailyEarnMenuAtom;
