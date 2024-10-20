import { HomeModule } from "~/components/Modules/Home/HomeModule";

type Props = {
  homeModuleProps: React.ComponentProps<typeof HomeModule>;
};

export function HomeTemplate(props: Props) {
  return (
    <>
      <HomeModule {...props.homeModuleProps} />
    </>
  );
}
