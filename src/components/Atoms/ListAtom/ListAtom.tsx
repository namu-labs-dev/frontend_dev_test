import { Card, Image, Avatar } from "antd";
import "./custom.css";

type Props = {
  title?: string; // Title
  listPoint?: number; // Points
  description?: string; // Description
  author?: string; // Author
  avatar?: string; // Avatar
  cover?: string; // Cover
  status?: number; // Status
  bannerColor?: string; // Banner Color Options
  useShadow?: boolean; // Use Shadow
  name: string;
  width?: number;
  icon: string;
};

export const ListAtom = (props: Props) => {
  // Destructured the props here and set default
  const {
    title = "[$2500+ in rewards] Fullhouse.gg Official Airdrop Quests",
    listPoint = 1000,
    description = "Quest description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    author = "Fractal Visions",
    cover, // "/images/cover1.png" | "/images/cover2.png" Cover Options
    bannerColor = "green",
    status = 1, // 0 - Ended, 1 - Ranking
    avatar = "/images/avatar.png",
    useShadow = false,
  } = props;

  // Set banner color based on bannerColor here
  const bannerBgColor =
    bannerColor === "green" ? "bg-[#00FF00]" : "bg-[#1838E0]";
  const bannerTextColor = bannerColor === "green" ? "text-black" : "text-white";
  const bannerDateColor =
    bannerColor === "green" ? "text-[#0C0D0F]" : "text-white";

  // Set status background and text based on onGoingStatus
  const statusBgColor = status === 1 ? "bg-[#1838E0]" : "bg-[#F0F0F0]";
  const statusText = status === 1 ? "Ranking" : "Ended";
  const statusTextColor = status === 1 ? "text-white" : "text-[#8C8C8C]";
  const statusBorderColor = status === 1 ? "border-black" : "border-[#8C8C8C]";

  // Set shadow based on useShadow
  const shadow = useShadow ? "custom-shadow" : "";

  return (
    <Card
      style={{ height: "100%" }}
      className={`relative max-h-[400px] w-[270px] overflow-hidden bg-white sm:max-h-[515px] sm:w-[348px] xl:max-h-[483px] xl:w-[360px] ${shadow}`}
    >
      <div
        className={`h-[64px] w-full rounded-t-[20px] ${bannerBgColor} flex items-center justify-between px-4`}
      >
        <div className='flex items-center'>
          <span
            className={`${bannerTextColor} text-[26px] font-black italic leading-[35.88px]`}
          >
            {listPoint.toLocaleString()} P
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
              <span className='line-clamp-2 text-[20px] font-bold leading-[27px] text-black'>
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
        <div className='relative h-[220px] w-full'>
          <Image
            src={cover}
            alt='Cover'
            height='100%'
            width='100%'
            preview={false}
            className='rounded-b-[20px] object-cover object-center'
          />
        </div>
      )}
    </Card>
  );
};
