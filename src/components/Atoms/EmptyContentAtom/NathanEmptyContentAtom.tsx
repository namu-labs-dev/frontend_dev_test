import Image from "next/image";
import React from "react";
import NathanUserMessageBtnAtom from "./NathanUserMessageBtnAtom";

const NathanEmptyContentAtom = () => {
  return (
    <div className="text-white">
      <h1 className="text-2xl font-semibold">Messages</h1>
      <div className="my-3">
        <div className="flex flex-row items-center gap-4">
          <NathanUserMessageBtnAtom name="Proxima" />
          <NathanUserMessageBtnAtom name="Proxima 2" />
          <NathanUserMessageBtnAtom name="Proxima 3" />
          <NathanUserMessageBtnAtom name="Proxima 4" />
        </div>
      </div>
    </div>
  );
};

export default NathanEmptyContentAtom;
