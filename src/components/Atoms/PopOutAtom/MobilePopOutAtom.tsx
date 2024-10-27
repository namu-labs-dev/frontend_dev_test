import React, { useState } from "react";
import avatar from "../../../../public/pngs/avatar.png";
import { HpButtonAtom } from "../HPButtonAtom/HpButtonAtom";
import { LoginModalAtom } from "../ModalAtom/LoginModalAtom";

export const MobilePopOutAtom = () => {
  const btnNames = ["Home", "Explore", "Quest", "Shop", "SBT airdrop"];
  const [openModal, setOpenModal] = useState(false);
  return (
    <div
      style={{
        width: `197px`,
        height: `390px`,
        boxShadow: `4px 5px 0px 0px #000000`,
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingRight: "30px",
        paddingLeft: "30px",
        borderWidth: "2px",
        borderRadius: "10px",
      }}
      className='rounded'
    >
      <div className='grid h-full grid-cols-1 justify-between gap-y-3 text-left'>
        {btnNames.map((value, index) => {
          return (
            <>
              <button key={index} className='text-left capitalize'>
                {value}
              </button>
            </>
          );
        })}
        <HpButtonAtom />
        <button
          onClick={() => {
            setOpenModal(true);
          }}
          className={`h-[46px] w-[94px] rounded-[10px] bg-black text-white hover:px-[20px] hover:py-[6px]`}
        >
          Sign in
        </button>
      </div>

      {openModal && (
        <>
          <LoginModalAtom isOpen={openModal} />
        </>
      )}
    </div>
  );
};
