import { HeaderAtom } from "~/components/Atoms/ProximaHeaderAtom/HeaderAtom";

type Props = {
  headerProps: React.ComponentProps<typeof HeaderAtom>;
};

export function HomeHeaderModule(props: Props) {
  return <HeaderAtom {...props.headerProps} />;
}
