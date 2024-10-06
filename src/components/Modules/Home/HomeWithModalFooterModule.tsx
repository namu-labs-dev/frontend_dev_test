import FooterAtom from "~/components/Atoms/HomeFooterAtom/HomeFooterAtom";
import type { navs } from "~/interfaces";

type Props = {
  navigation: navs[];
};

export const HomeWithModalFooterModule = (props: Props) => {
  return <FooterAtom navs={props.navigation} />;
};
