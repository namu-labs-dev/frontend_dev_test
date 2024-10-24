import PrimaryBtn from "~/components/Components/PrimaryBtn/PrimaryBtn";
import SVGAtom from "../SVGAtom/SVGAtom";
import SecondaryBtn from "~/components/Components/SecondaryBtn/SecondaryBtn.tsx/SecondaryBtn";
import Image from "next/image";

type Props = {
  rankingQuestBanner: string;
  raffleQuestBanner: string;
};

export const BannerQuestAtom = (props: Props) => {
  return (
    <div className='flex flex-col items-center justify-center gap-y-5 px-[4%] md:flex-row md:gap-x-10 md:p-2'>
      <div className='relative h-[10rem] w-[87%]  md:h-[250px] md:w-[35%]'>
        <Image
          src={props.rankingQuestBanner}
          alt=''
          fill
          className='relative  object-cover object-center '
        />
      </div>
      <div className='relative h-[10rem] w-[87%]  md:h-[250px] md:w-[35%]'>
        <Image
          src={props.raffleQuestBanner}
          alt=''
          fill
          className='relative  object-cover object-center '
        />
      </div>
    </div>
  );
};
