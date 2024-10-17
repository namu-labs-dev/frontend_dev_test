import { DownloadOutlined } from "@ant-design/icons";
import { useState, useRef, ChangeEvent, useEffect } from "react";
import { formatFileSize } from "~/utils/common";

type Props = {
  FileInfo?: {
    name: string;
    size: number;
  };
};

export const AttachmentAtom = (props: Props) => {
  const [file, setFile] = useState<Props["FileInfo"] | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const fileInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (file && fileInfoRef.current) {
      fileInfoRef.current.focus();
    }
  }, [file]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile({
        name: selectedFile.name,
        size: selectedFile.size,
      });
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    fileInputRef.current?.click();
  };

  return (
    <div className='mx-auto w-full max-w-md px-4 sm:px-0'>
      <input
        id='file-upload'
        type='file'
        className='hidden'
        onChange={handleFileChange}
        ref={fileInputRef}
      />
      {!file ? (
        <div
          className='flex cursor-pointer items-center justify-between rounded-lg border-2 border-dashed border-gray-300 px-3 py-2 sm:px-4 sm:py-3'
          onClick={handleClick}
        >
          <span className='text-sm font-medium'>Click to upload</span>
          <DownloadOutlined className='h-5 w-5 sm:h-6 sm:w-6' />
        </div>
      ) : (
        <div
          ref={fileInfoRef}
          className='flex cursor-pointer items-center justify-between rounded-lg border bg-[#F0F0F0] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black sm:px-4 sm:py-3'
          onClick={handleClick}
          tabIndex={0}
        >
          <div className='mr-2 flex flex-grow flex-col space-y-0.5 sm:space-y-1'>
            <span className='truncate text-sm font-medium'>{file.name}</span>
            <span className='text-xs opacity-50'>
              {formatFileSize(file.size)}
            </span>
          </div>
          <button
            onClick={(e) => e.stopPropagation()}
            className='flex-shrink-0'
          >
            <DownloadOutlined className='h-5 w-5 sm:h-6 sm:w-6' />
          </button>
        </div>
      )}
    </div>
  );
};
