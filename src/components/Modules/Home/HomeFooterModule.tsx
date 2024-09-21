import { FooterAtom } from "~/components/Atoms/FooterAtom/FooterAtom";

type Props = {
  title?: string;
  /** Add custom prop to manage custom features as regards the task */
  icons?: boolean;
  bgColor?: string;
  iconColor?: string;
  handleWalletClick?: (icon: string) => void;
  isClick?: string | null;
  handleDollarClick?: (icon: string) => void;
  handleMessageClick?: (icon: string) => void;
  handleHistoryClick?: (icon: string) => void;
};

export const HomeFooterModule = (props: Props) => {
  return (
    <div className='relative h-full'>
      <FooterAtom
        title={props.title}
        icons={props.icons}
        iconColor={props.iconColor}
        bgColor={props.bgColor}
        handleWalletClick={props.handleWalletClick}
        isClick={props.isClick}
        handleDollarClick={props.handleDollarClick}
        handleMessageClick={props.handleMessageClick}
        handleHistoryClick={props.handleHistoryClick}
      />
    </div>
  );
};
