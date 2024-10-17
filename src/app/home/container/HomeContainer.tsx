import { message } from "antd";
import useDummyCreatorData from "~/hooks/useDummyCreatorData";
import useDummyNotificationData from "~/hooks/useDummyNotification";
import useDummyQuestData from "~/hooks/useDummyQuestData";
import { RankingQuest } from "~/components/Atoms/BannerAtom/RankingQuest";
import { AttachmentAtom } from "~/components/Atoms/AttachmentAtom/AttachmentAtom";
import { CreatorWrapAtom } from "~/components/Atoms/CreatorWrapAtom/CreatorWrapAtom";
import { RaffleQuest } from "~/components/Atoms/BannerAtom/RaffleQuest";
import { NFTCard } from "~/components/Atoms/NFTCardAtom/NFTCard";
// import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";

export const HomeContainer = () => {
  const creators = useDummyCreatorData();
  const rankingQuests = useDummyQuestData("ranking");
  const raffleQuests = useDummyQuestData("raffle");
  const notifications = useDummyNotificationData();

  // return <HomeTemplate {...homeTemplateProps} />;
  return (
    <>
      <RankingQuest /> <br /> <RaffleQuest />
      <br /> <AttachmentAtom /> <br /> <CreatorWrapAtom /> <br />
      <NFTCard />
    </>
  );
};
