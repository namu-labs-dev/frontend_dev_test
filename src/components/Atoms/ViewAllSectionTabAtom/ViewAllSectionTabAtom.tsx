import React from "react";
import { Button } from "antd";
import type * as svgs from "public/svgs";
import ModuleHeadingAtom from "../ModuleHeadingAtom/ModuleHeadingAtom";
import ViewAllButton from "~/components/Components/ViewAllButton/ViewAllButton";

//All props would be adjusted based on the code-convention when building modules

type Props = {
  buttonLabel: string;
  heading: { text: string };
  viewAll: () => void;
};

const ViewAllSectionTabAtom = (props: Props) => {
  return (
    <div className='flex items-center gap-[8rem] space-x-2'>
      {/* section heading */}
      <ModuleHeadingAtom {...props.heading} />
      <ViewAllButton {...props} />
    </div>
  );
};

export default ViewAllSectionTabAtom;
