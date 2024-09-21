import { SettingOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";
import * as svgs from "public/svgs";
import { SettingsModal } from "../Modal/SettingsModal";

type Props = {
  title: string;
  /** Add custom props to manage custom features as regards the task */
  color?: string;
  titleColor?: string;
  icon?: keyof typeof svgs;
  iconColor?: string;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
  modalProps?: React.ComponentProps<typeof SettingsModal>;
};

export const HeaderAtom = (props: Props) => {
  return (
    /*Make props dynamic. Given the task, some props are now volatile. */
    <div
      className={`relative flex h-full w-full items-center justify-center`}
      style={{ background: props.color ? props.color : "#FFC96F" }}
    >
      {/* Sample using custom svg */}
      {props.onClickLeftIcon && (
        <div
          className='absolute left-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center'
          onClick={props.onClickLeftIcon}
        >
          <SVGAtom
            iconName={props.icon ? props.icon : "arrowLeft"}
            width={20}
            height={20}
            color={props.iconColor ? props.iconColor : "black"}
            className='relative'
          />
          {props.icon === "rectangle" && (
            <SVGAtom
              iconName='ellipseOutlined'
              color={props.iconColor ? props.iconColor : "black"}
              style={{
                position: "absolute",
                top: "10px",
                left: "26px",
              }}
            />
          )}
        </div>
      )}

      <div className={props.titleColor && `text-${props.titleColor}`}>
        {props.title}
      </div>

      {/* Sample using Antd icon */}
      {props.onClickRightIcon && (
        <div>
          <div
            className='absolute right-0 flex w-[50px] cursor-pointer items-center justify-center'
            onClick={() => console.log("Antd icon clicked")}
          >
            <SettingOutlined
              className='!text-gray-header cursor-pointer text-[20px]'
              style={{ color: props.iconColor }}
              onClick={() => props.modalProps?.modalProps.setModalOpen(true)}
            />
          </div>
          {props.modalProps && <SettingsModal {...props.modalProps} />}
        </div>
      )}
    </div>
  );
};
