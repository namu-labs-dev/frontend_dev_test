import clsx from "clsx";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

type Props = {
  total?: number;
  currentPage?: number;
  limit?: number;
};

export function Pagination({ total = 50, limit = 10, ...props }: Props) {
  const pages = total / limit;

  return (
    <div className='mx-auto flex w-fit items-center'>
      <button className='flex h-7 w-7 items-center justify-center'>
        <SVGAtom iconName='arrowRight' className='h-3 w-3 rotate-180' />
      </button>

      {Array.from({ length: pages }).map((i, idx) => (
        <div
          key={idx}
          className={clsx(
            "flex h-7 w-7 items-center justify-center",
            props.currentPage === idx + 1 && "bg-base-green"
          )}
        >
          {idx + 1}
        </div>
      ))}

      <button className='flex h-7 w-7 items-center justify-center'>
        <SVGAtom iconName='arrowRight' className='h-3 w-3' />
      </button>
    </div>
  );
}
