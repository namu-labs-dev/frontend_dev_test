import { Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";
import { LuMoveUpRight } from "react-icons/lu";
import { VscCreditCard } from "react-icons/vsc";
import { CiViewList } from "react-icons/ci";
import { RiLogoutCircleRLine } from "react-icons/ri";

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
        <Avatar size={40} icon={<UserOutlined />} />
        <div className='ml-4'>
          <div className='text-sm font-bold'>John Doe</div>
          <div className='truncate text-xs text-gray-500'>0x366476...768</div>
        </div>
        <LuMoveUpRight className='ml-auto text-gray-500' />
      </div>

      <div className='mt-4 flex justify-between'>
        <div className='text-sm'>Item Name</div>
        <div className='text-sm text-[#1838E0]'>999,999,999.45</div>
      </div>

      <div className='my-4 border-b-2 border-black' />

      <div className='my-4 flex justify-between'>
        <div className='text-sm'>Category</div>
        <div className='text-sm text-[#1838E0]'>999,999,999.99</div>
      </div>

      <div className='flex flex-col gap-y-2'>
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
