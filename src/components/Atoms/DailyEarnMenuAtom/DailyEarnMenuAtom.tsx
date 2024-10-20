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
    <div className='ml-5'>
      <div className='flex max-w-[8rem] translate-x-[-4px] translate-y-[-4px] flex-col gap-y-2 rounded-md border-2 border-black bg-white px-[2%] py-[1%] text-center text-sm  text-black shadow-[4px_4px_0px_black] transition-all duration-300 hover:rounded-md active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl  active:shadow-none '>
        {props.tabs.map((tab, index) => (
          <button
            key={index}
            className={`my-1 inline-block rounded-lg ${activeTab === tab && "text-primaryGreen bg-black px-1 py-1"}`}
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
