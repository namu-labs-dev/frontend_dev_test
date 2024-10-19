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
import CreatorCarouselAvatarAtom from "~/components/Atoms/CreatorCarouselAvatarAtom/CreatorCarouselAvatarAtom";
import CreateQuestAvatarAtom from "~/components/Atoms/CreateQuestAvatarAtom/CreateQuestAvatarAtom";
import CancelPurchasePopUpCardAtom from "~/components/Atoms/CancelPurchasePopUpCardAtom/CancelPurchasePopUpCardAtom";
import FanQuestBlogPublishPopUpAtom from "~/components/Atoms/FanQuestBogPopUpAtom/FanQuestBlogPublishPopUpAtom";
import EmptyStateAtom from "~/components/Atoms/EmptyStateAtom/EmptyStateAtom";
import ListProfileAtom from "~/components/Atoms/ListProfileAtom/ListProfileAtom";
import CreatorLabelGroupAtom from "~/components/Atoms/CreatorLabelGroupAtom/CreatorLabelGroupAtom";
import CreatorWrapAtom from "~/components/Atoms/CreatorWrapAtom/CreatorWrapAtom";

export const HomeContainer = () => {
  const creators = useDummyCreatorData();
  const rankingQuests = useDummyQuestData("ranking");
  const raffleQuests = useDummyQuestData("raffle");
  const notifications = useDummyNotificationData();

  // modal state
  const [isModalOpen, setModalOpen] = useState<boolean>(true);
  const [isCancelModalOpen, setCancelModalOpen] = useState<boolean>(true);
  const [isblogModalOpen, setblogModalOpen] = useState<boolean>(true);

  const displayTabs = {
    text: "Daily earn",
    tabs: ["Check In", "Quiz", "Gacha"],
  };
  const handleViewAll = () => {
    return null;
  };
  const handleCancelPurchase = () => {
    return null;
  };
  const handleUsers = () => {
    return null;
  };

  //All props would be adjusted based on the code-convention when building modules

  const viewAllProps = {
    buttonText: "View All",
    heading: { text: "Popular Quest" },
    onClick: handleViewAll,
  };

  // modalProps
  const gachaModalProps = {
    gachaTitle: "Gacha result",
    gachaMessage:
      " 🎉 Lucky you! You've hit the jackpot. Time to celebrate your win!",
    gachaPoint: "5 Point",
    iconName: "point",
    isModalOpen,
    width: "30%",
    setModalOpen: setModalOpen,
  };

  const camcelPurchaseModalProps = {
    btnLabel: {
      cancel: "Cancel Purchase",
      close: "Close",
    },
    cancelInfo: "You are about to cancel a purchase, are you sure about it?",
    cancelTitle: "Title",
    width: "20rem",
    cancelHandler: handleCancelPurchase,
    isModalOpen: isCancelModalOpen,
    setModalOpen: setCancelModalOpen,
  };

  // Creator Avatar props
  const creatorAvatarProps = {
    name: "Creator Name",
    icon: "/svgs/avatar1.svg",
  };
  const createQuestAvatarProps = {
    name: "Creator Name",
    width: "100px",
    icon: "/svgs/createQuest.svg",
  };

  // FanBlogPostProps

  const fanBlogPostProp = {
    logo: "/svgs/fanQuestLogo.svg",
    status: "Blog post published",
    blogInfo:
      "This blog post has been published. Team members will be able to edit this post and republish changes.",
    width: "30%",
    isModalOpen: isblogModalOpen,
    setModalOpen: setblogModalOpen,
  };

  // empty data
  const emptyDataProps = {
    icon: "/svgs/noData.svg",
    emptyText: "No Data",
  };
  const creatorPlatformProps = {
    profile: "Fractal Visions",
    platform: "Platform",
    icon: "/svgs/avatar1.svg",
    width: "44px",
  };
  const creatorLabelProps = {
    badgeCount: +999,
    width: "44px",
    username: "Username",
    icon: "/svgs/avatar2.svg",
    onClick: handleUsers,
  };

  const creatorWrapProps = {
    btnText: "Visit",
    creatorName: "Creator Name",
    icon: "/svgs/avatar1.svg",
    width: "44px",
    onClick: handleUsers,
  };
  // return <HomeTemplate {...homeTemplateProps} />;
  return (
    <div>
      <FooterAtom />
      <ViewAllSectionTabAtom {...viewAllProps} />
      <SectionWithTabsAtom {...displayTabs} />
      <DailyEarnMenuAtom {...displayTabs} />
      <GachaPopUpCardAtom {...gachaModalProps} />
      <CreatorCarouselAvatarAtom {...creatorAvatarProps} />
      <CreateQuestAvatarAtom {...createQuestAvatarProps} />
      <CancelPurchasePopUpCardAtom {...camcelPurchaseModalProps} />
      <FanQuestBlogPublishPopUpAtom {...fanBlogPostProp} />
      <EmptyStateAtom {...emptyDataProps} />
      <ListProfileAtom {...creatorPlatformProps} />
      <CreatorLabelGroupAtom {...creatorLabelProps} />
      <CreatorWrapAtom {...creatorWrapProps} />
    </div>
  );
};
