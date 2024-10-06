import FooterAtom from "~/components/Atoms/HomeFooterAtom/HomeFooterAtom";
import * as svgs from "public/svgs";
interface navs {
  path: string;
  label: string;
  icon: keyof typeof svgs;
}
type Props = {
  navigation: navs[];
};

export const HomeWithModalFooterModule = (props: Props) => {
  return <FooterAtom navs={props.navigation} />;
};
