import React from "react";
import FooterAtom from "~/components/Atoms/FooterAtom/FooterAtom";
import NavigationAtom from "~/components/Atoms/NavigationAtom/NavigationAtom";

type Props = {
  headerProps: React.ComponentProps<typeof NavigationAtom>;
  children?: React.ReactNode;
};

export const HomeHeaderLayerModule = (props: Props) => {
  return (
    <div className='grid min-h-screen'>
      <div className='self-start'>
        <NavigationAtom {...props.headerProps} />;
      </div>
      {props.children}

      <div className='self-end'>
        <FooterAtom />
      </div>
    </div>
  );
};
