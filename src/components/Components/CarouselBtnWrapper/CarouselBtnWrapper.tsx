import React, { PropsWithChildren } from "react";

const CarouselBtnWrapper = (props: PropsWithChildren) => {
  return (
    <div className='embla__controls m z-10 sm:top-[98%] lg:top-[57%] lg:ml-6'>
      {props.children}
    </div>
  );
};

export default CarouselBtnWrapper;
