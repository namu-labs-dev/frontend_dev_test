import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";

type Props = {
  popularQuestHeaderProps: React.ComponentProps<typeof ViewAllSectionTabAtom>;
};

export const HomePopularCreatorModule = (props: Props) => {
  return (
    <>
      <ViewAllSectionTabAtom {...props.popularQuestHeaderProps} />
    </>
  );
};
