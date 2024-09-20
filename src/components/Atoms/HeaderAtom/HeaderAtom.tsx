import { useState } from "react"; // Importing useState from React to manage the component's internal state
import { SettingOutlined } from "@ant-design/icons"; // Importing an icon from Ant Design for the settings button
import SVGAtom from "../SVGAtom/SVGAtom"; // Importing a custom SVG component to display an icon
import Image from "next/image"; // Importing Next.js's Image component for optimized images

// Defining the types for the component's props
type Props = {
  title: string; // Title to display in the header
  onClickLeftIcon?: () => void; // Optional function to handle clicking the left icon
  onClickRightIcon?: () => void; // Optional function to handle clicking the right icon (settings icon)
};

// The HeaderAtom component which displays a header with left and right icons, and a modal for settings
export const HeaderAtom = ({
  title,
  onClickLeftIcon,
  onClickRightIcon,
}: Props) => {
  // State to manage the visibility of the settings modal
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  // Function to toggle the visibility of the settings modal
  const handleSettingsClick = () => {
    setIsSettingsVisible(!isSettingsVisible);
  };

  return (
    // Main container for the header, setting up relative positioning and styling
    <div className='relative flex h-full w-full items-center justify-center bg-[#1F1F1F] text-white'>
      
      {/* Conditionally rendering the left icon if the onClickLeftIcon function is provided */}
      {onClickLeftIcon && (
        <div
          className='absolute left-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center'
          onClick={onClickLeftIcon} // Trigger the left icon click function
        >
          {/* SVGAtom component rendering a custom icon */}
          <SVGAtom iconName='atomLeft' width={23} height={23} color='white' />
        </div>
      )}

      {/* Displaying the title passed via props */}
      <div>{title}</div>

      {/* Conditionally rendering the right icon (settings icon) if the onClickRightIcon function is provided */}
      {onClickRightIcon && (
        <div
          className='absolute right-0 z-[1] flex w-[50px] cursor-pointer items-center justify-center'
          onClick={handleSettingsClick} // Toggle the settings modal on click
        >
          {/* Ant Design's SettingOutlined icon */}
          <SettingOutlined className='!text-gray-header cursor-pointer text-[20px]' />
        </div>
      )}

      {/* Conditionally rendering the settings modal if isSettingsVisible is true */}
      {isSettingsVisible && (
        <>
          {/* Background overlay to darken the rest of the page */}
          <div className='fixed inset-0 bg-black opacity-50 z-[2]' />
          
          {/* Modal container to center the settings modal */}
          <div className='fixed inset-0 flex items-center justify-center z-[3]'>
            {/* Modal content */}
            <div className='flex h-1/2 w-[450px] flex-col items-center justify-center rounded-3xl bg-[#2C2D30] p-4 text-white shadow-lg'>
              {/* Modal title */}
              <h1 className='mb-2 text-2xl font-semibold'>
                Transaction <br /> Processing
              </h1>

              {/* Displaying a shield image */}
              <Image
                src='/images/shield.svg' // Image source
                width={300} // Image width
                height={80} // Image height
                alt='Shield' // Alt text for accessibility
              />

              {/* Text container for the description inside the modal */}
              <div className='-space-y-10 text-center'>
                {/* Description paragraphs with vertical spacing */}
                <p>Uploading your transaction to the node</p>
                <p>Please wait for a moment...</p>
                <p>This may take up to 2 minutes.</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
