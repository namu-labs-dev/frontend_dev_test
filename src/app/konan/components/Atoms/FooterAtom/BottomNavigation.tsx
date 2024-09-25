import React from "react";

const BottomNavigation: React.FC = () => {
  return (
    <nav className='flex items-center justify-around border-t border-[#2C2C2E] bg-[#1C1C1E] p-4'>
      <div className='h-6 w-6'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-[#8E8E93]'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      </div>
      <div className='h-6 w-6'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-[#8E8E93]'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
          />
        </svg>
      </div>
      <div className='h-6 w-6'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 text-[#8E8E93]'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
          />
        </svg>
      </div>
    </nav>
  );
};

export default BottomNavigation;
