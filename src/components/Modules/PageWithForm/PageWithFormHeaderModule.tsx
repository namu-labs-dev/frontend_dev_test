import { FormHeader } from "~/components/Atoms/FormHeader/FormHeader";

type Props = {
  title: string;
  onClickLeftIcon: () => void;
};

export const PageWithFormHeaderModule = (props: Props) => {
  return (
    <FormHeader title={props.title}  />
  );
};
