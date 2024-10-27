import { Text } from "../Text/Text";
import { Title } from "../Title/Title";

type Props = {
  title: string;
  timestamp: string;
};

export function NoticeItem(props: Props) {
  return (
    <div className='border-b-2 border-black'>
      <Title className='mb-2 text-lg font-medium text-black'>
        {props.title}
      </Title>

      <Text style={{ color: "#8C8C8C" }} className='mb-4 font-medium'>
        {props.timestamp}
      </Text>
    </div>
  );
}
