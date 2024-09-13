import React, { useState } from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { footerMenuItems } from "~/constants";
import { useHomeContext } from "~/providers/home-provider";
import { IconName, IFooterMenu } from "~/types";
import { cn } from "~/utils/common";

type Props = {};

const MenuItem = ({ name, icon }: { name: IFooterMenu; icon: IconName }) => {
  const { activeItem, setActiveItem } = useHomeContext();
  return (
    <div
      className={cn("flex h-full flex-1 items-center justify-center", {
        "border-kactive border-t-2 transition-all duration-150 ease-in":
          activeItem == name,
      })}
      onClick={() => setActiveItem(name)}
    >
      <SVGAtom iconName={icon} width={24} height={24} color='black' />
    </div>
  );
};
const FooterMenu = (props: Props) => {
  const [isActive, setIsActive] = useState<IFooterMenu>("wallet");
  return (
    <div className='flex h-full w-full'>
      {footerMenuItems.map((item, idx) => (
        <MenuItem icon={item.icon} name={item.name} key={idx} />
      ))}
    </div>
  );
};

export default FooterMenu;
