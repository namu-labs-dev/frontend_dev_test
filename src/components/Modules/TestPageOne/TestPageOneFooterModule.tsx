import { BottomNavAtom } from "~/components/Atoms/BottomNavAtom/BottomNavAtom";

type Props = {
  footerProps: React.ComponentProps<typeof BottomNavAtom>;
};

export const TestPageOneFooterModule = (props: Props) => {
  return <BottomNavAtom {...props.footerProps} />;
};
