import { Text } from "~/components/Components/Text/Text";
import { Title } from "~/components/Components/Title/Title";

type Props = {
  title: string;
  updatedAt: string;
  body: string;
};

export function LegalTermsContentModule(props: Props) {
  return (
    <div>
      <Title className='text-[32px] font-black italic leading-[32px]'>
        {props.title}
      </Title>
      <Text className='mt-6 text-sm font-medium leading-[21px] text-faintAsh'>
        Last Updated: {props.updatedAt}
      </Text>

      <Text className='mt-4 font-medium leading-6 text-black'>
        {props.body}
      </Text>
    </div>
  );
}
