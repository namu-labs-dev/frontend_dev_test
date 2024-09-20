import SVGAtom from "../SVGAtom/SVGAtom"; // Importing the SVGAtom component

// Define the props type for FooterAtom component
type Props = {
  title: string; // Title to be displayed in the footer (currently commented out)
};

// Define an array of icons with their properties
const icons: Array<{
  iconName: 'dollar' | 'message' | 'wallet' | 'history', // Allowed icon names
  width: number, // Width of the icon
  height: number, // Height of the icon
  color: string, // Color of the icon
  special?: boolean // Optional property to indicate special styling
}> = [
  { iconName: 'dollar', width: 30, height: 30, color: 'white' },
  { iconName: 'message', width: 30, height: 30, color: 'white' },
  { iconName: 'wallet', width: 30, height: 30, color: 'white', special: true }, // Special icon with additional styling
  { iconName: 'history', width: 30, height: 30, color: 'white' },
];

// FooterAtom component definition
export const FooterAtom = ({ title }: Props) => {
  return (
    <div className='flex h-full items-center justify-between bg-[#1F1F1F] px-16 py-5 text-white'>
      {/* Map through the icons array and render each icon */}
      {icons.map((icon, index) => (
        <div
          key={index} // Use index as the key (consider a more stable key in production)
          className={`z-[1] flex w-[50px] cursor-pointer items-center justify-center ${icon.special ? 'relative pt-2' : ''}`} // Conditional class for special icons
        >
          {/* If the icon is special, render a decorative line */}
          {icon.special && (
            <div className='absolute left-[-15px] right-[-15px] top-[-19px] h-[3px] bg-green-500'></div>
          )}
          {/* Render the SVG icon */}
          <SVGAtom iconName={icon.iconName} width={icon.width} height={icon.height} color={icon.color} />
        </div>
      ))}
      {/* Uncomment to display the title in the footer */}
      {/* <div>{title}</div> */}
    </div>
  );
};
