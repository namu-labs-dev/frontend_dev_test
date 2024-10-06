import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";

type Props = {
  title: string;
  bgColor?: string;
  titleColor?: string;
};

export const PageWithFormHeaderModule = (props: Props) => {
  return (
    <HeaderAtom title={props.title} bgColor={props.bgColor} titleColor={props.titleColor}/>
  );
};
