import HomeContentHeader from "~/components/Components/HomeContentHeader/HomeContentHeader";
import { LinkList } from "~/components/Components/LinkList/LinkList";

type Props = {
  // sampleLinks: string[];
  username: string;
};

export const HomeContentModule = (props: Props) => {
  return (
    <div className=''>
      {/* <LinkList links={props.sampleLinks} /> */}
      <HomeContentHeader />
    </div>
  );
};
