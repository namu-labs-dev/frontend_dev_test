import { ReactNode } from 'react';

type FooterIcon = {
  icon: string;
  onClick: () => void;
  altText: string;
};

type Props = {
  title?: string;
  backgroundColor?: string;
  icons?: FooterIcon[];
};

export const FooterAtom = ({ title, backgroundColor = '#FFC96F', icons = [] }: Props) => {
  return (
    <div
      className="flex h-full items-center justify-between"
      style={{ backgroundColor }}
    >
      {title && <div>{title}</div>}

      <nav className="flex justify-around w-full">
        {icons.map((iconItem, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={iconItem.onClick}
          >
            <img src={iconItem.icon} alt={iconItem.altText} width={24} height={24} />
          </div>
        ))}
      </nav>
    </div>
  );
};