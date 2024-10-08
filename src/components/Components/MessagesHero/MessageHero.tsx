import React from "react";
import LogoAtom from "~/components/Atoms/LogoAtom/LogoAtom";

type Props = {
  title: string;
  logo: string;
  size: number;
};
const MessageHero = (props: Props) => {
  return (
    <div className='my-3 ml-[6%]'>
      <h1 className='mb-4 text-2xl font-bold text-white'>{props.title}</h1>
      <LogoAtom {...props} />
    </div>
  );
};
export default MessageHero;
