import cn from "classnames";

type SVGAtomContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function SVGAtomContainer(props: SVGAtomContainerProps) {
  return (
    <div
      className={cn(
        props.className,
        "flex cursor-pointer items-center justify-center"
      )}
    >
      {props.children}
    </div>
  );
}
