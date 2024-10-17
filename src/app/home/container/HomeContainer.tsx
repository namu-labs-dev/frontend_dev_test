import { message } from "antd";
import useDummyCreatorData from "~/hooks/useDummyCreatorData";
import useDummyNotificationData from "~/hooks/useDummyNotification";
import useDummyQuestData from "~/hooks/useDummyQuestData";
// import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";
import FooterAtom from "~/components/Atoms/FooterAtom/FooterAtom";
import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import SectionWithTabsAtom from "~/components/Atoms/SectionWithTabsAtom/SectionWithTabsAtom";
import DailyEarnMenuAtom from "~/components/Atoms/DailyEarnMenuAtom/DailyEarnMenuAtom";

export const HomeContainer = () => {
  const creators = useDummyCreatorData();
  const rankingQuests = useDummyQuestData("ranking");
  const raffleQuests = useDummyQuestData("raffle");
  const notifications = useDummyNotificationData();

  const displayTabs = {
    text: "Daily earn",
    tabs: ["Check In", "Quiz", "Gacha"],
  };
  const handleViewAll = () => {
    return null;
  };
  const viewAllProps = {
    buttonLabel: "View All",
    heading: { text: "Popular Quest" },
    viewAll: handleViewAll,
  };

  // return <HomeTemplate {...homeTemplateProps} />;
  return (
    <div>
      <FooterAtom />
      <ViewAllSectionTabAtom {...viewAllProps} />
      <SectionWithTabsAtom {...displayTabs} />
      <DailyEarnMenuAtom {...displayTabs} />
    </div>
  );
};
