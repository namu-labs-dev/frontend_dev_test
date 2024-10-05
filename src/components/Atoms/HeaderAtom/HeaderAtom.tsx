import { SettingOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";

type Props = {
  title: string;
  bg: string;
  fontWeight?: string;
  fontSize?: string;
  fontColor?: string;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
};
//bg-[#FFC96F]
export const HeaderAtom = (props: Props) => {

  /*
    There is a nasty bug that changes the color of header to dark blue?
    Sometimes it is the appropriate color and other times it just switches to dark blue?
    I have done everything I can but the bug seems to be really persistent?

    TEMP FIX: Bug seems to be "fixed" when I make the default color the color I want and use a conditional to point to the color if the props.bg is not seen
    
    I would like team members to look at this and test on their environments, maybe it's just on my environment??
    Consequent tests do show that the bg is according to what is set.

    NOTE: This comment is also found in the HeaderAtom file
  */

  //Although I don't know why the entire HeaderAtom wasn't z-indexed to 1000.
  //I basically made the entire HeaderAtom to be z-indexed to 1000
  return (
    <div className={`relative z-[1000] flex h-full w-full items-center justify-center ${props.bg ? `bg-[${props.bg}]` : "bg-[#1F1F1F]"}`}>
      {/* Sample using custom svg */}
      {props.onClickLeftIcon && (
        <div
          className="absolute left-0 flex w-[auto] ml-5 cursor-pointer items-center justify-center"
          onClick={props.onClickLeftIcon}
        >
          {/*<SVGAtom
            iconName="arrowLeft"
            width={20} height={20}
            color="black"
            // The SVGAtom of this file does not reflect the design presented and hence is changed to fit the design
            />*/}
          <SVGAtom
            iconName="NavigationIcon"
            width={22} height={22}
            // This the correct SVGAtom component
          />
        </div>
      )}

      <div className={`${props.fontWeight} ${props.fontSize} ${props.fontColor}`}>{props.title}</div>

      {/* Sample using Antd icon */}
      {props.onClickRightIcon && (
        <div
          className="absolute right-0 flex w-[auto] mr-5 cursor-pointer items-center justify-center"
          onClick={props.onClickRightIcon}
        >
          {
            /*
              <SettingOutlined 
              className="!text-gray-header cursor-pointer text-[20px] bg-[#FFFFFF]"
              //This component will be removed to allow a more customizable component which is an svg component.
              />
            */
          }
          <SVGAtom
            iconName="SettingIcon"
            width={20} height={20}
            // This the correct SVGAtom component
          />
        </div>
      )}
    </div>
  );
};
