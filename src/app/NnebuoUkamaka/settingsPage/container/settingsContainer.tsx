import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Header from "../../header/headerContainer";
const SettingsContainer: NextPage = () => {
  return (
    <div>
      <Header/>
    <div className=' min-h-screen  bg-gray-900 text-white'>
      <div className='pl-6'>
        <h1 className='mb-6 text-2xl font-semibold '>Messages</h1>
        <div className='w-80 rounded-xl'>
          <div className=' mb-1 h-10 w-10 justify-center'>
            <Image
              src='/images/starIcon.png'
              alt='star'
              width={100}
              height={100}
              className='rounded-full'
            />
          </div>
          <div className='mb-4'>
            <span className='text-lg font-semibold'>Proxima</span>
          </div>
          {/* <div className='flex min-h-full  bg-gray-900'> */}
          <div className='flex h-80 w-80 flex-col items-center justify-center rounded-2xl bg-gray-800 p-6 text-center shadow-lg shadow-gray-800'>
            <h1 className='mb-4 w-56 text-2xl font-semibold text-white'>
              Transaction processing
            </h1>
            <div className='mb-6 flex h-56 w-full justify-center'>
              <Image
                src='/svgs/blocks.svg'
                alt='Processing Cube'
                width={100}
                height={100}
              />
            </div>

            <p className=''>Uploading your transaction to the node.</p>
            <p> please wait for a moment...</p>

            <p className=''>This may take up to 2 minutes.</p>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default SettingsContainer;
