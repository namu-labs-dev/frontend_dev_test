import Image from "next/image";
import { useCallback } from "react";
import { ModalContainer } from "../ModalContainer/ModalContainer";

interface PreviewProps {
  avatar: string;
  name: string;
  userDetails: string;
  time: string;
  userAvatar?: string;
  onclick?: () => void;
  modalOpen?: boolean;
  setModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
  className?: string;
}

const DanielPreviewContentAtom = ({
  avatar,
  name,
  userDetails,
  time,
  userAvatar,
  onclick,
  modalOpen,
  setModalOpen,
  children,
  className,
}: PreviewProps) => {
  const onClose = useCallback(() => {
    modalOpen && setModalOpen?.(false);
    // Checks modal state and close it if open, using optional chaining to check if the callback exists
  }, [modalOpen, setModalOpen]);

  return (
    <>
      <div
        id='button'
        role='button'
        tabIndex={0}
        aria-label='Preview content'
        onClick={onclick}
        className='flex w-full flex-row items-center space-x-2 outline-none'
      >
        <div className='flex h-10 w-10 items-center justify-center overflow-hidden rounded-full'>
          <Image
            src={avatar}
            alt='avatarIcon'
            width={100}
            height={100}
            className='h-full w-full object-cover'
            loading='lazy'
          />
        </div>

        <div className='w-full'>
          <div className='flex flex-row items-center'>
            <div className='mr-auto'>
              <h3 className='text-base font-semibold text-white md:text-lg'>
                {name}
              </h3>
            </div>
            <div className='text-sm text-white md:text-base'>{time}</div>
          </div>

          <div className='flex flex-row '>
            <div className='mr-auto text-sm text-[#BFBFBF]'>{userDetails}</div>

            {/* Render userAvatar only if present */}
            {userAvatar && (
              <div className='flex h-5 w-5 items-center justify-center rounded-full bg-[#FF4D4F] text-sm text-white'>
                {userAvatar}
              </div>
            )}
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className='fixed inset-0 z-[1000] mx-auto mt-0 box-border w-full max-w-[500px] overflow-auto pt-0 text-center'
          style={{ marginTop: 0 }}
        >
          <div
            className='pointer fixed mx-auto mt-0 h-full w-full max-w-[500px] bg-black pt-0 opacity-50'
            onClick={onClose}
          />
          <ModalContainer
            style={{ backgroundColor: "#2C2D30" }}
            className={className}
          >
            {children}
          </ModalContainer>
        </div>
      )}
    </>
  );
};

export default DanielPreviewContentAtom;
