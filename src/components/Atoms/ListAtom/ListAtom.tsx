import { Card, Image, Avatar } from "antd";
import "./custom.css";

type Props = {
  title?: string; // Title
  description?: string; // Description
  author?: string; // Author
  avatar?: string; // Avatar
  cover?: string;
  onGoingStatus?: boolean; // Status
  bannerColor?: "green" | "blue"; // Banner color options
};

export const ListAtom = (props: Props) => {
  // Destructured the props here and set default
  const {
    title = "[$2500+ in rewards] Fullhouse.gg Official Airdrop Quests",
    description = "Quest description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author = "Fractal Visions",
    cover, // "/images/cover1.png" | "/images/cover2.png" Cover Options
    bannerColor = "green",
    onGoingStatus = "true",
    avatar = "/images/avatar.png",
  } = props;

  // Set banner color based on bannerColor here
  const bannerBgColor =
    bannerColor === "green" ? "bg-[#00FF00]" : "bg-[#1838E0]";
  const bannerTextColor = bannerColor === "green" ? "text-black" : "text-white";
  const bannerDateColor =
    bannerColor === "green" ? "text-[#0C0D0F]" : "text-white";

  // Set status background and text based on onGoingStatus
  const statusBgColor = onGoingStatus ? "bg-[#1838E0]" : "bg-[#F0F0F0]";
  const statusText = onGoingStatus ? "Ranking" : "Ended";
  const statusTextColor = onGoingStatus ? "text-white" : "text-[#8C8C8C]";
  const statusBorderColor = onGoingStatus ? "border-black" : "border-[#8C8C8C]";

  return (
    <Card className='max-h-[460px] w-[270px] rounded-[20px] border-[1.5px] border-black bg-white sm:max-h-[515px] sm:w-[348px] xl:max-h-[483px] xl:w-[413px]'>
      <div
        className={`h-[64px] w-full rounded-t-[20px] ${bannerBgColor} flex items-center justify-between px-4`}
      >
        <div className='flex items-center'>
          <span
            className={`${bannerTextColor} text-[26px] font-black italic leading-[35.88px]`}
          >
            1000 P
          </span>
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
          <span
            className={`${bannerDateColor} text-[14px] font-normal leading-[21px]`}
          >
            14 days left
          </span>
        </div>
      </div>
      <div className='p-5'>
        <div
          className={`${statusBorderColor} ${statusBgColor} flex h-[32px] w-[98px] items-center justify-center rounded-md border`}
        >
          <span className={`${statusTextColor} text-[16px] font-medium`}>
            {statusText}
          </span>
        </div>
        {!cover ? (
          // Layout without cover
          <>
            <div className='mt-3 flex items-center'>
              <Avatar
                src={
                  <img
                    src={avatar}
                    width='44px'
                    height='44px'
                    alt='Author Avatar'
                  />
                }
              />
              <span className='ml-2 text-[16px] font-medium leading-6 text-[#262626]'>
                {author}
              </span>
            </div>
            <div className='mt-3'>
              <span className='text-[20px] font-bold leading-[27px] text-black'>
                {title}
              </span>
            </div>
            <div className='mt-3'>
              <span className='line-clamp-2 text-ellipsis font-medium leading-[21px] text-[#595959]'>
                {description}
              </span>
            </div>
          </>
        ) : (
          // Layout with cover
          <>
            <div className='mt-3'>
              <span className='text-[20px] font-bold leading-[27px] text-black'>
                {title}
              </span>
            </div>
            <div className='mt-3 flex items-center'>
              <Avatar
                src={
                  <img
                    src={avatar}
                    width='44px'
                    height='44px'
                    alt='Author Avatar'
                  />
                }
              />
              <span className='ml-2 text-[16px] font-medium leading-6 text-[#262626]'>
                {author}
              </span>
            </div>
          </>
        )}
      </div>

      {cover && (
        <div className='w-full'>
          <Image
            src={cover}
            alt='Cover'
            height='220'
            width='100%'
            preview={false}
          />
        </div>
      )}
    </Card>
  );
};
