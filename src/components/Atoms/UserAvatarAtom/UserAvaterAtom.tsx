import React from "react";


type Props = {
  size?: number;
  user: string;
};

const UserAvatarAtom = (props: Props) => {
  return (
    <div
      className={`ml-[50%] flex size-6 items-center justify-center rounded-full  bg-[#FF4D4F] text-center`}
    >
      <p>{props.user}</p>
    </div>
  );
};

export default UserAvatarAtom;
