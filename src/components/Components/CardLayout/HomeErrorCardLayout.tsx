import React from "react";
import CardLayout from "./CardLayout";
import { FaCircleNotch } from "react-icons/fa";

type Props = {
  title: string | React.ReactNode;
  message: string | React.ReactNode;
  isModalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  loadingAnimation?: boolean;
};

export const HomeErrorCardLayout = (props: Props) => {
  return (
    <CardLayout
      isModalOpen={props.isModalOpen}
      setModalOpen={props.setModalOpen}
    >
      <div className='ml-[2%] flex w-[80vw] flex-col justify-center gap-3 rounded-lg bg-white px-8 pb-6 pt-8 sm:w-[60vw] md:w-[45vw] lg:w-[35vw]'>
        <h1 className='text-left text-2xl font-extrabold'>{props.title}</h1>
        <div className='text-left text-gray-500'>{props.message}</div>

        {props.loadingAnimation && (
          <div className='mt-6'>
            <FaCircleNotch className='animate-spin text-lg' />
          </div>
        )}
      </div>
    </CardLayout>
  );
};
