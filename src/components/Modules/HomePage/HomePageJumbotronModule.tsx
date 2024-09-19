import { JumbotronContent } from "~/components/Atoms/Jumbotron/JumbotronContent";

type Props = {
  jumbotronContentProps: React.ComponentProps<typeof JumbotronContent>;
};

export const HomePageJumbotronModule = (props: Props) => {
  return <JumbotronContent {...props.jumbotronContentProps} />;
};
