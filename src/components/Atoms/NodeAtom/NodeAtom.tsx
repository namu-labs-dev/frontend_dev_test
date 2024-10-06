import React from "react";
import SVGAtom from "../SVGAtom/SVGAtom";

const NodeAtom = () => {
  return (
    <div className='mx-auto ml-[8%] flex items-center justify-center md:mr-[3%]'>
      <SVGAtom iconName='node' width={300} height={200} />
    </div>
  );
};

export default NodeAtom;
