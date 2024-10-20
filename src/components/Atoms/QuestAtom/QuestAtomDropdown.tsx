import { useState } from "react";
import { Dropdown, Button, Space } from "antd";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import { ChevronAtom } from "../ChevronAtom/ChevronAtom";
import type { MenuProps } from "antd";
import { BadgeAtom } from "../BadgeAtom/BadgeAtom";
import { SocialIconAtom } from "../SocialIconAtom/SocialIconAtom";
import * as svgs from "public/svgs";
import { ButtonWithIconAtom } from "../ButtonAtom/ButtonWithIconAtom";

type Props = {
  innerText: string;
  iconname: keyof typeof svgs;
};

export const QuestAtomDropdown = ({ innerText, iconname }: Props) => {
  const [visible, setVisible] = useState(false);

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className='flex w-full gap-x-3'>
          <ButtonWithIconAtom text='Follow' color='green' />
          <ButtonWithIconAtom text='Verify' color='blue' />
        </div>
      ),
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      open={visible}
      onOpenChange={(vis) => setVisible(vis)}
      className='rounded-lg'
    >
      <div className='flex max-w-[50vw] items-center justify-between border-2 border-black p-2'>
        <Space size={10}>
          <SocialIconAtom iconname={iconname} />
          {innerText}
          <BadgeAtom type='ranking' innerText='20p' />
        </Space>

        {visible ? (
          <ChevronAtom direction='down' />
        ) : (
          <ChevronAtom direction='up' />
        )}
      </div>
    </Dropdown>
  );
};
