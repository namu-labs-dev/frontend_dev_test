import Image from "next/image";
import { Message } from "~/app/ibuchukwu/testpage1/container/Testpage1Container";
import { TestPageOneMessageComponent } from "~/components/Components/TestPageOneContentComponent/TestPageOneMessageComponent";
import { TestPageOneLoadingModal } from "~/components/Components/TestPageOneLoadingModal/TestPageOneLoadingModal";

type Props = {
  messages: React.ComponentProps<
    typeof TestPageOneMessageComponent
  >["messages"];
  modalProps: React.ComponentProps<typeof TestPageOneLoadingModal>;
};

export const TestPageOneContentModule = (props: Props) => {
  return (
    <div className='flex h-full flex-col'>
      <div className='px-[20px]'>
        <h1 className='font-inter text-[28px] font-[600] text-white'>
          Messages
        </h1>
        <div className='mt-5 w-[65px]'>
          <div className='flex h-[65px] items-center justify-center rounded-full bg-[#2C2D30]'>
            <Image
              src={"/assets/star.png"}
              alt='star icon'
              width={46}
              height={46}
            />
          </div>
          <p className='font-inter text-center text-[16px] text-white'>
            Proxima
          </p>
        </div>
      </div>
      <TestPageOneMessageComponent messages={props.messages} />
      <TestPageOneLoadingModal {...props.modalProps} />
    </div>
  );
};
