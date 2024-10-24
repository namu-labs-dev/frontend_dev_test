import React, { useMemo, useState, type PropsWithChildren } from "react";
import { useRouter } from "next/router";
import SectionWithTabsContainer from "../SectionWithTabsContainer/SectionWithTabsContainer";
import ModuleHeadingAtom from "../ModuleHeadingAtom/ModuleHeadingAtom";

type Props = {
  text: string;
  tabs: string[];
};
const SectionWithTabsAtom = (props: PropsWithChildren<Props>) => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(props.tabs[0] ?? "");

  // Function to handle tab clicks
  const handleTabClick = (tab: string) => {
    setActiveTab(tab); // Set the clicked tab as active
  };

  // Map over tabs to generate buttons for each tab
  const Tabs = useMemo(() => {
    return props.tabs
      ?.map((tab, index) => {
        const isActive = activeTab === tab; // Determine if the tab is active

        return (
          <button
            key={index}
            className={`flex items-center gap-2 rounded-lg ${isActive && "bg-black px-3 py-2 text-[#00FF00]"}`}
          onClick={() => handleTabClick(tab)} // Set active tab on click
          >
            {tab}
          </button>
        );
      })
      .filter(Boolean);
  }, [activeTab, props.tabs]);

  // Conditionally render content based on the active tab
  //   const renderContent = () => {
  //     switch (activeTab) {
  //       case "tab1-route":
  //         return <div>Content for Tab 1</div>;
  //       case "tab2-route":
  //         return <div>Content for Tab 2</div>;
  //       case "tab3-route":
  //         return <div>Content for Tab 3</div>;
  //       default:
  //         return <div>Select a tab to see content</div>;
  //     }
  //   };

  return (
    <div>
      <div className='flex items-center  gap-x-20'>
        <ModuleHeadingAtom {...props} />
        <div className='flex space-x-4'>{Tabs}</div> {/* Render the tabs */}
      </div>
      {/* Conditionally render content */}
      <SectionWithTabsContainer>{props.children}</SectionWithTabsContainer>
    </div>
  );
};

export default SectionWithTabsAtom;
