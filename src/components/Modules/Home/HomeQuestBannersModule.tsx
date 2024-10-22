import React from "react";
import { BannerQuestAtom } from "~/components/Atoms/BannerQuestAtom/BannerQuestAtom";
import ModuleHeadingAtom from "~/components/Atoms/ModuleHeadingAtom/ModuleHeadingAtom";

type Props = {
  questBannerHeaderProps: React.ComponentProps<typeof ModuleHeadingAtom>;
  questBannerProps: React.ComponentProps<typeof BannerQuestAtom>;
};
const HomeQuestBannersModule = (props: Props) => {
  return (
    <div>
      <div>
        <ModuleHeadingAtom {...props.questBannerHeaderProps} />
        <BannerQuestAtom {...props.questBannerProps} />
      </div>
    </div>
  );
};

export default HomeQuestBannersModule;
