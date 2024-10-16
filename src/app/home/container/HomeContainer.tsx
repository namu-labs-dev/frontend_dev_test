import { message } from "antd";
import useDummyCreatorData from "~/hooks/useDummyCreatorData";
import useDummyNotificationData from "~/hooks/useDummyNotification";
import useDummyQuestData from "~/hooks/useDummyQuestData";
// import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";
import FooterAtom from "~/components/Atoms/FooterAtom/FooterAtom";
import type * as svgs from "public/svgs";
import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";

export const HomeContainer = () => {
  const creators = useDummyCreatorData();
  const rankingQuests = useDummyQuestData("ranking");
  const raffleQuests = useDummyQuestData("raffle");
  const notifications = useDummyNotificationData();

  const viewAllProps = {
    buttonLabel: "ViewAll",
    heading: { text: "Popular Quest" },
  };

  // return <HomeTemplate {...homeTemplateProps} />;
  return (
    <div>
      <FooterAtom />
      <ViewAllSectionTabAtom  {...viewAllProps}/>
    </div>
  );
};
