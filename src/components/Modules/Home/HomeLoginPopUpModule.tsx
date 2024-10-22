import React, { useState } from "react";
import { HomeErrorCardLayout } from "~/components/Components/CardLayout/HomeErrorCardLayout";
import Link from "next/link";
import { SocialIconAtom } from "~/components/Atoms/SocialIconAtom/SocialIconAtom";

export const HomeLoginPopUpModule = () => {
  const socialButtons = [
    { iconName: "google", label: "Google" },
    { iconName: "facebook", label: "Facebook" },
    { iconName: "discord", label: "Discord" },
    { iconName: "x", label: "x" },
  ];

  const walletButtons = [
    { iconName: "petra", label: "Petra" },
    { iconName: "okx", label: "OKX" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <div className='fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center overflow-y-auto bg-black bg-opacity-50 pt-[140px]'>
          <HomeErrorCardLayout
            title={
              <div className='text-left'>
                <span className='text-2xl'>FANQUEST</span>
                <br />
                <span className='text-xl font-extrabold'>
                  Login to FAN-QUEST
                </span>
              </div>
            }
            message={
              <div className='flex w-full flex-col'>
                <div className='mt-6 flex flex-col gap-y-3'>
                  <div className='font-medium'>Sign in with</div>
                  {socialButtons.map((button, index) => (
                    <button
                      key={index}
                      className='flex items-center rounded border border-black px-4 py-2 text-black'
                    >
                      <SocialIconAtom iconname={button.iconName} />
                      <span className='ml-2'>{button.label}</span>
                    </button>
                  ))}
                </div>

                <div className='mt-8 flex flex-col gap-y-3'>
                  <div className='font-medium'>Sign in with</div>

                  {walletButtons.map((button, index) => (
                    <button
                      key={index}
                      className='flex items-center rounded border border-black px-4 py-2 text-black'
                    >
                      <SocialIconAtom iconname={button.iconName} />
                      <span className='ml-2'>{button.label}</span>
                    </button>
                  ))}
                </div>

                <div className='mb-5 mt-10 h-[1px] w-screen bg-black'></div>

                <div className='text-center'>
                  <span className='text-sm'>by logging in you agree to</span>
                  <br />
                  <span className='text-sm'>
                    Our
                    <span>
                      {" "}
                      <Link href={`#`} className='capitalize text-blue-500'>
                        Terms of service
                      </Link>{" "}
                    </span>
                    &
                    <span>
                      {" "}
                      <Link href={`#`} className='capitalize text-blue-500'>
                        privacy policy
                      </Link>
                    </span>
                  </span>
                </div>
              </div>
            }
            isModalOpen={isModalOpen}
            setModalOpen={handleToggleModal}
          />
        </div>
      )}
    </div>
  );
};
