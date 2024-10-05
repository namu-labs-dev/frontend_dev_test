import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";

type Props = {
  title: string;
  bg: string;
  fontWeight: string;
  fontSize: string;
};

export const PageWithVoteFormHeaderModule = (props: Props) => {
  return (
    <HeaderAtom title={props.title} bg={props.bg} fontSize={props.fontSize} fontWeight={props.fontWeight} />
  );
};
