import React from "react";
import { BannerQuestAtom } from "~/components/Atoms/BannerQuestAtom/BannerQuestAtom";
import ModuleHeadingAtom from "~/components/Atoms/ModuleHeadingAtom/ModuleHeadingAtom";

type Props = {
  questBannerHeaderProps: React.ComponentProps<typeof ModuleHeadingAtom>;
  questBannerProps: React.ComponentProps<typeof BannerQuestAtom>;
};

const HomeQuestBannersModule = (props: Props) => {
  return (
    <div className='mt-[8%] py-[2%] md:mt-0 lg:mt-[2%]'>
      <div>
        <ModuleHeadingAtom {...props.questBannerHeaderProps} />
        <BannerQuestAtom {...props.questBannerProps} />
      </div>
    </div>
  );
};

export default HomeQuestBannersModule;
