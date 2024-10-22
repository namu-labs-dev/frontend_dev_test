"use client";

import FooterAtom from "~/components/Atoms/FooterAtom/FooterAtom";
import { MobileNavigationAtom } from "~/components/Atoms/MobileNavigationAtom/MobileNavigationAtom";
import NavigationAtom from "~/components/Atoms/NavigationAtom/NavigationAtom";

type Props = {
  children: React.ReactNode;
};

export function NoticeLayout(props: Props) {
  return (
    <div>
      <div className='hidden lg:block'>
        <NavigationAtom creators={[]} notifications={[]} />
      </div>

      <MobileNavigationAtom title='Notice' />

      {props.children}

      <FooterAtom />
    </div>
  );
}
