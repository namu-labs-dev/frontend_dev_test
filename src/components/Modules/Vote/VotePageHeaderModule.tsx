import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";
import { BannerAtom } from "~/components/Atoms/BannerAtom/BannnerAtom";

type Props = {
  headerProps: React.ComponentProps<typeof HeaderAtom>;
};

export const VotePageHeaderModule = (props: Props) => {
  return (
    <>
      <HeaderAtom {...props.headerProps} />
    </>
  );
};
