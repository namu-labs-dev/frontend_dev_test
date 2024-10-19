import { message } from "antd";
import NavigationAtom from "~/components/Atoms/NavigationAtom/NavigationAtom";
import { ReceiveHistoryAtom } from "~/components/Atoms/ReceiveHistoryAtom/ReceiveHistoryAtom";
import useDummyCreatorData from "~/hooks/useDummyCreatorData";
import useDummyNotificationData from "~/hooks/useDummyNotification";
import useDummyQuestData from "~/hooks/useDummyQuestData";
// import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";

export const HomeContainer = () => {
  const creators = useDummyCreatorData();
  const rankingQuests = useDummyQuestData("ranking");
  const raffleQuests = useDummyQuestData("raffle");
  const notifications = useDummyNotificationData();

  // return <HomeTemplate {...homeTemplateProps} />;
  return (
    <>
      {/* <NavigationAtom /> */}
      {/* <ReceiveHistoryAtom /> */}
    </>
  );
};
