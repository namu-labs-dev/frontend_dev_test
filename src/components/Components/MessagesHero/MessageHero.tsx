import React from "react";
import LogoAtom from "~/components/Atoms/LogoAtom/LogoAtom";

type Props = {
  title: string;
};
const MessageHero = (props: Props) => {
  return (
    <div className='my-3 ml-[6%]'>
      <h1 className='mb-4 text-2xl font-bold text-white'>{props.title}</h1>
      <LogoAtom alt='logo' size={80} />
    </div>
  );
};

export default MessageHero;
