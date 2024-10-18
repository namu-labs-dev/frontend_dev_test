import { CheckOutlined } from "@ant-design/icons";
import { Button, Card, Divider, Image } from "antd";
import "./custom.css";

type Props = {
  title?: string;
  checkPoint?: number;
  checkStatus?: number;
  disableBtn?: boolean;
  useShadow?: boolean;
};

export const CheckAtom = (props: Props) => {
  const {
    title = "8.01 (Mon)",
    checkPoint = 1,
    checkStatus = 0,
    disableBtn = false,
    useShadow = false,
  } = props;

  // Set shadow class based on useShadow
  const shadowClass = useShadow ? "custom-shadow" : "";
  // Set button label based on checkStatus
  const btnLabel =
    checkStatus === 0 ? "Check" : checkStatus === 1 ? "Completed" : "Passed";
  // Disable button based on disableBtn
  const isBtnDisabled = disableBtn ? "cursor-not-allowed" : "";

  // Determine button styles based on checkStatus
  const buttonConfig = {
    style: {
      backgroundColor: "#00FF00",
      color: "#000000",
      padding: "10px 20px",
      fontSize: "14px",
    },
    disabled: false,
    icon: null as React.ReactNode, // Initialize icon as null
  };

  if (checkStatus === 0) {
    buttonConfig.icon = <CheckOutlined style={{ color: "#000000" }} />;
  } else if (checkStatus === 1) {
    buttonConfig.style = {
      backgroundColor: "#F0F0F0",
      color: "#000000",
      padding: "10px 20px",
      fontSize: "14px",
    };
    buttonConfig.disabled = true;
  } else if (checkStatus === 2) {
    buttonConfig.style = {
      backgroundColor: "#000000",
      color: "#FFFFFF",
      padding: "10px 20px",
      fontSize: "14px",
    };
    buttonConfig.disabled = true;
  }

  return (
    <Card className={`max-h[206px] w-[138px] bg-white ${shadowClass}`}>
      <div className='flex w-full items-center justify-center p-2'>
        <div className='text-center'>
          <span
            className='text-[14px] font-medium leading-[21px] text-black'
            style={{ display: "inline-block", marginBottom: "0px" }}
          >
            {title}
          </span>
          <Divider
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "black",
              marginTop: "0px",
            }}
          />
          <Image
            src='/images/points.png'
            alt='Points'
            width='60px'
            height='60px'
            className='mt-2'
          />
          <div className='mt-2'>
            <span className='text-[14px] font-medium leading-[21px] text-[#1838E0]'>
              {checkPoint} point
            </span>
          </div>
        </div>
      </div>
      <div className='mt-3 w-full text-center'>
        <Button
          type='primary'
          icon={buttonConfig.icon}
          style={buttonConfig.style}
          disabled={buttonConfig.disabled}
          className={`${isBtnDisabled} w-full px-5 py-[10px]`}
        >
          {btnLabel}
        </Button>
      </div>
    </Card>
  );
};
