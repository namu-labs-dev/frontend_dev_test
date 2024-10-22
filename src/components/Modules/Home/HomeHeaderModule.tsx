import NavigationAtom from "~/components/Atoms/NavigationAtom/NavigationAtom";

type Props = {
  headerProps: React.ComponentProps<typeof NavigationAtom>;
};

export const HomeHeaderModule = (props: Props) => {
  return <NavigationAtom {...props.headerProps} />;
};
