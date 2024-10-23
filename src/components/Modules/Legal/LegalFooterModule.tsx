import FooterAtom from "~/components/Atoms/FooterAtom/FooterAtom";

type Props = {
  footerAtomProps: React.ComponentProps<typeof FooterAtom>;
};

export function LegalFooterModule(props: Props) {
  return <FooterAtom {...props.footerAtomProps} />;
}
