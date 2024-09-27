import HomeSVG from "@svgs/home.svg";
import MessageSVG from "@svgs/message.svg";
import WalletSVG from "@svgs/wallet.svg";
import HistorySVG from "@svgs/history.svg";

type Props = {
  title: string;
};

export const FooterAtom = (props: Props) => {
  return (
    <div className='relative flex h-full items-center justify-between bg-[#262626] p-4'>
      {/* Home Tab */}
      <div
        className='flex flex-1 cursor-pointer justify-center'
        onClick={props.onHomeClick}
      >
        <HomeSVG width={24} height={24} fill='#8C8C8C' />
      </div>

      {/* Message Tab */}
      <div
        className='flex flex-1 cursor-pointer justify-center'
        onClick={props.onMessageClick}
      >
        <MessageSVG width={24} height={24} fill='#8C8C8C' />
      </div>

      {/* Wallet Tab with Full Width Tab Indicator */}
      <div
        className='relative flex flex-1 cursor-pointer justify-center'
        onClick={props.onWalletClick}
      >
        {/* Slim Top Indicator for the Wallet Tab */}
        <div className='absolute -top-4 left-0 h-[2px] w-full bg-[#00EC97]' />
        {/* Wallet Icon */}
        <WalletSVG width={24} height={24} fill='#FFFFFF' />
      </div>

      {/* History Tab */}
      <div
        className='flex flex-1 cursor-pointer justify-center'
        onClick={props.onHistoryClick}
      >
        <HistorySVG width={24} height={24} fill='#8C8C8C' />
      </div>
    </div>
  );
};
