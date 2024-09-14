import FooterMenu from "~/components/Components/FooterMenu/FooterMenu";

type Props = {
  title: string;
};

export const FooterAtom = (props: Props) => {
  return (
    <div className="flex h-full items-center justify-center bg-kneutral-10 ">
      {/* <div>{props.title}</div> */}
      <FooterMenu />
    </div>
  );
};
