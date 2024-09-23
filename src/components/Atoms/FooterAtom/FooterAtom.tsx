import {
  DollarOutlined,
  MessageOutlined,
  WalletOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
type Props = {
  title?: string;
  /** Add custom prop to manage custom features as regards the task */
  icons?: boolean;
  bgColor?: string;
  iconColor?: string;
  handleDollarClick?: (icon: string) => void;
  handleMessageClick?: (icon: string) => void;
  handleWalletClick?: (icon: string) => void;
  isClick?: string | null;
  handleHistoryClick?: (icon: string) => void;
};

export const FooterAtom = (props: Props) => {
  return (
    <div
      className='flex h-full items-center justify-center'
      style={{ backgroundColor: props.bgColor ? props.bgColor : "#FFC96F" }}
    >
      {props.icons && (
        <div className='flex items-center space-x-24'>
          <div className='relative'>
            {props.isClick === "dollar" && (
              <div
                className='absolute -top-4 left-1/2 h-1 w-36 -translate-x-1/2 transform bg-[#00EC97]'
                style={{
                  zIndex: 100,
                }}
              />
            )}
            <DollarOutlined
              className='text-2xl'
              style={{
                color: props.isClick === "dollar" ? "#FFFFFF" : props.iconColor,
              }}
              onClick={() =>
                props.handleDollarClick && props.handleDollarClick("dollar")
              }
            />
          </div>
          <div className='relative'>
            {props.isClick === "message" && (
              <div
                className='absolute -top-4 left-1/2 h-1 w-36 -translate-x-1/2 transform bg-[#00EC97]'
                style={{
                  zIndex: 200,
                }}
              />
            )}
            <MessageOutlined
              className='text-2xl'
              style={{
                color:
                  props.isClick === "message" ? "#FFFFFF" : props.iconColor,
              }}
              onClick={() =>
                props.handleMessageClick && props.handleMessageClick("message")
              }
            />
          </div>
          <div className='relative'>
            {(props.isClick === "wallet" || props.isClick === "transact") && (
              <div
                className='absolute -top-4 left-1/2 h-1 w-36 -translate-x-1/2 transform bg-[#00EC97]'
                style={{
                  zIndex: 200,
                }}
              />
            )}
            <WalletOutlined
              className='text-2xl'
              style={{
                color: props.isClick === "wallet" ? "#FFFFFF" : props.iconColor,
              }}
              onClick={() =>
                props.handleWalletClick && props.handleWalletClick("wallet")
              }
            />
          </div>
          <div className='relative'>
            {props.isClick === "history" && (
              <div
                className='absolute -top-4 left-1/2 h-1 w-36 -translate-x-1/2 transform bg-[#00EC97]'
                style={{
                  zIndex: 200,
                }}
              />
            )}
            <HistoryOutlined
              className='text-2xl'
              style={{
                color:
                  props.isClick === "history" ? "#FFFFFF" : props.iconColor,
              }}
              onClick={() =>
                props.handleHistoryClick && props.handleHistoryClick("history")
              }
            />
          </div>
        </div>
      )}
      <div>{props.title}</div>
    </div>
  );
};
