import {
  WalletFilled,
  MessageFilled,
  DollarCircleFilled,
  FieldTimeOutlined,
} from "@ant-design/icons";

type Props = {
  onTabChange: () => void;
};

export const BottomNavAtom = (props: Props) => {
  return (
    <div className='flex h-full w-full items-center justify-center bg-[#262626]'>
      <ul className='flex h-full w-full'>
        <li className='flex w-1/4 cursor-pointer items-center justify-center'>
          <button
            onClick={props.onTabChange}
            className='text-[24px] text-[#8C8C8C]'
          >
            <DollarCircleFilled twoToneColor='#8c8c8c' />
          </button>
        </li>
        <li className='flex w-1/4 cursor-pointer items-center justify-center'>
          <button
            onClick={props.onTabChange}
            className='text-[24px] text-[#8C8C8C]'
          >
            <MessageFilled color='#8C8C8C' size={24} />
          </button>
        </li>
        <li className='flex w-1/4 cursor-pointer items-center justify-center border-t-[2px] border-[#00EC97]'>
          <button
            onClick={props.onTabChange}
            className='text-[24px] text-[#FFFFFF]'
          >
            <WalletFilled color='#8C8C8C' size={24} />
          </button>
        </li>
        <li className='flex w-1/4 cursor-pointer items-center justify-center'>
          <button
            onClick={props.onTabChange}
            className='text-[24px] text-[#8C8C8C]'
          >
            <FieldTimeOutlined color='#8C8C8C' size={24} />
          </button>
        </li>
      </ul>
    </div>
  );
};
