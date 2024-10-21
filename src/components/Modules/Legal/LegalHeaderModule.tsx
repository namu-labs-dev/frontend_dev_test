"use client";

import { Button } from "~/components/Components/Button/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Title } from "~/components/Components/Title/Title";

type Props = {
  foo?: string;
};

export function LegalHeaderModule(props: Props) {
  const pathname = usePathname();

  return (
    <div className='pb-6 lg:flex lg:items-center lg:justify-between'>
      <Title className='hidden text-[42px] font-black italic leading-[50px] lg:block'>
        Legal
      </Title>

      <div>
        <Link href='/legal'>
          <Button
            className={clsx(
              pathname === "/legal"
                ? "bg-black text-lg text-[#00FF00]"
                : "text-[#8C8C8C]",
              "border-transparent"
            )}
          >
            Terms of Service
          </Button>
        </Link>

        <Link href='/legal/privacy'>
          <Button
            className={clsx(
              pathname.includes("privacy")
                ? "bg-black text-lg text-[#00FF00]"
                : "text-[#8C8C8C]",
              "border-transparent px-3 py-[6px]"
            )}
          >
            Privacy Policy
          </Button>
        </Link>
      </div>
    </div>
  );
}
