import { message } from "antd";
import { SendReceiveAtom } from "~/components/Atoms/SendReceiveAtom/SendReceiveAtom";
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
  return <></>;
};
