import { IsraelHeaderAtom } from "~/components/Atoms/IsraelHeaderAtom/IsraelHeaderAtom";

type Props = {
  title: string;
  onClickLeftIcon?: () => void;
  backgroundColor?: string;
  textColor?: string;
};

export const IsraelPageWithFormHeaderModule = (props: Props) => {
  const { title, backgroundColor, textColor } = props;

  return (
    <IsraelHeaderAtom
      title={title}
      backgroundColor={backgroundColor}
      textColor={textColor}
    />
  );
};
