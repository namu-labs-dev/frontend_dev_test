import SVGAtom from "../SVGAtom/SVGAtom";

export const RaffleQuest = () => {
  return (
    <div className='relative h-[20.635rem] w-[39.0625rem] max-w-2xl overflow-hidden rounded-[30px] border-2 border-[#0C0D0F] bg-[#1838E0] px-6 pt-6'>
      <div className='space-y-3.5'>
        <button className='rounded-xl border-2 border-[#0C0D0F] bg-[#00FF00] px-4 py-2 text-base font-medium leading-6'>
          Raffle Quest
        </button>
        <div className='w-[16.875rem]'>
          <p className='text-sm font-medium text-white '>
            The more quests you complete to take first place, the more rewards
            you will receive.
          </p>
        </div>
      </div>

      <div className='absolute -right-[7.3125rem] top-[1.5625rem]'>
        <SVGAtom iconName='raffle' width={474} height={463} />
      </div>
    </div>
  );
};
