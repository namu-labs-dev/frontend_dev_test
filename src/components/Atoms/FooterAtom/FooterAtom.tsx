import { ReactNode } from 'react';

type FooterIcon = {
  icon: string;
  onClick: () => void;
  altText: string;
};

type Props = {
  backgroundColor?: string;
  icons?: FooterIcon[];
  title?: string;
  nav?: ReactNode; // Added nav prop
};

/**
 * FooterAtom component renders a footer with customizable background color
 * and a set of icons. Each icon can trigger a specific action when clicked.
 */
export const FooterAtom = ({ backgroundColor = '#FFC96F', icons = [], title, nav }: Props) => {
  return (
    <div
      className="flex h-full items-center justify-between"
      style={{ backgroundColor }}
    >
      {title && <h2 className="text-black text-center flex-grow">{title}</h2>}
      {nav}
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
