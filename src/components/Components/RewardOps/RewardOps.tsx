import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { rewardMap } from "~/utils/common";

export type Props = {
  foo?: string;
  type: "point" | "token" | "nft" | "sbt";
  withIcon?: boolean;
};

export type Icon = "point" | "nft" | "sbt";

export type Reward = {
  label: string;
  icon: Icon;
  color: string;
};

export function RewardOps({ type = "nft", ...props }: Props) {
  const reward = rewardMap[type];

  return (
    <div
      className='flex w-fit items-center gap-[6px] rounded-[10px] border-2 border-black px-5 py-[10px]'
      style={{ backgroundColor: reward.color }}
    >
      {props.withIcon && (
        <SVGAtom iconName={reward.icon} className='h-[24px] w-[22px]' />
      )}

      <span className='font-medium'>{reward.label}</span>
    </div>
  );
}
