import { useState } from "react"; // Importing useState from React to manage the component's internal state

// Defining the types for the component's props
type Props = {
  title: string; // Title to display in the header
};

// The FormHeader component which displays a header with left and right icons, and a modal for settings
export const FormHeader = ({ title }: Props) => {
  // State to manage the visibility of the settings modal
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  // Function to toggle the visibility of the settings modal
  return (
    // Main container for the header, setting up relative positioning and styling
    <div className='relative flex h-full w-full items-center justify-center bg-white text-black'>
      {/* Displaying the title passed via props */}
      <div className="text-xl font-medium">{title}</div>
    </div>
  );
};
