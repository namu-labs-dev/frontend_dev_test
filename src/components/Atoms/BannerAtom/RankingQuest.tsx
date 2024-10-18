import SVGAtom from "../SVGAtom/SVGAtom";

export const RankingQuest = () => {
  return (
    <div className='relative mt-8 h-[20.635rem] w-[39.0625rem] max-w-2xl overflow-hidden rounded-[1.875rem] border-2 border-[#0C0D0F] bg-[#00FF00] px-6 pt-6'>
      <div className='space-y-3.5'>
        <button className='rounded-xl border border-[#0C0D0F] bg-[#1838E0] px-4 py-2 text-base font-medium leading-6 text-white'>
          Ranking Quest
        </button>
        <div className='w-[16.875rem]'>
          <p className='text-sm font-medium '>
            The more quests you complete to take first place, the more rewards
            you will receive.
          </p>
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
  );
};
