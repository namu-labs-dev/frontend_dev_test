import React from "react";
import AvatarAtom from "~/components/Atoms/AvatarAtom/AvatarAtom";
import UserAvatar from "~/components/Atoms/UserAvatar/UserAvaterAtom";

interface MessageCardProps {
  size: string;
}

interface CardListProp {
  exchange: string;
  message: string;
  user: string;
  timeStamp: string;
  src: string;
}

const CardList: CardListProp[] = [
  {
    exchange: "ETH",
    message: "User: namulabs is fantasic company...",
    user: "N",
    timeStamp: "08:43",
    src: "eth.svg",
  },
  {
    exchange: "Nvir",
    message: "User: namulabs is fantasic company...",
    user: "N",
    timeStamp: "08:42",
    src: "nvr.svg",
  },
];

const HomeMessageCardModule: React.FC<MessageCardProps> = ({ size }) => {
  const textSize =
    size === "lg" ? "text-lg font-bold" : "text-sm text-gray-400";
  return (
    <div className='h-full rounded-t-3xl bg-[#2C2D30] p-10'>
      {CardList.map((cardList, idx) => (
        <div
          key={idx}
          className='mb-2 flex items-center justify-between rounded-md  p-4'
        >
          <div className='flex items-center'>
            <AvatarAtom
              src={cardList.src}
              size={cardList.src === "nvr.svg " ? 80 : 40}
              alt=''
            />
            <div className='ml-4'>
              <h1 className='font-bold text-white'>{cardList.exchange}</h1>
              <p className='text-sm text-gray-400'>{cardList.message}</p>
            </div>
          </div>
          <div className='flex flex-col justify-end gap-y-2'>
            <p className='text-sm text-white'>{`${cardList.timeStamp}PM`}</p>
            <UserAvatar user={cardList.user} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeMessageCardModule;
