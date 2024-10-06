import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  drawerProps: {
    isDrawerOpen: boolean;
    setIsDrawerOpen: (value: boolean) => void;
  };
};

interface FooterTabItem {
  link: string;
  icon: "dollarCircle" | "message" | "wallet" | "history";
}

const tabItems: FooterTabItem[] = [
  {
    link: "/",
    icon: "dollarCircle",
  },
  {
    link: "/",
    icon: "message",
  },
  {
    link: "/",
    icon: "wallet",
  },
  {
    link: "/",
    icon: "history",
  },
];

export const PhilipFooterAtom = (props: Props) => {
  return (
    <div className='flex h-[60px] items-center justify-center bg-[#262626]'>
      <div className='flex h-full w-full flex-row'>
        <div className={`flex flex-1 items-center justify-center`}>
          <SVGAtom iconName='dollarCircle' className='aspect-[1/1] w-6' />
        </div>
        <div
          onClick={() => props.drawerProps.setIsDrawerOpen(false)}
          className={`flex flex-1 items-center justify-center ${!props.drawerProps.isDrawerOpen && "border-t-2 border-t-[#00EC97]"}`}
        >
          <SVGAtom iconName='message' className='aspect-[1/1] w-6' />
        </div>
        <div
          onClick={() => props.drawerProps.setIsDrawerOpen(true)}
          className={`flex flex-1 items-center justify-center ${props.drawerProps.isDrawerOpen && "border-t-2 border-t-[#00EC97]"}`}
        >
          <SVGAtom iconName='wallet' className='aspect-[1/1] w-6' />
        </div>
        <div className={`flex flex-1 items-center justify-center`}>
          <SVGAtom iconName='history' className='aspect-[1/1] w-6' />
        </div>
      </div>
    </div>
  );
};
