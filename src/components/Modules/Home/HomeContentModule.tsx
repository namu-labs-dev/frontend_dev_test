import { LinkList } from "~/components/Components/LinkList/LinkList";
import { ContentDisplay } from "~/components/Components/ContentDisplay.tsx/ContentDisplay";

type Props = {
  sampleLinks?: string[]; 
  image?: string; 
  text?: string;
};

export const HomeContentModule = (props: Props) => {
  if (props.image && props.text) {
    return (
      <div className="py-3">
        <ContentDisplay image={props.image} text={props.text} />
      </div>
    );
  }

  return (
    <div className="py-3">
      {props.sampleLinks && <LinkList links={props.sampleLinks} />}
    </div>
  );
};
