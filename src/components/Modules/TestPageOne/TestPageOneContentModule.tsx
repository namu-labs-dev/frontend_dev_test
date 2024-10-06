import { Message } from "~/app/ibuchukwu/testpage1/container/TestpageOneContainer";

type Props = {
  messages: Message[];
};

export const TestPageOneContentModule = (props: Props) => {
  return (
    <div className='flex flex-col gap-5'>
      <h1>Messages</h1>
    </div>
  );
};
