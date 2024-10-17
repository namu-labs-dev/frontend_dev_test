import { MarkedTextAtom } from "~/components/Atoms/MarkedTextAtom/MarkedTextAtom";
import { Button } from "../Button/Button";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  label: string;
  iconName: React.ComponentProps<typeof SVGAtom>["iconName"];
  children?: React.ReactNode;
};

export function SocialConnect(props: Props) {
  return (
    <div className='flex items-center justify-between rounded-[10px] border-2 border-[#262626] px-[10px] py-[10px]'>
      <div className='flex items-center'>
        <SVGAtom iconName={props.iconName} className='h-[33px] w-[33px]' />
        <span className='ml-3 font-medium capitalize leading-6 text-black'>
          {props.label}
        </span>
      </div>

      <div className='py'>{props.children}</div>
    </div>
  );
}
