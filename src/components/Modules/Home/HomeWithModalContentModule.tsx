import HomeContentComp from "~/components/Components/HomeContentComp/HomeContentComp";
import type MessageHero from "~/components/Components/MessagesHero/MessageHero";
import type { cardList } from "~/interfaces";
import type { PageWithModalContentCustomModal } from "~/components/Components/PageWithModalContentCustomModal/PageWithModalContentCustomModal";

type Props = {
  cardProps: cardList[];
  onOpenSnapshotModal: () => void;
  modalProps: React.ComponentProps<typeof PageWithModalContentCustomModal>;
  pageInfoProps: React.ComponentProps<typeof MessageHero>;
};

export const HomeWithModalContentModule = (props: Props) => {
  return <HomeContentComp {...props} />;
};
