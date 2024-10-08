import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";

type Props = {
  title: string;
  onClickLeftIcon: () => void;
  onClickRightIcon: () => void;
};

export const HomeWithModalHeaderModule = (props: Props) => {
  return (
    <HeaderAtom
      title={props.title}
      onClickRightIcon={props.onClickRightIcon}
      onClickLeftIcon={props.onClickLeftIcon}
    />
  );
};
