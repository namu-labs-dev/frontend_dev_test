import { BadgeAtom } from "../BadgeAtom/BadgeAtom";
import { CheckOutlined } from "@ant-design/icons";

type Props = {
  type: "raffle" | "ranking";
  disabled?: boolean;
  children: React.ReactNode;
};

export const RankingRaffleAtom = ({
  type,
  disabled = false,
  children,
}: Props) => {
  const bgColor = type === "raffle" ? "bg-primaryBlue" : "bg-primaryGreen";
  const textColor = type === "raffle" ? "text-white" : "text-black";
  const badgeType = disabled ? "ended" : type;
  const badgeText = badgeType === "raffle" ? "Raffle Quest" : "Ranking Quest";

  return (
    <div
      className={`flex w-96 flex-col gap-y-4 p-4 ${disabled ? `border-2 border-[#8C8C8C] text-[#8C8C8C]` : `${bgColor} ${textColor}`} rounded-lg`}
    >
      <div className='flex w-full justify-between'>
        <BadgeAtom type={badgeType} innerText={badgeText} />
        {!disabled && (
          <div
            className={`h-8 w-8 rounded-full ${type === "raffle" ? "bg-primaryGreen" : "bg-black"} flex items-center justify-center`}
          >
            <CheckOutlined
              size={16}
              className={`${type === "raffle" ? "text-black" : "text-primaryGreen"} `}
            />
          </div>
        )}
      </div>
      <div className='w-11/12 text-left'>{children}</div>
    </div>
  );
};
