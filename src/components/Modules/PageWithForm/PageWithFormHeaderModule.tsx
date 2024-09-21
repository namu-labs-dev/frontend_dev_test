import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";

type Props = {
  title: string;
  // added custom props for the new features
  weight?: string;
  color?: string;
  onClickLeftIcon?: () => void;
};

export const PageWithFormHeaderModule = (props: Props) => {
  return (
    <HeaderAtom
      title={props.title}
      weight={props.weight}
      onClickLeftIcon={props.onClickLeftIcon}
      color={props.color}
    />
  );
};
