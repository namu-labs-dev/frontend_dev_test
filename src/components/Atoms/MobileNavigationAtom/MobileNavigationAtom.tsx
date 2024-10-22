import { MenuOutlined } from "@ant-design/icons";
import SVGAtom from "../SVGAtom/SVGAtom";
import { Title } from "~/components/Components/Title/Title";

type Props = {
  title: string;
};

export function MobileNavigationAtom(props: Props) {
  return (
    <nav className='flex items-center justify-between border-b-2 border-black px-6 py-[18px] lg:hidden'>
      <button>
        <SVGAtom iconName='arrowLeftLong' className='h-6 w-6' />
      </button>

      <Title className='text-xl font-bold'>{props.title}</Title>

      <button>
        <MenuOutlined />
      </button>
    </nav>
  );
}
