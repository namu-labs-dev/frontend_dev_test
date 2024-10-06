import { TestPageHeaderAtom } from "~/components/Atoms/TestPageHeaderAtom/TestPageHeaderAtom";

type Props = {
  headerProps: React.ComponentProps<typeof TestPageHeaderAtom>;
};

export const TestPageOneHeaderModule = (props: Props) => {
  return <TestPageHeaderAtom {...props.headerProps} />;
};
