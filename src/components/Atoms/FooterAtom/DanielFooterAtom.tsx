import Link from "next/link";
import { usePathname } from "next/navigation";
import SVGAtom from "../SVGAtom/SVGAtom";

interface FooterNavComponentProps {
  icon: "currency" | "chat" | "wallet" | "history";
  path: string;
}

const footerNavData: FooterNavComponentProps[] = [
  {
    icon: "currency",
    path: "/",
  },
  {
    icon: "chat",
    path: "/",
  },
  {
    icon: "wallet",
    path: "/daniel/testPage1",
  },
  {
    icon: "history",
    path: "/",
  },
];

export const DanielFooterAtom = () => {
  const pathname = usePathname();

  return (
    <>
      <div className='flex w-full items-center justify-center bg-[#262626]'>
        <div className='flex flex-row justify-between'>
          {footerNavData.map((data, i) => {
            const { icon, path } = data;

            return (
              <Link href={path} key={i} className='no-underline outline-none'>
                <div
                  className={`flex h-16 w-32 items-center justify-center border-t-2 pt-4 duration-200 ease-in ${pathname === path ? "border-t-[#00EC97]" : "border-t-transparent"}`}
                >
                  <SVGAtom iconName={icon} className='h-12 w-12' />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
