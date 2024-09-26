import React from "react";
import Logo from "~/components/Atoms/LogoAtom/LogoAtom";

const MessageHero = () => {
  return (
    <div>
      <h1 className='mb-4 text-2xl font-bold text-white'>Messages</h1>
      <Logo alt='logo' size={80} />
    </div>
  );
};

export default MessageHero;
