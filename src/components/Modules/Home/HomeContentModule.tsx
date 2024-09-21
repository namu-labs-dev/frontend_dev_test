import { LinkList } from "~/components/Components/LinkList/LinkList";

type Props = {
  title: string;
  sampleLinks?: string[];
  custom?: boolean;
};

export const HomeContentModule = (props: Props) => {
  return (
    <div className='py-3'>
      <LinkList
        links={props.sampleLinks}
        title={props.title}
        custom={props.custom}
      />
    </div>
  );
};
