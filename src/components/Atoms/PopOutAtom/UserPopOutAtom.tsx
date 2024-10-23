import { Card } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { LuMoveUpRight } from "react-icons/lu";
import { VscCreditCard } from "react-icons/vsc";
import { CiViewList } from "react-icons/ci";
import { RiLogoutCircleRLine } from "react-icons/ri";
import avatar from "../../../../public/pngs/avatar.png";

export const UserPopOutAtom = () => {
  return (
    <Card
      style={{
        width: "300px",
        borderRadius: "10px",
        border: "none",
      }}
    >
      <div className='flex items-center'>
        <div className='mr-4 h-[40px] w-[40px] rounded-full'>
          <img
            className='h-full w-full object-cover'
            src={avatar.src}
            alt='user avatar png'
          />
        </div>
        <div className=''>
          <div className='text-sm font-bold'>John Doe</div>
          <div className='truncate text-xs text-gray-500'>0x366476...768</div>
        </div>
        <LuMoveUpRight className='ml-auto text-gray-500' />
      </div>

      <div className='mt-4 flex justify-between !font-medium'>
        <div className='text-sm'>Item Name</div>
        <div className='text-sm text-[#1838E0]'>999,999,999.45</div>
      </div>

      <div className='my-4 border-b-2 border-black' />

      <div className='mb-6 flex justify-between !font-medium'>
        <div className='text-sm'>Purchased</div>
        <div className='text-sm text-[#1838E0]'>999,999,999.99</div>
      </div>

      <div className='flex flex-col gap-y-2 !font-medium'>
        <Link href='#' className='text-black'>
          <span className='mb-2 flex items-center'>
            <VscCreditCard className='mr-2' />
            <span className='text-sm'>Shop</span>
          </span>
        </Link>
        <Link href='#' className='text-black'>
          <span className='mb-2 flex items-center'>
            <CiViewList className='mr-2' />
            <span className='text-sm'>Creator Page</span>
          </span>
        </Link>
        <Link href='#' className='text-black'>
          <span className='flex items-center'>
            <RiLogoutCircleRLine className='mr-2' />
            <span className='text-sm'>Disconnect</span>
          </span>
        </Link>
      </div>
    </Card>
  );
};
