"use client";
import Image from "next/image";
import { useState } from "react";
import DanielPreviewContentAtom from "./DanielPreviewContentAtom";

const DanielPreviewDisplayAtom = () => {
  // Track which modal is open; null means no open modal
  const [isOpen, setIsOpen] = useState<string | null>(null);

  // Function to toggle modals by name
  const toggleModal = (name: string) => {
    setIsOpen(isOpen === name ? null : name); // Toggle modal based on the current state
  };

  // Data array for preview content; simplifies adding/removing items
  const previewData = [
    {
      avatar: "/svgs/eth.svg",
      name: "ETH",
      time: "08:43 PM",
      userDetails: "User: namulabs is a fantastic company...",
      userAvatar: "N",
      className:
        "flex w-[300px] flex-col items-center justify-center space-y-3 bg-[#2C2D30] p-5 text-white",
      content: (
        <>
          <h1 className='text-center text-2xl font-bold'>
            Transaction <br /> processing
          </h1>

          <div className='h-[120px] w-[250px] overflow-hidden'>
            <Image
              src={"/svgs/loader.svg"}
              alt='loader'
              className='h-full w-full object-cover'
              width={100}
              height={100}
              priority
            />
          </div>

          <p className='text-sm text-white'>
            Uploading your transaction to the node. please wait for a moment...{" "}
            <br /> This may take up to 2 minutes.
          </p>
        </>
      ),
    },
    {
      avatar: "/svgs/nvir.svg",
      name: "Nvir",
      time: "08:42 AM",
      userDetails: "User: namulabs is a fantastic company...",
      content: (
        <>
          <h1 className='text-center text-2xl font-bold'>
            Transaction <br /> processing
          </h1>

          <div className='h-[120px] w-[250px] overflow-hidden'>
            <Image
              src={"/svgs/loader.svg"}
              alt='loader'
              className='h-full w-full object-cover'
              width={100}
              height={100}
              priority
            />
          </div>

          <p className='text-sm text-white'>
            Uploading your transaction to the node. please wait for a moment...{" "}
            <br /> This may take up to 2 minutes.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <div className='absolute bottom-0 left-0 right-0 h-[340px] w-full max-w-[500px] rounded-t-[30px] bg-[#2C2D30] p-5 sm:h-[300px] md:h-[340px]'>
        <div className='flex flex-col space-y-4'>
          {previewData.map((data, index) => (
            <DanielPreviewContentAtom
              key={index}
              avatar={data.avatar}
              name={data.name}
              time={data.time}
              userDetails={data.userDetails}
              userAvatar={data.userAvatar}
              onclick={() => toggleModal(data.name)}
              modalOpen={isOpen === data.name} // Conditional modal display
              setModalOpen={() => setIsOpen(null)} // Close modal on demand
              className='flex w-[300px] flex-col items-center justify-center space-y-3 bg-[#2C2D30] p-5 text-white'
            >
              {data.content}
            </DanielPreviewContentAtom>
          ))}
        </div>
      </div>
    </>
  );
};

export default DanielPreviewDisplayAtom;
