import { Card, Image } from "antd";
import "./custom.css";

type Props = {
  title?: string; // Title
  description?: string; // Description
  author?: string; // Author
  avatar?: string; // Avatar
  onGoingStatus?: boolean; // Status
  color?: "green" | "blue"; // Background color
};

export const ListAtom = (props: Props) => {
  const { color, onGoingStatus } = props; // Destructured the color prop here

  // Set background color based on the color prop here
  const bannerBgColor = color === "green" ? "bg-[#00FF00]" : "bg-[#1838E0]";
  const bannerTextColor = color === "green" ? "text-black" : "text-white";

  // Set banner background and text based on onGoingStatus
  const statusBgColor = onGoingStatus ? "bg-[#1838E0]" : "bg-gray-400";
  const statusText = onGoingStatus ? "Ranking" : "Ended";
  const statusTextColor = onGoingStatus ? "text-white" : "text-gray-700";
  const statusBorderColor = onGoingStatus ? "border-black" : "border-gray-500";

  return (
    <Card className='h-[460px] w-[270px] rounded-[20px] border-[1.5px] border-black bg-white sm:h-[515px] sm:w-[348px] xl:h-[483px] xl:w-[413px]'>
      <div
        className={`h-[64px] w-full rounded-t-[20px] ${bannerBgColor} flex items-center justify-between px-4`}
      >
        <div className='flex items-center'>
          <span className={`${bannerTextColor} font-semibold`}>1000 P</span>
          <Image
            src='/images/list_img.png'
            alt='Icon'
            width={32}
            height={32}
            preview={false} // Disables image preview on click
            className='ml-2'
          />
        </div>

        <div>
          <span className={`${bannerTextColor} font-medium`}>14 days left</span>
        </div>
      </div>
      <div className='p-5'>
        <div
          className={`${statusBorderColor} ${statusBgColor} flex h-[32px] w-[98px] items-center justify-center rounded-md border`}
        >
          <span className={`${statusTextColor}`}>{statusText}</span>
        </div>
      </div>
    </Card>
  );
};
