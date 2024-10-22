import { Button } from "~/components/Components/Button/Button";
import { Title } from "~/components/Components/Title/Title";

type Props = {
  foo?: string;
};

export function NoticeHeaderModule(props: Props) {
  return (
    <div className='hidden lg:block'>
      <Title>Notice</Title>

      <Button>FAN-QUEST Notice</Button>
    </div>
  );
}
