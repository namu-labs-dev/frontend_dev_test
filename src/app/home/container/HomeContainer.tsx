import { message } from "antd";
import useDummyCreatorData from "~/hooks/useDummyCreatorData";
import useDummyNotificationData from "~/hooks/useDummyNotification";
import useDummyQuestData from "~/hooks/useDummyQuestData";
// import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";
import FooterAtom from "~/components/Atoms/FooterAtom/FooterAtom";
import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";
import SectionWithTabsAtom from "~/components/Atoms/SectionWithTabsAtom/SectionWithTabsAtom";
import DailyEarnMenuAtom from "~/components/Atoms/DailyEarnMenuAtom/DailyEarnMenuAtom";
import GachaPopUpCardAtom from "~/components/Atoms/GachaPopUpCardAtom/GachaPopUpCardAtom";
import { useState } from "react";
import * as svgs from "public/svgs";

export const HomeContainer = () => {
  const creators = useDummyCreatorData();
  const rankingQuests = useDummyQuestData("ranking");
  const raffleQuests = useDummyQuestData("raffle");
  const notifications = useDummyNotificationData();

  // modal state
  const [isModalOpen, setModalOpen] = useState<boolean>(true);

  const displayTabs = {
    text: "Daily earn",
    tabs: ["Check In", "Quiz", "Gacha"],
  };
  const handleViewAll = () => {
    return null;
  };

  // props for now
  const viewAllProps = {
    buttonLabel: "View All",
    heading: { text: "Popular Quest" },
    viewAll: handleViewAll,
  };

  const gachaModalProps = {
    gachaTitle: "Gacha result",
    gachaMessage:
      " 🎉 Lucky you! You've hit the jackpot. Time to celebrate your win!",
    gachaPoint: "5 Point",
    iconName: "point",
    isModalOpen: isModalOpen,
    setModalOpen,
  };

  // return <HomeTemplate {...homeTemplateProps} />;
  return (
    <div>
      <FooterAtom />
      <ViewAllSectionTabAtom {...viewAllProps} />
      <SectionWithTabsAtom {...displayTabs} />
      <DailyEarnMenuAtom {...displayTabs} />
      <GachaPopUpCardAtom {...gachaModalProps} />
    </div>
  );
};
