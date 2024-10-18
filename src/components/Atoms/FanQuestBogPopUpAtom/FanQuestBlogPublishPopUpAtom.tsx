import React from "react";
import Image from "next/image";
import AntModalAtom from "../ModalAtom/AntModalAtom";

type Props = {
  logo: string;
  status: string;
  blogInfo: string;
  width?: string;
  isModalOpen: boolean;
  setModalOpen: (value: boolean) => void;
};

const FanQuestBlogPublishPopUpAtom = (props: Props) => {
  return (
    <AntModalAtom {...props}>
      <div className='flex flex-col justify-center gap-3  '>
        <div className='w-2rem'>
          <Image
            className='relative object-cover object-center'
            src={props.logo}
            alt=''
            width={150}
            height={30}
          />
        </div>
        <h2 className='text-2xl font-medium'>{props.status}</h2>

        <p className='text-[#475467]'>{props.blogInfo}</p>
      </div>
    </AntModalAtom>
  );
};

export default FanQuestBlogPublishPopUpAtom;
