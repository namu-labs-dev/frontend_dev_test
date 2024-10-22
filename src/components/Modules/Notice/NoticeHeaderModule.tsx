import { Button } from "~/components/Components/Button/Button";
import { Title } from "~/components/Components/Title/Title";

type Props = {
  foo?: string;
};

export function NoticeHeaderModule(props: Props) {
  return (
    <div className='hidden items-center justify-between py-5 lg:flex'>
      <Title className='text-[42px] font-black italic'>Notice</Title>

      <Button className='bg-black text-lg font-medium text-base-green'>
        FAN-QUEST Notice
      </Button>
    </div>
  );
}
