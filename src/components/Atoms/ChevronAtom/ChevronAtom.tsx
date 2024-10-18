import SVGAtom from "../SVGAtom/SVGAtom";
import { UpOutlined, DownOutlined } from "@ant-design/icons";

type Props = {
  direction: "up" | "down" | "right" | "left";
};
export const ChevronAtom = (props: Props) => {
  return (
    <div>
      {props.direction === "up" ? (
        <UpOutlined />
      ) : props.direction === "down" ? (
        <DownOutlined />
      ) : null}
    </div>
  );
};
