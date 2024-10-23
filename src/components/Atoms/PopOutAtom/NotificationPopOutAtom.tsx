import React from "react";
import { DownOutlined } from "@ant-design/icons";
import avatar from "../../../../public/pngs/avatar.png";

export const NotificationPopOutAtom = () => {
  const data = [
    {
      id: 1,
      username: "John Doe",
      text: "This is a sample text",
      date: "2022.01.01",
      read: true,
    },
    {
      id: 2,
      username: "Jane Doe",
      text: "Another sample text",
      date: "2022.01.02",
      read: false,
    },

    {
      id: 3,
      username: "Jane Doe",
      text: "Another sample text",
      date: "2022.01.02",
      read: false,
    },

    {
      id: 4,
      username: "Jane Doe",
      text: "Another sample text",
      date: "2022.01.02",
      read: false,
    },

    {
      id: 5,
      username: "Jane Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, perspiciatis.",
      date: "2022.01.02",
      read: false,
    },

    {
      id: 6,
      username: "Jane Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, perspiciatis.",
      date: "2022.01.02",
      read: false,
    },

    {
      id: 7,
      username: "Jane Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, perspiciatis.",
      date: "2022.01.02",
      read: false,
    },
    // Add more data here...
  ];

  return (
    <div className='h-96 w-[30vw] overflow-y-scroll rounded'>
      {data.map((item) => (
        <div
          key={item.id}
          className={`mb-2 flex items-center py-2 ${item.read ? "text-gray-500" : "text-black"}`}
        >
          <div className='mr-4 flex h-[50px] w-[50px] flex-shrink-0 justify-center rounded-full'>
            <img
              className='h-full w-full object-cover'
              src={avatar.src}
              alt='user avatar png'
            />
          </div>
          <div className='flex-1'>
            <div className='text-sm font-bold'>{item.username}</div>
            <div className='my-1 text-xs'>{item.text}</div>
            <div className='text-xs'>{item.date}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
