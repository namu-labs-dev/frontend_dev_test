import React, { useState } from "react";
import NathanUserContentAtom from "./NathanUserContentAtom";
import Image from "next/image";

const NathanAbsoluteEmptyContent = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 h-[380px] w-full rounded-t-[30px] bg-[#2C2D30] p-5 md:h-[340px]">
        <div className="flex flex-col space-y-3">
          <NathanUserContentAtom
            avater="/svgs/eth.png"
            name="ETH"
            time="08:43 PM"
            userDetails="User: namulabs is a fantastic company..."
            subUserAvatar="N"
            onclick={() => setIsOpen(!isOpen)} // Use toggle logic for opening/closing the modal
            modalOpen={isOpen}
            setModalOpen={setIsOpen} // Pass setIsOpen correctly
            containerClassName="bg-[#2C2D30] w-[300px] p-5 flex flex-col items-center justify-center text-white space-y-3"
          >
            <h1 className="text-center text-2xl font-bold">
              Transaction <br /> processing
            </h1>

            <div className="h-[120px] w-[250px] overflow-hidden">
              <Image
                src={"/svgs/loader.svg"}
                alt="loader"
                className="h-full w-full object-cover"
                width={100}
                height={100}
              />
            </div>

            <p className="text-sm text-white">
              Uploading your transaction to the node. please wait for a
              moment... <br /> This may take up to 2 minutes.
            </p>
          </NathanUserContentAtom>

          <NathanUserContentAtom
            avater="/svgs/nvir.svg"
            name="Nvir"
            time="08:42 AM"
            userDetails="User: namulabs is a fantastic company..."
            onclick={() => setIsOpen(!isOpen)} // Example onclick to show usage
            setModalOpen={setIsOpen} // Example setModalOpen to show usage
          />
        </div>
      </div>
    </>
  );
};

export default NathanAbsoluteEmptyContent;
