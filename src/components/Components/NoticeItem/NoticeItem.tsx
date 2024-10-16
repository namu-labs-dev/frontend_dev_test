import { Text } from "../Text/Text";
import { Title } from "../Title/Title";

type Props = {
  title: string;
  timestamp: string;
};

export function NoticeItem(props: Props) {
  return (
    <div className='border-b-2 border-black'>
      <Title className='mb-2 text-black'>{props.title}</Title>

      <Text style={{ color: "#8C8C8C" }} className='mb-2'>
        {props.timestamp}
      </Text>
    </div>
  );
}
