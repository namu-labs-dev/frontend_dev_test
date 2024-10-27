import React from "react";

type Props = {
  antdIcon: React.ElementType;
  children?: React.ReactNode;
  color: "green" | "white";
  additionalStyles?: string;
};

export const IconHpButtonAtom = (
  props: Props & React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const {
    antdIcon: AntdIcon,
    children,
    color,
    additionalStyles,
    ...rest
  } = props;
  return (
    <button
      type='button'
      className={`inline-block h-[50px] w-[50px] rounded-[10px] bg-black p-[11px] hover:p-[0px] ${additionalStyles}`}
      {...rest}
    >
      {children}
      <props.antdIcon
        className={`${props.color === "green" ? "!text-primaryGreen" : "!text-white"} text-lg`}
      />
    </button>
  );
};
