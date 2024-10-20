import { useState } from "react";
import Image from "next/image";
import NFTImage from "../../../../public/pngs/NFTImage.png";
import { StaticImageData } from "next/image";
import NFTCardPreview from "./NFTCardPreview";

type Props = {
  img: StaticImageData;
  name: string;
  creatorName: string;
};

export const NFTCard = (props: Props) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handlePreview = () => {
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
  };

  return (
    <div
      className='w-full max-w-xs cursor-pointer rounded-[0.625rem] border-2 border-[#000000] px-3.5 pb-5 pt-3.5'
      onClick={handlePreview}
    >
      <div className='relative w-full pb-[100%]'>
        <Image
          src={NFTImage}
          alt={`${props.name}'s name`}
          layout='fill'
          objectFit='cover'
        />
      </div>

      <div className='mt-3'>
        <p className='text-lg font-medium leading-[1.6875rem]'>{props.name}</p>
        <p className='text-base font-medium leading-6'>
          by {props.creatorName}
        </p>
      </div>

      {isPreviewOpen && (
        <NFTCardPreview
          name='NFT Name'
          imgUrl={NFTImage}
          description='Description Description Description Description Description Description Description Description Description Description Description Description'
          onClose={handleClosePreview}
        />
      )}
    </div>
  );
};
