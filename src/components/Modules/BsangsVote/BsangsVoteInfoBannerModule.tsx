type Props = {
  deductedAmount: number;
  currentAmount: number;
};

export const BsangsVoteInfoBannerModule = (props: Props) => {
  return (
    <div className="flex h-fit content-center justify-center bg-[#F0F5FF] px-[22px] py-[14px]">
      <span className="self-center  text-[18px] leading-[28px]">
        <span className="font-bold text-[#2F54EB]">{`${props.deductedAmount} FAO`}</span>
        {` will be deducted when voting is generated (Amount : ${props.currentAmount} FAO)`}
      </span>
    </div>
  );
};
