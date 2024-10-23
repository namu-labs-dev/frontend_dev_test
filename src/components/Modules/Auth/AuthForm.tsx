import { useState } from "react";
import { Image } from "antd";
import { AuthStepOne } from "./AuthStepOne";
import { AuthStepTwo } from "./AuthStepTwo";
import { AuthStepThree } from "./AuthStepThree";

type Props = {
  setFormData: (data: any) => void;
};

const AuthForm = (props: Props) => {
  const [step, setStep] = useState(2); // Track current step
  const [formData, setFormData] = useState({
    username: "",
    avatar: null,
    categories: [],
    referral: "",
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const updateFormData = (newData: any) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const handleSubmit = () => {
    // Final form submission logic here (e.g., send data to API)
    console.log("Final Data:", formData);
  };

  return (
    <div>
      {step === 1 && (
        <AuthStepOne
          nextStep={nextStep}
          formData={formData}
          updateFormData={updateFormData}
        />
      )}
      {step === 2 && (
        <AuthStepTwo
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          updateFormData={updateFormData}
        />
      )}
      {step === 3 && (
        <AuthStepThree
          nextStep={nextStep}
          prevStep={prevStep}
          formData={formData}
          updateFormData={updateFormData}
        />
      )}
      {step === 4 && (
        <div className='flex min-h-screen flex-col items-center justify-center'>
          {/* Desktop Layout */}
          <div className='hidden flex-col items-center justify-center lg:flex'>
            {/* Image in the center on desktop */}
            <Image
              src='./images/congrats.png'
              alt='Congrats'
              className='object-cover lg:max-h-[927px] lg:max-w-[800px]'
              preview={false}
            />
            {/* Button below the image */}
            <button className='mt-4 w-full rounded-md border-2 border-black bg-[#00FF00] px-6 py-3 text-black'>
              Close
            </button>
          </div>

          {/* Mobile Layout */}
          <div className='relative flex h-screen w-full flex-col bg-[#302CF8] text-white lg:hidden'>
            {/* Text on top */}
            <div className='p-7'>
              <h1 className='inline-block bg-gradient-to-r from-[#FFFFFF] via-[#00FF00] to-[#F9FF3C] bg-clip-text text-[42px] font-black italic text-transparent'>
                Welcome! Your Fan Quest Begins Now!
              </h1>
              <p className='mt-4 text-[28px] font-black italic leading-8 text-white '>
                Sign up to FAN-QUEST
              </p>
            </div>

            {/* Container for button and image */}
            <div className='relative flex flex-grow items-end justify-center'>
              {/* Image at the bottom */}
              <Image
                src='./images/congrats2.png'
                alt='Congrats'
                className='w-full object-contain'
                preview={false}
              />
            </div>
          </div>
          {/* Button positioned absolutely */}
          <button className='absolute bottom-10 z-10 w-[85%] rounded-md border-2 border-black bg-[#00FF00] px-6 py-3 text-black lg:hidden'>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
