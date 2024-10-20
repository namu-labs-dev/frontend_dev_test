import SVGAtom from "../SVGAtom/SVGAtom";

export const BannerAtom = () => {
  return (
    <div className='relative mx-auto h-[330px] w-[625px] max-w-2xl overflow-hidden rounded-[30px] border-2 border-[#0C0D0F] bg-[#00FF00] px-6 pt-6'>
      <div className='space-y-3.5'>
        <button className='rounded-xl bg-[#1838E0] px-4 py-2 text-base font-medium text-white'>
          Ranking Quest
        </button>
        <div className='w-[270px]'>
          <p className='text-sm font-medium '>
            The more quests you complete to take first place, the more rewards
            you will receive.
          </p>
        </div>
      </div>

      <div className='absolute bottom-0 right-6 flex items-end justify-end'>
        <div className='flex flex-col items-center'>
          {/* <SVGAtom iconName="coin1"/> */}
          <p className='absolute ml-[-36px] mt-[33px] text-[40px] font-black italic text-[#302CF8]'>
            3
          </p>
          <SVGAtom
            iconName='box3'
            className='mb-[-34px] mr-[-13px]'
            width={135}
            height={99}
          />
        </div>
        <div className='flex flex-col items-center'>
          <p className='absolute left-[159px] top-[166px] text-[40px] font-black italic text-[#302CF8]'>
            2
          </p>
          <SVGAtom
            iconName='box2'
            className='mb-[-33px] mr-[-1px]'
            width={135}
            height={170}
          />
        </div>
        <div className='flex flex-col items-center'>
          <SVGAtom
            iconName='box1'
            className='mb-[-27px]'
            width={134}
            height={284}
          />
        </div>
      </div>
    </div>
  );
};
