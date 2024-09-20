import { Typography } from "antd";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { SVGAtomContainer } from "~/components/Atoms/SVGAtomContainer/SVGAtomContainer";

const { Title, Text } = Typography;

type Props = {
  title: string;
};

export const HomeContentDescriptionModule = (props: Props) => {
  return (
    <div className='px-5'>
      <Title className='text-2xl text-white' style={{ color: "white" }}>
        {props.title}
      </Title>

      <div className='flex w-fit flex-col items-center'>
        <div className='relative flex h-[65px] w-[65px] cursor-pointer items-center justify-center rounded-full bg-[#2C2D30]'>
          <SVGAtomContainer className='flex h-[46px] w-[46px] items-center justify-center'>
            <SVGAtom
              iconName='splashStar'
              width={34}
              height={36}
              className=''
            />
          </SVGAtomContainer>

          <div className='absolute right-5 top-3 h-[4px] w-[4px] rounded-full bg-[#00EC97]' />
        </div>

        <Text className='font-normal' style={{ color: "white", marginTop: 10 }}>
          Proxima
        </Text>
      </div>
    </div>
  );
};
