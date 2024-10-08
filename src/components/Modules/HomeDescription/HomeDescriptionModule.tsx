import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom"; // Importing the SVGAtom component

// HomeDescriptionModule component definition
export const HomeDescriptionModule = () => {
  return (
    <div className='flex flex-col gap-2 text-white'>
      {/* 
        This section outlines the minimum and maximum abilities expected from overseas developers,
        as well as a brief explanation of the roles of sample pages.
      */}

      <div className='flex flex-col gap-1 p-[20px] text-[14px]'>
        <h1 className='text-3xl font-semibold'>Messages</h1>
        <SVGAtom iconName='star' width={80} height={80} color='white' />
        <p className='text-lg'>Proxima</p>
      </div>

      <div className='flex w-full flex-col gap-1 rounded-t-3xl bg-[#2C2D30] pb-72 pl-4 pr-5 pt-8 text-[14px]'>
        <ul className='list-outside pl-2'>
          {/* Displaying messages with associated icons */}
          <div className='flex pl-3'>
            <SVGAtom iconName='ethereum' width={70} height={80} color='white' />
            <div className='w-full'>
              <div className='flex w-full justify-between'>
                <h2 className='text-xl font-medium'>ETH</h2>
                <p className='pr-10'>08:43 PM</p>
              </div>
              <p className='text-[#6d6d70]'>
                User: namulabs is a fantastic company...{" "}
                <span className='ml-8 rounded-full bg-red-400 px-1 text-center text-white'>N</span>
              </p>
            </div>
          </div>

          <div className='flex'>
            <div className='-mt-4'>
              {/* Negative margin for positioning */}
              <SVGAtom iconName='nvir' width={80} height={80} color='white' />
            </div>
            <div className='w-full'>
              <div className='flex w-full justify-between'>
                <h2 className='text-xl font-medium'>NVIR</h2>
                <p className='pr-10'>08:42 PM</p>
              </div>
              <p className='text-[#6d6d70]'>
                User: namulabs is a fantastic company...
              </p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};
