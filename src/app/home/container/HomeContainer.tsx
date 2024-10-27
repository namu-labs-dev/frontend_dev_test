import React, { useCallback } from "react";
import useDummyCreatorData from "~/hooks/useDummyCreatorData";
import useDummyNotificationData from "~/hooks/useDummyNotification";
import useDummyQuestData from "~/hooks/useDummyQuestData";
import { HomeTemplate } from "~/components/Templates/Home/HomeTemplate";
import congrats from "../../../../public/images/congrats.png";
import nft from "../../../../public/pngs/NFTImage.png";
import cover1 from "../../../../public/images/cover1.png";
import heroImage1 from "../../../../public/pngs/heroImage1.png";
import { type EmblaOptionsType } from "embla-carousel";
import { HeroHeading } from "~/components/Components/HeroHeading/HeroHeading";
import { mobilePartnerIcons, partnerIcons } from "~/utils/common";
import {
  creatorAvatarProps,
  popularCreatorAvatarProps,
  popularQuestData,
  creatorsData,
  noCoverCreatorProps,
} from "~/utils/common";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { BellOutlined, UserOutlined } from "@ant-design/icons";

export const HomeContainer = () => {
  const creators = useDummyCreatorData();
  const rankingQuests = useDummyQuestData("ranking");
  const raffleQuests = useDummyQuestData("raffle");
  const notifications = useDummyNotificationData();

  // modal state
  const [isModalOpen, setModalOpen] = useState<boolean>(true);
  const [isCancelModalOpen, setCancelModalOpen] = useState<boolean>(true);
  const [isblogModalOpen, setblogModalOpen] = useState<boolean>(true);

  const handleViewAll = () => {
    return null;
  };
  // const handleCancelPurchase = () => {
  //   return null;
  // };
  // const handleUsers = () => {
  //   return null;
  // };

  const heroImages = [heroImage1, nft, cover1, congrats];

  const OPTIONS: EmblaOptionsType = { align: "start" };

  // Memoize the createModuleHeader function
  const createModuleHeader = useCallback(
    (buttonText: string, headingText: string, icon: string) => ({
      buttonText,
      heading: (
        <p className='flex gap-x-2'>
          <span className='hidden md:block'>{icon}</span>
          <span>{headingText}</span>
        </p>
      ),
      onClick: handleViewAll, // Use memoized function or other logic as necessary
    }),
    []
  );

  const homeTemplateProps: React.ComponentProps<typeof HomeTemplate> = {
    homeHeaderModuleProps: {
      headerProps: {
        isLoggedIn: true,
        isViewed: true,
        HPUserIconButtonProps: {
          antdIcon: UserOutlined,
          color: "green",
        },
        HpBellIconProps: {
          antdIcon: BellOutlined,
          color: "white",
          additionalStyles: "relative",
        },
        DailyEarnMenuProps: {
          tabs: ["Checkin", "Quiz", "Gacha"],
        },
      },
    },
    homeHeroModuleProps: {
      heroTextProps: {
        heading: <HeroHeading />,
        description:
          "Join exciting communities, have fun and make a difference.",
      },
      heroCarouselProps: {
        images: heroImages,
      },
    },
    homePopularCreatorModuleProps: {
      popularCreatorHeaderProps: createModuleHeader(
        "View All",
        "Popular Creator",
        "🔥"
      ),
      popularCreatorCarouselProps: {
        slides: popularCreatorAvatarProps,
      },
    },
    homePopularQuestModuleprops: {
      homePopularQuestHeaderProps: createModuleHeader(
        "View All",
        "Popular Quest",
        "🔥"
      ),
      popularQuestCarouselProps: {
        slides: popularQuestData,
        options: OPTIONS,
      },
    },
    homeEndingSoonModuleprops: {
      endingSoonSectionHeaderProps: createModuleHeader(
        "View All",
        "Ending Soon",
        "⏰ "
      ),
      endingSoonCarouselProps: {
        slides: creatorAvatarProps,
        options: OPTIONS,
      },
    },
    homeRecommendedModuleprops: {
      recommendedHeaderProps: createModuleHeader(
        "View All",
        "Recommended Creator",
        "🚀 "
      ),
      recommededCarouselProps: {
        slides: creatorsData,
        options: OPTIONS,
      },
    },
    homeNewQuestModuleProps: {
      newQuestHeaderProps: createModuleHeader("View All", "New Quest", "✨"),
      newQuestCarouselProps: {
        slides: noCoverCreatorProps,
        options: OPTIONS,
      },
    },
    homePromotedQuestModuleProps: {
      promotedQuestHeaderProps: createModuleHeader(
        "View All",
        "Promoted Quest",
        "🤡"
      ),
      promotedQuestCarouselProps: {
        slides: noCoverCreatorProps,
        options: OPTIONS,
      },
    },
    homeQuestBannerModuleProps: {
      questBannerHeaderProps: {
        heading: "Enjoy a variety of Quests",
        classNames: `text-center md:text-3xl mx-auto xl:w-full md:w-[40%]`,
      },
      questBannerProps: {
        rankingQuestBanner: "/svgs/rankingBanner.svg",
        raffleQuestBanner: "/svgs/raffleBanner.svg",
      },
    },
    homePartnersModuleProps: {
      icons: partnerIcons,
      text: "Partners",
      classNames: `text-center`,
      mobilePartnerIcons: mobilePartnerIcons,
    },
    homeFooterModuleProps: {
      footerTitle: "@FANDOM GLOBAL PTE LTD",
      navLinks: [
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Contact Us", href: "/contact" },
        { label: "Notice", href: "/notice" },
      ],
      iconLinks: [
        { icon: <FiSend size={30} />, href: "/twitter" },
        { icon: <FaDiscord size={30} />, href: "/discord" },
        { icon: <FaTwitter size={30} />, href: "/telegram" },
      ],
    },
  };
  return <HomeTemplate {...homeTemplateProps} />;
};
