import React from "react";
import AvatarAtom from "~/components/Atoms/AvatarAtom/AvatarAtom";
import UserAvatar from "~/components/Atoms/UserAvatarAtom/UserAvaterAtom";
import { PageWithModalContentCustomModal } from "~/components/Components/PageWithModalContentCustomModal/PageWithModalContentCustomModal";
import MessageHero from "../MessagesHero/MessageHero";
import UserAvatarAtom from "~/components/Atoms/UserAvatarAtom/UserAvaterAtom";

interface CardList {
  exchange: string;
  message: string;
  user: string;
  timeStamp: string;
  src: string;
}
type Props = {
  cardProps: CardList[];
  onOpenSnapshotModal: () => void;
  modalProps: React.ComponentProps<typeof PageWithModalContentCustomModal>;
  pageInfoProps: React.ComponentProps<typeof MessageHero>;
};

const HomeContentComp = (props: Props) => {
  return (
    <div>
      <MessageHero {...props.pageInfoProps} />
      <div className='h-full rounded-t-3xl bg-[#2C2D30] px-10'>
        {props.cardProps.map((cardList, idx) => (
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
              <UserAvatarAtom user={cardList.user} />
            </div>
          </div>
        ))}
        <PageWithModalContentCustomModal {...props.modalProps} />
      </div>
    </div>
  );
};

export default HomeContentComp;
