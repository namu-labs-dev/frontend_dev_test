import React from "react";
import FooterAtom from "~/components/Atoms/FooterAtom/FooterAtom";

type navProps = {
  label: string;
  href: string;
};

type linkProps = {
  icon: React.ReactNode;

  href: string;
};
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
