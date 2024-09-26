import { IsraelHeaderAtom } from "~/components/Atoms/IsraelHeaderAtom/IsraelHeaderAtom";

type Props = {
  headerProps: React.ComponentProps<typeof IsraelHeaderAtom>;
};

export const IsraelHomeHeaderModule = (props: Props) => {
  return <IsraelHeaderAtom {...props.headerProps} />;
};
