import React, { useState, useEffect } from "react";
import { Form } from "antd";
import { AuthTitle } from "./AuthTitle";

type AuthStepTwoProps = {
  nextStep: () => void;
  prevStep: () => void;
  formData: any;
  updateFormData: (data: any) => void;
};

export const AuthStepTwo = ({
  nextStep,
  prevStep,
  formData,
  updateFormData,
}: AuthStepTwoProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    formData.categories || []
  );

  // Update the formData whenever selectedCategories changes
  useEffect(() => {
    updateFormData({ ...formData, categories: selectedCategories });
  }, [selectedCategories, updateFormData, formData]);

  const handleCategoryClick = (category: string) => {
    setSelectedCategories(
      (prevSelected) =>
        prevSelected.includes(category)
          ? prevSelected.filter((item) => item !== category) // Unselect if already selected
          : [...prevSelected, category] // Select if not already selected
    );
  };

  const onFinish = (values: any) => {
    if (selectedCategories.length < 3) {
      alert("Please select at least 3 categories of interest."); // Show an alert or error message
      return; // Prevent proceeding to the next step
    }

    // Update formData with step 2 data and move to next step
    updateFormData({ ...values, categories: selectedCategories });
    nextStep();
  };

  return (
    <div className='flex min-h-screen flex-col items-center bg-[#FAFAFA] p-5'>
      <Form
        layout='vertical'
        onFinish={onFinish}
        initialValues={formData}
        className='items-cente mt-16 flex max-w-[800px] flex-col'
      >
        <AuthTitle />

        <p className=' mb-8 mt-10 text-center text-xl font-bold leading-[27px] text-black '>
          Please select at least 3 categories of interest.
        </p>

        <div className='mb-8 flex flex-wrap justify-center'>
          {[
            "Entertainment",
            "Gaming",
            "Sports",
            "Fitness",
            "Music",
            "Pets",
            "Travel",
            "Fashion & Beauty",
            "Lifestyle & Info",
            "News & Finance",
            "Dating & Relationships",
            "Comedy",
            "Work & Daily Life",
            "Daily Life",
            "Talk Shows",
            "Drama",
            "Documentaries",
            "Culture & Education",
            "Kids",
            "Animation",
            "Promotion",
            "Covers",
            "Education",
            "Reviews",
            "Information",
            "Food",
            "Mukbang / Eating Shows",
            "Cooking Shows",
          ].map((category) => (
            <div
              key={category}
              className={`category-button ${selectedCategories.includes(category) ? "selected" : ""}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='absolute bottom-5 w-[85%] rounded-md border-2 border-black bg-[#00FF00] px-6 py-3 text-black lg:relative lg:mt-20 lg:w-full '
        >
          Next
        </button>
      </Form>
    </div>
  );
};
