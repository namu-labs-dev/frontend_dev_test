import { Text } from "../Text/Text";
import { Title } from "../Title/Title";

type Props = {
  title: string;
  // todo: change to Date
  timestamp: string;
};

export function NoticeHeader(props: Props) {
  return (
    <div className='flex items-center justify-between border-b-2 border-black px-6 py-4'>
      <Title className='text-lg font-medium text-black'>{props.title}</Title>

      <Text style={{ color: "#8C8C8C" }}>{props.timestamp}</Text>
    </div>
  );
}
