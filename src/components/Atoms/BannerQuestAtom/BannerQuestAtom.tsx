import PrimaryBtn from "~/components/Components/PrimaryBtn/PrimaryBtn";
import SVGAtom from "../SVGAtom/SVGAtom";
import SecondaryBtn from "~/components/Components/SecondaryBtn/SecondaryBtn.tsx/SecondaryBtn";

type Props = {
  rankingBtnText: string;
  raffleBtnText: string;
  raffleQuestInfo: string;
  rankingQuestInfo: string;
  onClickRanking: () => void;
  onClickRaffle: () => void;
};

export const BannerQuestAtom = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center gap-y-5 p-[4%] md:flex-row md:gap-x-10 md:p-2'>
      <div className='bg-primaryGreen relative h-[15.635rem] w-[25rem] max-w-2xl overflow-hidden rounded-[1.875rem] border-2 border-[#0C0D0F] px-6 pt-6 md:h-[18.635rem] md:w-[30.0625rem]'>
        <div className='space-y-3.5'>
          <SecondaryBtn color='blue' onClick={props.onClickRanking}>
            {props.rankingBtnText}
          </SecondaryBtn>
          <div className='relative z-10 max-w-[16.875rem] md:w-[16.87rem]'>
            <p className='text-sm font-medium '>{props.rankingQuestInfo}</p>
          </div>
        </div>

        <div className='absolute -top-[2.125rem] right-6 flex flex-col items-end'>
          <SVGAtom
            iconName='star'
            width={84}
            style={{ height: "3.75rem" }}
            className=''
          />
          <SVGAtom
            iconName='ranking'
            width={384}
            style={{ height: "18.75rem !important", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className='relative h-[15.635rem] w-[25rem] max-w-2xl overflow-hidden rounded-[30px] border-2 border-[#0C0D0F] bg-[#1838E0] px-6 pt-6 md:h-[18.635rem] md:w-[30.0625rem]'>
        <div className='space-y-3.5'>
          <SecondaryBtn color='green' onClick={props.onClickRaffle}>
            {props.raffleBtnText}
          </SecondaryBtn>
          <div className='max-w-[16.875rem] md:w-[16.875rem]'>
            <p className='relative z-10 text-sm font-medium text-white '>
              {props.raffleQuestInfo}
            </p>
          </div>
        </div>

        <div className='absolute -right-[7.3125rem] top-[1.5625rem]'>
          <SVGAtom iconName='raffle' width={474} height={463} />
        </div>
      </div>
    </div>
  );
};
