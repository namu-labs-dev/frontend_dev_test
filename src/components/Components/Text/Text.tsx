import React from "react";

type Props = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLParagraphElement>;

export function Text(props: Props) {
  return <p {...props}>{props.children}</p>;
}
