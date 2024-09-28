import React from "react";
import Image from "next/image";

interface AvatarProps {
  size?: number;
  user: string;
}

const UserAvatarAtom: React.FC<AvatarProps> = ({ user, size = 20 }) => {
  return (
    <div
      className={`ml-[50%] flex size-6 items-center justify-center rounded-full  bg-[#FF4D4F] text-center`}
    >
      <p>{user}</p>
    </div>
  );
};

export default UserAvatarAtom;
