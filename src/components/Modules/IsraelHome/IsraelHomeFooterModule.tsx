import { IsraelFooterAtom } from "~/components/Atoms/IsraelFooterAtom/IsraelFooterAtom";
import * as svgs from "public/svgs";

type Tab = {
  id: string;
  iconName: keyof typeof svgs;
  content: React.ReactNode;
};

type Props = {
  tabs: Tab[];
  activeTabId: string;
  setActiveTabId: any;
};

export const IsraelHomeFooterModule = (props: Props) => {
  const { tabs, activeTabId, setActiveTabId } = props;
  console.log(props);
  return (
    <IsraelFooterAtom
      tabs={tabs}
      activeTabId={activeTabId}
      setActiveTabId={setActiveTabId}
    />
  );
};
