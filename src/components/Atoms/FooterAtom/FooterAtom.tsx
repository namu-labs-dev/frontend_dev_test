import React, { useState } from "react";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
};

const icons: Array<{
  iconName: "dollar" | "message" | "wallet" | "history";
  width: number;
  height: number;
  color: string;
  special?: boolean;
}> = [
  { iconName: "dollar", width: 30, height: 30, color: "white" },
  { iconName: "message", width: 30, height: 30, color: "white" },
  { iconName: "wallet", width: 30, height: 30, color: "white", special: true },
  { iconName: "history", width: 30, height: 30, color: "white" },
];

export const FooterAtom = ({ title }: Props) => {
  const [walletClicked, setWalletClicked] = useState(false);

  const handleIconClick = (iconName: string) => {
    if (iconName === "wallet") {
      setWalletClicked(!walletClicked);
    }
  };

  return (
    <div className='flex h-full items-center justify-between bg-[#1F1F1F] px-16 py-5 text-white'>
      {icons.map((icon, index) => (
        <div
          key={index}
          className={`z-[1] flex w-[50px] cursor-pointer items-center justify-center ${icon.special && walletClicked ? "relative pt-2" : ""}`}
          onClick={() => handleIconClick(icon.iconName)}
        >
          {icon.special && walletClicked && (
            <div className='absolute left-[-15px] right-[-15px] top-[-19px] h-[3px] bg-green-500'></div>
          )}
          <SVGAtom
            iconName={icon.iconName}
            width={icon.width}
            height={icon.height}
            color={icon.color}
          />
        </div>
      ))}
      {/* <div>{title}</div> */}
    </div>
  );
};
