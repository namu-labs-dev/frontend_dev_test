import { VoteHeaderAtom } from "~/components/Atoms/VoteHeaderAtom/VoteHeaderAtom";

type Props = {
  title: string;
};

export const VoteFormHeaderModule = (props: Props) => {
  return <VoteHeaderAtom title={props.title} />;
};
