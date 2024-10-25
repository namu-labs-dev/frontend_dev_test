import React from "react";
import FooterAtom, {
  linkProps,
  navProps,
} from "~/components/Atoms/FooterAtom/FooterAtom";

type Props = {
  footerTitle: string;
  navLinks: navProps[];
  iconLinks: linkProps[];
};

const HomeFooterModule = (props: Props) => {
  return (
    <div>
      <FooterAtom {...props} />
    </div>
  );
};

export default HomeFooterModule;
