import React, { ChangeEvent, useState } from "react";
import SVGAtom from "../SVGAtom/SVGAtom";
import Image from "next/image";

type Props = {
  className?: string;
};

const getBase64 = (file: File): Promise<File> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(file);
    };
    reader.onerror = (error) => reject(error);
  });

export const PhilipImageUploadAtom = (props: Props) => {
  const [image, setImage] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      getBase64(file)
        .then((f) => setImage(f))
        .catch(() => {
          setImage(null);
        });
    }
  };

  return (
    <div className='relative aspect-[360/184] w-full rounded-[8.79px] bg-[#F5F5F5]'>
      {image ? (
        <>
          <Image
            fill
            className='h-full w-full object-contain'
            alt=''
            src={URL.createObjectURL(image)}
          />
        </>
      ) : (
        <SVGAtom
          iconName='camera'
          width={21.98}
          height={21.98}
          className='absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]'
        />
      )}
      <input
        type='file'
        accept='image/png, image/jpeg'
        className='h-full w-full opacity-0'
        onChange={handleFileChange}
      />
    </div>
  );
};
