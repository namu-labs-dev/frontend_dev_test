import Image from "next/image";
import { StaticImageData } from "next/image";
import { useRef, useEffect } from "react";
import NFTImage from "../../../../public/pngs/NFTImage.png";
import { CloseCircleFilled } from "@ant-design/icons";

type Props = {
  imgUrl: StaticImageData;
  name: string;
  description: string;
  onClose: () => void;
};

export const NFTCardPreview = (props: Props) => {
  const NFTModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        NFTModalRef.current &&
        !NFTModalRef.current.contains(event.target as Node)
      ) {
        props.onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props.onClose]);

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4'>
      <div
        className='h-[39.5625rem] w-[31.25rem] max-w-2xl overflow-hidden rounded-[1.25rem] border-2 border-[#000000] bg-white px-6 pb-[1.875rem] pt-6 transition-transform duration-200'
        ref={NFTModalRef}
      >
        <div className='relative'>
          <div className='relative h-[28.25rem] w-[28.25rem]'>
            <Image
              src={props.imgUrl}
              alt={`${props.name}'s NFT`}
              layout='fill'
              objectFit='cover'
            />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              props.onClose();
            }}
            className='absolute right-5 top-5'
            aria-label='Close preview'
          >
            <CloseCircleFilled
              style={{ fontSize: "1.875rem", color: "white" }}
            />
          </button>
        </div>

        <div className='mt-6'>
          <h2 className='mb-1 text-xl font-bold leading-[1.6875rem]'>
            {props.name}
          </h2>
          <p className='text-base leading-6'>by {props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NFTCardPreview;
