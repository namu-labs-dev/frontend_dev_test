import Link from "next/link";
import { StarFilled } from "@ant-design/icons";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import { ItemComponent } from "../../Components/ContentComponent/ItemComponent";
import { Prop } from "../../Components/ContentComponent/ItemComponent";

type Props = {
  title: string;
  links?: string[];
  /** Add custom prop to manage custom features as regards the task */
  custom?: boolean;
};

export const LinkList = (props: Props) => {
  const items: Prop[] = [
    {
      imageIcon: "eth",
      title: "ETH",
      subText: "User: namulabs is fantasic company...",
      time: "08:43 PM",
      notificationIcon: "N",
    },
    {
      imageIcon: "nvidia",
      title: "Nvir",
      subText: "User: namulabs is fantasic company...",
      time: "08:42 AM",
    },
  ];
  return (
    <div>
      {!props.custom && <b className='p-5'>[Sample Pages]</b>}
      <div className='p-5 text-2xl font-semibold text-white'>{props.title}</div>
      {props.links?.map((link) => (
        <div key={link}>
          <Link href={link}>{link}</Link>
        </div>
      ))}
      {props.custom && (
        <div>
          <div className='flex flex-col items-start p-5 pt-2'>
            <div className='relative flex items-center justify-center rounded-full bg-[#2C2D30] p-4'>
              <SVGAtom
                iconName='ellipse'
                color='#00EC97'
                className='absolute left-10 top-4'
              />
              <StarFilled className='text-4xl' style={{ color: "#00EC97" }} />
            </div>
            <span className='font-proxima mt-2 text-lg text-white'>
              Proxima
            </span>
          </div>

          <div
            className='w-full rounded-t-3xl bg-[#2C2D30]'
            style={{ height: "60vh" }}
          >
            <div className='p-4'>
              <ItemComponent items={items} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
