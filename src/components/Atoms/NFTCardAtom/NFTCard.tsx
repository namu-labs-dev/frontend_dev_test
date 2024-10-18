import Image from "next/image";
import NFTImage from "../../../../public/pngs/NFTImage.png";
import { StaticImageData } from "next/image";

type Props = {
  img?: StaticImageData;
  name?: string;
  creatorName?: string;
};

export const NFTCard = (props: Props) => {
  return (
    <div className='mx-auto w-full max-w-xs rounded-[0.625rem] border-2 border-[#000000] px-3.5 pb-5 pt-3.5'>
      <div className='relative w-full pb-[100%]'>
        <Image
          src={NFTImage}
          alt={`${props.name}'s name`}
          layout='fill'
          objectFit='cover'
        />
      </div>

      <div className='mt-3'>
        <p className='text-lg font-medium leading-[1.6875rem]'>NFT Name</p>
        <p className='text-base font-medium leading-6'>by Creator name</p>
      </div>
    </div>
  );
};
