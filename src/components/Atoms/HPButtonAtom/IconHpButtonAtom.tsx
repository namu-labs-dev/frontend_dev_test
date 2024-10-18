import { BellOutlined } from "@ant-design/icons";

export const IconHpButtonAtom = () => {
  return (
    <button type='button' className={`rounded-lg bg-black px-4 py-2`}>
      <BellOutlined className='text-primaryGreen hover:text-white' />
    </button>
  );
};
