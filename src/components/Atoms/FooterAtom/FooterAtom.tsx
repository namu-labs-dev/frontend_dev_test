'';
import Link from "next/link";
import SVGAtom from "../SVGAtom/SVGAtom";
import { usePathname } from "next/navigation";

type Props = {
  title: string;
};

//I want to make the footer border show according to route, for future iteration as well.
// Usually you would use a table to hold the footer routes but that can be handled in the future

export const FooterAtom = (props: Props) => {

  const pathname = usePathname()

  // We want the footer to be shown regardless of the drawer for better User Experience. Also it coincides with the design.
  
  /*
    The message footer menu is the one that is supposed to be shown since it coincides with the page and not the wallet icon in the figma file.
    This should be corrected in the figma file. 
  */
  return (
    <div className="flex relative z-[1000] h-[60px] items-center justify-between pl-4 pr-4 bg-[#262626]">
      <Link href={"home"} className={`flex h-[60px] w-full justify-center items-center`}>
        <SVGAtom
          iconName="DollarCircle"
          width={24}
          height={24}
        />
      </Link>
      <Link href={"message"} className={`flex h-[60px] w-full justify-center items-center ${ pathname == "/marvellous/message" ? "border-t-2 border-t-[#00EC97]" : "" }`}>
        <SVGAtom
          iconName="Message"
          width={24}
          height={24}
          className={`${ pathname == "/marvellous/message" ? "fill-[white]" : "fill-[#8C8C8C]"}`}
        />
      </Link>
      <Link href={"wallet"} className={`flex h-[60px] w-full justify-center items-center`}>
        <SVGAtom
          iconName="Wallet"
          width={24}
          height={24}
        />
      </Link>
      <Link href={"history"} className={`flex h-[60px] w-full justify-center items-center`}>
        <SVGAtom
          iconName="History"
          width={24}
          height={24}
        />
      </Link>
    </div>
  );
};
