import HomeContentComp from "~/components/Components/HomeContentComp/HomeContentComp";
import type MessageHero from "~/components/Components/MessagesHero/MessageHero";
import type { PageWithModalContentCustomModal } from "~/components/Components/PageWithModalContentCustomModal/PageWithModalContentCustomModal";
interface CardList {
  exchange: string;
  message: string;
  user: string;
  timeStamp: string;
  src: string;
}
type Props = {
  cardProps: CardList[];
  onOpenSnapshotModal: () => void;
  modalProps: React.ComponentProps<typeof PageWithModalContentCustomModal>;
  pageInfoProps: React.ComponentProps<typeof MessageHero>;
};

export const HomeWithModalContentModule = (props: Props) => {
  return <HomeContentComp {...props} />;
};
