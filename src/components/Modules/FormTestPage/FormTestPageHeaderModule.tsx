import React from "react";
import { FormPageHeaderAtom } from "~/components/Atoms/FormPageHeaderAtom/FormPageHeaderAtom";

type Props = {
  title: string;
};
export const FormTestPageHeaderModule = (props: Props) => {
  return <FormPageHeaderAtom title={props.title} />;
};
