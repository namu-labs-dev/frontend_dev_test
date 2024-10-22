"use client";

import clsx from "clsx";
import { type Legal } from "~/app/legal/container/LegalContainer";
import NavigationAtom from "~/components/Atoms/NavigationAtom/NavigationAtom";
import { Button } from "~/components/Components/Button/Button";
import { Title } from "~/components/Components/Title/Title";

type Props = {
  title: string;
  onChangeLegal: (val: Legal) => void;
  legal: Legal;
  navigationProps: React.ComponentProps<typeof NavigationAtom>;
};

export function LegalHeaderModule(props: Props) {
  return (
    <div>
      <NavigationAtom {...props.navigationProps} />

      <div className='flex items-center justify-between p-5 px-[40px]'>
        <Title className='hidden text-[42px] font-black italic lg:block'>
          {props.title}
        </Title>

        <div>
          <Button
            className={clsx("border-transparent", {
              "bg-black text-base-green": props.legal === "tos",
            })}
            onClick={() => props.onChangeLegal("tos")}
          >
            Terms of Service
          </Button>

          <Button
            className={clsx("border-transparent", {
              "bg-black text-base-green": props.legal === "privacy",
            })}
            onClick={() => props.onChangeLegal("privacy")}
          >
            Privacy Policy
          </Button>
        </div>
      </div>
    </div>
  );
}
