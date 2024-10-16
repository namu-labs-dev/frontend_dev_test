import { Text } from "../Text/Text";
import { Title } from "../Title/Title";

type Props = {
  title: string;
  // todo: change to Date
  timestamp: string;
};

export function NoticeHeader(props: Props) {
  return (
    <div className='flex h-[43px] items-start justify-between border-b-2 border-black'>
      <Title className='text-black'>{props.title}</Title>

      <Text style={{ color: "#8C8C8C" }}>{props.timestamp}</Text>
    </div>
  );
}
