import React from "react";

const Header: React.FC = () => {
  return (
    <header className='flex items-center justify-between  bg-[#1C1C1E] p-4 text-white'>
      <div className='h-6 w-6'>
        <svg
          width='21'
          height='21'
          viewBox='0 0 21 21'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M1 4C1 2.34315 2.34315 1 4 1H16C17.6569 1 19 2.34315 19 4V9.76923H17V4C17 3.44772 16.5523 3 16 3H4C3.44772 3 3 3.44772 3 4V16C3 16.5523 3.44772 17 4 17H10.2308V19H4C2.34315 19 1 17.6569 1 16V4Z'
            fill='#BFBFBF'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M17 14.8462C15.8105 14.8462 14.8462 15.8105 14.8462 17C14.8462 18.1895 15.8105 19.1538 17 19.1538C18.1895 19.1538 19.1538 18.1895 19.1538 17C19.1538 15.8105 18.1895 14.8462 17 14.8462ZM13 17C13 14.7909 14.7909 13 17 13C19.2091 13 21 14.7909 21 17C21 19.2091 19.2091 21 17 21C14.7909 21 13 19.2091 13 17Z'
            fill='#BFBFBF'
          />
        </svg>
      </div>
      <div className='text-lg font-normal'>Proxima OS</div>
      <div className='h-6 w-6'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
