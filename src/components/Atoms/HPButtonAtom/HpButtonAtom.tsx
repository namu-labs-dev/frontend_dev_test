type Props = {
  innerText: string;
};

export const HpButtonAtom = (props: Props) => {
  return (
    <button type='button' className={`rounded-lg bg-black px-4 py-2`}>
      <span className='text-primaryGreen'>{props.innerText}</span>
    </button>
  );
};
