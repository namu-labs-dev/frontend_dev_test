import { IconFooterAtom } from "~/components/Atoms/FooterAtom/IconFooterAtom";

type Props = {
  footerProps: React.ComponentProps<typeof IconFooterAtom>;
};

export const HomePageFooterModule = (props: Props) => {
  return (
    <>
      <IconFooterAtom {...props.footerProps} />
    </>
  );
};
