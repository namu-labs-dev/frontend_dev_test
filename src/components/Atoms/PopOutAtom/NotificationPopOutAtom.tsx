import React from "react";
import { DownOutlined } from "@ant-design/icons";
import avatar from "../../../../public/pngs/avatar.png";
import { FiArrowUpRight } from "react-icons/fi";

export const NotificationPopOutAtom = () => {
  const data = [
    {
      id: 1,
      username: "Quest name",
      text: "This is a sample text",
      date: "2022.01.01",
      read: true,
      link: false,
    },
    {
      id: 2,
      username: "Quest name",
      text: "Another sample text",
      date: "2022.01.02",
      read: false,
      link: false,
    },

    {
      id: 3,
      username: "Quest name",
      text: "Another sample text",
      date: "2022.01.02",
      read: false,
      link: true,
    },

    {
      id: 4,
      username: "Quest name",
      text: "Another sample text",
      date: "2022.01.02",
      read: false,
      link: false,
    },

    {
      id: 5,
      username: "Quest name",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, perspiciatis.",
      date: "2022.01.02",
      read: false,
      link: true,
    },

    {
      id: 6,
      username: "Quest name",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, perspiciatis.",
      date: "2022.01.02",
      read: false,
      link: false,
    },

    {
      id: 7,
      username: "Quest name",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, perspiciatis.",
      date: "2022.01.02",
      read: false,
      link: true,
    },
    // Add more data here...
  ];

  return (
    <div className='h-96 overflow-y-scroll rounded'>
      {data.map((item) => (
        <div
          key={item.id}
          className={`mb-2 flex items-start pb-1 ${item.read ? "text-[#BFBFBF]" : "text-black"}`}
        >
          <div className='mr-2 flex h-[50px] w-[50px] flex-shrink-0 justify-center self-start rounded-full'>
            <img
              className='h-full w-full object-cover'
              src={avatar.src}
              alt='user avatar png'
            />
          </div>
          <div className='flex-1'>
            <div className='flex w-full justify-between'>
              <div className='text-sm font-medium'>{item.username}</div>
              {item.link && <FiArrowUpRight />}
            </div>
            <div className='my-1 text-xs'>{item.text}</div>
            <div className='text-xs text-[#BFBFBF]'>{item.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
