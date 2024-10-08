"use client"; // Enable client-side rendering in a Next.js application

import React from "react"; // Import React for JSX syntax and component creation
import { PageWithFormContainer } from "~/app/sample/pageWithForm/container/PageWithFormContainer"; // Import the PageWithFormContainer component

// Define a functional component called DanielFormContainer
const DanielFormContainer = () => {
  return (
    <div>
      {/* Render the PageWithFormContainer component */}
      <PageWithFormContainer />
    </div>
  );
};

// Export the DanielFormContainer as the default export from this module
export default DanielFormContainer;
