import { CaretUpOutlined } from "@ant-design/icons";
import { CaretDownOutlined } from "@ant-design/icons";

type Props = {
  direction: "up" | "down";
  percentage: string;
};

export const AverageMovementAtom = (props: Props) => {
  return (
    <>
      {props.direction === "up" && (
        <span className='flex space-x-1.5 text-[#52C41A]'>
          <CaretUpOutlined />
          <p className='text-sm font-medium leading-[1.3125rem]'>
            {props.percentage}
          </p>
        </span>
      )}
      {props.direction === "down" && (
        <span className='flex space-x-1.5 text-[#F5222D]'>
          <CaretDownOutlined />
          <p className='text-sm font-medium leading-[1.3125rem]'>
            {props.percentage}
          </p>
        </span>
      )}
    </>
  );
};

export default AverageMovementAtom;
