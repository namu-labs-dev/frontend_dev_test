import Image from "next/image";

import ProximaIMG from "@assets/proxima.png";
import EthIMG from "@assets/eth.png";
import NvirIMG from "@assets/nvir.png";

export const PageWithModalDescriptionModule = () => {
  return (
    <div className='flex h-screen flex-col gap-5 text-white'>
      <div className='mb-4 text-2xl font-bold'>Messages</div>
      <div className='mb-6 flex flex-col'>
        <Image
          src={ProximaIMG}
          alt='Proxima Alt'
          className='mr-4 rounded-full'
          width={65}
          height={65}
        />
        <div>
          <p className='text-lg'>Proxima</p>
        </div>
      </div>
      <div className='flex-1 rounded-tl-xl rounded-tr-xl bg-gray-800'>
        <div className='h-full text-base text-gray-200'>
          {/* Add your additional content here */}
          This section fills the rest of the page without padding.
        </div>
      </div>
    </div>
  );
};
