import React, { useState } from 'react';
import SVGAtom from '~/components/Atoms/SVGAtom/SVGAtom';
import {  footerMenuItems } from '~/constants';
import { IconName, IFooterMenu } from '~/types';

type Props = {}


const MenuItem = ({name, icon}:{name:IFooterMenu, icon:IconName})=>{
    return <div className='flex-1 flex items-center justify-center'>
        <SVGAtom iconName={icon} width={20} height={20} color="black" />
    </div>
}
const FooterMenu = (props: Props) => {
    const [isActive, setIsActive] = useState<IFooterMenu>('wallet')
  return (
    <div className='w-full h-full flex'>
        {footerMenuItems.map((item, idx)=>(
            <MenuItem icon={item.icon} name={item.name} />
        ))}
    </div>
  )
}

export default FooterMenu