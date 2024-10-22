
"use client";

import clsx from "clsx";
import NavigationAtom from "~/components/Atoms/NavigationAtom/NavigationAtom";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { Button } from "~/components/Components/Button/Button";
import { Title } from "~/components/Components/Title/Title";

type Props = {
  title: string;
  onClickIcon?: () => void;
  navigationProps: React.ComponentProps<typeof NavigationAtom>;
};

export function AuthHeaderModule(props: Props) {
  return (
    <div className="flex flex-row">
        <SVGAtom iconName="closeCircle"></SVGAtom>
        <span>{props.title}</span>
    </div>
  );
}
