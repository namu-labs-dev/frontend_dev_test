import Image from "next/image";
import React from "react";
import CreatorLayout from "~/components/Components/CreatorLayout/CreatorLayout";

type Props = {
  width: string;
  platform: string;
  profile: string;
  icon: string;
};

const ListProfileAtom = (props: Props) => {
  return (
    <div className='mx-auto flex  justify-center gap-x-4'>
      <CreatorLayout {...props}>
        <div className='text-left'>
          <h2 className='md:text-md font-medium'>{props.profile}</h2>
          <p className='md:text-md text-faintAsh font-medium'>
            {props.platform}
          </p>
        </div>
      </CreatorLayout>
    </div>
  );
};

export default ListProfileAtom;
