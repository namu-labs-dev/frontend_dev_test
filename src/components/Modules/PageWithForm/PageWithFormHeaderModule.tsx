import FormHeaderAtom from "~/components/Atoms/FormHeaderAtom/FormHeaderAtom";
import { HeaderAtom } from "~/components/Atoms/HeaderAtom/HeaderAtom";

type Props = {
  title: string;
};

export const PageWithFormHeaderModule = (props: Props) => {
  return <FormHeaderAtom title={props.title} />;
};
