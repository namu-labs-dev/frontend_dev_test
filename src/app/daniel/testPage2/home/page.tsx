import React from "react"; // Importing React to use JSX syntax and React components
import DanielFormContainer from "./container/DanielFormContainer"; // Importing a form container component

// This is the main functional component named "Form"
const Form = () => {
  return (
    // A wrapper div to contain the form container component
    <div>
      {/* Rendering the DanielFormContainer component inside the Form component */}
      <DanielFormContainer />
    </div>
  );
};

// Exporting the Form component so it can be imported and used in other parts of the application
export default Form;
