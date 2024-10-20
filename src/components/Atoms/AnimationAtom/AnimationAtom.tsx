import { useEffect, useState } from "react";
import SVGAtom from "../SVGAtom/SVGAtom";

export const AnimationAtom = () => {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => (prevDots + 1) % 5);
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='grid w-[250px] grid-cols-1 place-items-center'>
      <div className='h-[50px] w-[50px]'>
        <SVGAtom iconName='animationIcon' />
      </div>
      <div className='mt-6 text-center font-bold'>
        Importing data{".".repeat(dots)}
      </div>
    </div>
  );
};
