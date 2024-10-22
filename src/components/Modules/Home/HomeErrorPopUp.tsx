import React, { useState } from "react";
import CardLayout from "~/components/Components/CardLayout/CardLayout";
import { FaCircleNotch } from "react-icons/fa";
import { HomeErrorCardLayout } from "~/components/Components/CardLayout/HomeErrorCardLayout";

type Props = {
  popups: {
    gachaTitle: string;
    gachaMessage: string;
  }[]; // Array to support one or more popups
};

export const HomeErrorPopUp = (props: Props) => {
  const { popups } = props;

  // State to control modals for each popup
  const [isModalOpen1, setIsModalOpen1] = useState(true);
  const [isModalOpen2, setIsModalOpen2] = useState(popups.length > 1);

  // Determine if any modal is open to show the background overlay
  const isAnyModalOpen = isModalOpen1 || isModalOpen2;

  const handleToggleModal1 = () => {
    setIsModalOpen1(!isModalOpen1);
  };

  const handleToggleModal2 = () => {
    setIsModalOpen2(!isModalOpen2);
  };

  return (
    <div>
      {isAnyModalOpen && (
        <div className='fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center bg-black bg-opacity-50'>
          <div className='flex flex-col gap-4'>
            {" "}
            {/* Stack the cards on top of each other */}
            {isModalOpen1 && (
              <HomeErrorCardLayout
                message={`${popups[0]?.gachaMessage}`}
                title={`${popups[0]?.gachaTitle}`}
                isModalOpen={true}
                setModalOpen={handleToggleModal1}
                loadingAnimation={true}
              />
            )}
            {popups.length > 1 && isModalOpen2 && (
              <HomeErrorCardLayout
                message={`${popups[1]?.gachaMessage}`}
                title={`${popups[1]?.gachaTitle}`}
                isModalOpen={true}
                setModalOpen={handleToggleModal2}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
