import React from "react";
import HomeSettingsModal from "~/components/Components/HomeSettingsModal/HomeSettingsModal";

type Props = {
  modalProps: React.ComponentProps<typeof HomeSettingsModal>;
};

const HomeSettingsModalModule = (props: Props) => {
  return (
    <div>
      <HomeSettingsModal {...props.modalProps} />
    </div>
  );
};

export default HomeSettingsModalModule;
