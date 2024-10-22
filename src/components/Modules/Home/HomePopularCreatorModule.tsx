import ViewAllSectionTabAtom from "~/components/Atoms/ViewAllSectionTabAtom/ViewAllSectionTabAtom";

type Props = {
  popularCreatorHeaderProps: React.ComponentProps<typeof ViewAllSectionTabAtom>;
};

export const HomePopularCreatorModule = (props: Props) => {
  return (
    <div>
      <ViewAllSectionTabAtom {...props.popularCreatorHeaderProps} />
    </div>
  );
};
