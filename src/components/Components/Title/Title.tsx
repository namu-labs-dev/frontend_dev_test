import React from "react";

type Props = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5;
} & React.HTMLAttributes<HTMLParagraphElement>;

export function Title({ level = 1, ...props }: Props) {
  if (level === 1) return <h1 {...props}>{props.children}</h1>;
  if (level === 2) return <h2 {...props}>{props.children}</h2>;
  if (level === 3) return <h3 {...props}>{props.children}</h3>;
  if (level === 4) return <h4 {...props}>{props.children}</h4>;
  return <h5 {...props}>{props.children}</h5>;
}
