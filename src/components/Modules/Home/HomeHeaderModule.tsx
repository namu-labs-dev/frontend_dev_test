import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";

type Props = {
  title: string;
  bg: string;
  fontWeight?: string;
  fontSize?: string;
  fontColor?: string;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
};

export const HomeHeaderModule = (props: Props) => {
  /*
    There is a nasty bug that changes the color of header to dark blue?
    Sometimes it is the appropriate color and other times it just switches to dark blue?
    I have done everything I can but the bug seems to be really persistent?

    TEMP FIX. Bug seems to be "fixed" when I make the default color the color I want and use a conditional to point to the color if the props.bg is not seen
    
    I would like team members to look at this and test on their environments, maybe it's just on my environment??
    Consequent tests do show that the bg is according to what is set.

    NOTE: This comment is also found in the HeaderAtom file
  */
  return <HeaderAtom 
    title={props.title}
    bg={props.bg}
    fontSize={props.fontSize}
    fontWeight={props.fontWeight}
    fontColor={props.fontColor}
    onClickLeftIcon={props.onClickLeftIcon}
    onClickRightIcon={props.onClickRightIcon}
  />;
};
