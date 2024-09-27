/* eslint-disable @typescript-eslint/no-empty-interface */
"use client";

import { Camera } from "lucide-react";
import { type ChangeEvent, useState } from "react";

interface ImageUploadComponentProps {}

export const ImageUploadAtom: React.FC<ImageUploadComponentProps> = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImage(file);
      console.log("Image uploaded:", file.name); // Log or use the image as needed
    }
  };

  return (
    <div className='mt-2 flex h-[180px] w-full items-center justify-center rounded border bg-gray-100 p-4'>
      <label htmlFor='upload-button' className='cursor-pointer'>
        <Camera size={30} />
        <input
          id='upload-button'
          type='file'
          accept='image/*'
          className='hidden'
          onChange={handleImageChange}
        />
        {image && <p>{image.name}</p>}
      </label>
    </div>
  );
};
