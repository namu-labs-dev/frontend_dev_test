import React from "react";
import FormHeaderAtom from "~/components/Atoms/FormHeaderAtom/FormHeaderAtom";

type Props = {
  title: string;
};
const VoteFormHeaderModule = (props: Props) => {
  return <FormHeaderAtom {...props} />;
};

export default VoteFormHeaderModule;
