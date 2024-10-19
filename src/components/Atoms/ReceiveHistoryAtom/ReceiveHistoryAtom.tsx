import { useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { StatusAtom } from "../StatusAtom/StatusAtom";

type Props = {
  to: string;
  quantity: string;
  ticker: string;
  transactionFee: string;
  timeStamp: string;
  txid: string;
};

export const ReceiveHistoryAtom = (props: Props) => {
  const [isOpenReceiveHistory, setIsOpenReceiveHistory] = useState(false);
  const [isOpenSentHistory, setIsOpenSentHistory] = useState(false);

  const toggleDropdownReceive = () =>
    setIsOpenReceiveHistory(!isOpenReceiveHistory);
  const toggleDropdownSent = () => setIsOpenSentHistory(!isOpenSentHistory);

  return (
    <div className='mx-6'>
      <div className='flex justify-between border-b-2 border-[#000000] pb-5 pt-3.5'>
        <div className='space-y-2'>
          <div className='flex items-center justify-start space-x-1.5'>
            <p className='text-xl font-bold'>Receive</p>
            <StatusAtom status='Success' />
          </div>
          <p className='text-base font-medium'>To : 0x9a23...6ad4</p>
          {isOpenReceiveHistory && (
            <>
              <p className='text-base font-medium'>
                Transaction Fee : N ticker
              </p>
              <p className='text-base font-medium'>
                Time Stamp : 2024.04.12 44:51:39
              </p>
              <p className='text-base font-medium'>TXID :</p>
            </>
          )}
        </div>

        <div className='flex items-center justify-center space-x-4'>
          <p className='text-lg font-medium text-[#1838E0]'>NNN</p>
          <button className='' onClick={toggleDropdownReceive}>
            {isOpenReceiveHistory ? (
              <UpOutlined style={{ fontSize: "10px" }} />
            ) : (
              <DownOutlined style={{ fontSize: "10px" }} />
            )}
          </button>
        </div>
      </div>

      <div className='flex justify-between border-b-2 border-[#000000] pb-5 pt-3.5'>
        <div className='space-y-2'>
          <div className='flex items-center justify-start space-x-1.5'>
            <p className='text-xl font-bold'>Create Quest</p>
            <StatusAtom status='Success' />
          </div>
          <p className='text-base font-medium'>To : 0x9a23...6ad4</p>
          {isOpenSentHistory && (
            <>
              <p className='text-base font-medium'>
                Transaction Fee : N ticker
              </p>
              <p className='text-base font-medium'>
                Time Stamp : 2024.04.12 44:51:39
              </p>
              <p className='text-base font-medium'>TXID :</p>
            </>
          )}
        </div>

        <div className='flex items-center justify-center space-x-4'>
          <p className='text-lg font-medium text-[#F5222D]'>NNN</p>
          <button className='' onClick={toggleDropdownSent}>
            {isOpenSentHistory ? (
              <UpOutlined style={{ fontSize: "10px" }} />
            ) : (
              <DownOutlined style={{ fontSize: "10px" }} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
