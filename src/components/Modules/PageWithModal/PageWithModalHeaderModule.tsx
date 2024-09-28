import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";

type Props = {
  title: string;
  onClickLeftIcon: () => void;
  onClickRightIcon: () => void;
};

export const PageWithModalHeaderModule = (props: Props) => {
  return (
    <HeaderAtom
      title={props.title}
      onClickRightIcon={props.onClickLeftIcon}
      onClickLeftIcon={props.onClickLeftIcon}
    />
  );
};
