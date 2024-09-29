import React from "react";
import { NextPage } from "next";
import Image from "next/image";
import Header from "../../header/headerContainer";

interface Message {
  id: number;
  icon: string; // URL or emoji for the icon
  name: string;
  time: string;
  content: string;
  unread: boolean;
}

const messages: Message[] = [
  {
    id: 1,
    icon: "/svgs/ETH.svg",
    name: "ETH",
    time: "08:43 PM",
    content: "User: namulabs is fantastic company...",
    unread: true,
  },
  {
    id: 2,
    icon: "/svgs/nvr.svg",
    name: "Nvir",
    time: "08:42 AM",
    content: "User: namulabs is fantastic company...",
    unread: false,
  },
];

const HomeContainer: NextPage = () => {
  return (
    <div>
      <Header/>
      <div className="min-h-screen bg-gray-900 py-10 " >
    <div className=' ms-8 items-start  text-white'>
      <h1 className='mb-6 ms-4 text-2xl font-semibold'>Messages</h1>
      <div className='w-80 rounded-xl  p-4'>
        <div className='mb-4 '>
          <div className='flex h-10 w-10 mb-1 items-center justify-center rounded-full'>
            <Image
              src='/images/starIcon.png'
              alt='star'
              width={100}
              height={100}
              className='rounded-full'
            />
          </div>
          <span className='text-lg font-semibold items-start'>Proxima</span>
        </div>

        <div className='space-y-4 bg-gray-800 w-96 h-page rounded-lg'>
          {messages.map((message) => (
            <div
              key={message.id}
              className='flex items-center justify-between rounded-lg p-3'
            >
              <div className='flex items-center'>
                <Image
                  src={message.icon}
                  alt={message.name}
                  width={40}
                  height={40}
                  className='rounded-full'
                />

                <div className='ml-4'>
                  <h2 className='font-semibold'>{message.name}</h2>
                  <p className='truncate text-sm text-gray-400'>
                    {message.content}
                  </p>
                </div>
              </div>
              <div className='text-right'>
                <p className='text-sm text-gray-400'>{message.time}</p>
                {message.unread && (
                  <div className='mt-1 h-2 w-4 rounded-full'>
                    <Image
                  src="/svgs/N.svg"
                  alt="badge"
                  width={100}
                  height={100}
                  className='rounded-full'
                />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default HomeContainer;
