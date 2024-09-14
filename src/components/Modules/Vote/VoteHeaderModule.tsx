import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";

type Props = {
  headerProps: React.ComponentProps<typeof HeaderAtom>;
};

export const VoteHeaderModule = (props: Props) => {
  return <HeaderAtom {...props.headerProps} />;
};
