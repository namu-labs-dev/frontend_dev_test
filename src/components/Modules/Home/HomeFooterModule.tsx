import { FooterAtom } from "~/components/Atoms/FooterAtom/FooterAtom";

type Props = {
  title: string;
  images?: string[];
};

export const HomeFooterModule = (props: Props) => {
  return <FooterAtom title={props.title} images={props.images} />;
};
