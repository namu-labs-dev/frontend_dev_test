import { Card, Image } from "antd";
import "./custom.css";

type Props = {
  title?: string;
  subtitle?: string;
  useShadow?: boolean;
};

export const ListPointAtom = (props: Props) => {
  const {
    title = "$10",
    subtitle = "1000 Points",
    useShadow = false, // Changed to boolean
  } = props;

  // Set shadow based on useShadow
  const shadow = useShadow ? "custom-shadow" : "";

  return (
    <Card
      className={`w-[169px] rounded-[20px] border-[1.5px] border-black bg-white sm:w-[305px] ${shadow}`}
    >
      <div className='flex h-[64px] w-full items-center justify-center rounded-t-[20px] bg-[#00FF00] px-4'>
        <span className='text-center text-[32px] font-black italic leading-[32px]'>
          {title}
        </span>
      </div>
      <div className='flex flex-col items-center p-5'>
        <Image
          src='/images/points.png'
          className='h-[100px] w-[100px] sm:h-[176px] sm:w-[176px]'
          alt='Points'
          preview={false}
        />
        <span className='mt-5 text-center text-[20px] font-bold leading-[27px]'>
          {subtitle}
        </span>
      </div>
    </Card>
  );
};
