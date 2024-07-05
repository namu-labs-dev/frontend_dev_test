import { Flex } from "antd";
import Image from "next/image";
import { WalletDetail } from "~/components/Components/ContentComponentForCovenant/WalletDetail";

interface Props {
  settingClicked: boolean;
}

export const ContentAtom: React.FC<Props> = ({ settingClicked }) => {
  return (
    <Flex className='relative h-full flex-col gap-0'>
      <Flex className='h-0.5/3 flex-col gap-4 pb-6 ps-6 '>
        <div className='text-2xl font-bold text-white '>Messages</div>
        <Flex className='flex-col gap-2 '>
          <Image src='/svgs/star.svg' alt='' width={45} height={45} />
          <div className='text-1xl  text-white '>Proxima</div>
        </Flex>
      </Flex>

      <div
        className='  h-full rounded-t-2xl p-10'
        style={{ backgroundColor: "rgba(44, 45, 48, 1)" }}
      >
        <WalletDetail settingClicked={settingClicked} />
      </div>

      {settingClicked && (
        <div className='absolute z-10 h-full w-full bg-black opacity-60'></div>
      )}
    </Flex>
  );
};
