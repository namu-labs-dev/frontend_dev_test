"use client";

import { Alert, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Camera, X } from "lucide-react";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import NathanAbsoluteEmptyContent from "~/components/Atoms/EmptyContentAtom/NathanAbsoluteEmptyContent";
import NathanEmptyContentAtom from "~/components/Atoms/EmptyContentAtom/NathanEmptyContentAtom";
import { NathanFooterAtom } from "~/components/Atoms/FooterAtom/NathanFooterAtom";
import { NathanHeaderAtomTwo } from "~/components/Atoms/HeaderAtom/NathanHeaderAtomTwo";
import ButtonAtom from "~/components/Atoms/NathanInputAtom/NathanButtonAtom";
import DatePickerAtom from "~/components/Atoms/NathanInputAtom/NathanCalendarAtom";
import InputAtom from "~/components/Atoms/NathanInputAtom/NathanInputAtom";
import TextAreaAtom from "~/components/Atoms/NathanInputAtom/NathanTextAreaAtom";
import SelectAtom from "~/components/Atoms/NathanSelectAtom/SelectAtom";

const TestPageTwoContainer: React.FC = () => {
  const [image, setImage] = useState<File | null>(null); // Explicit type for image state

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImage(file);
    }
  };

  return (
    <Layout style={{ height: "100%", background: "#FFFFFF" }}>
      <Header style={{ padding: 0, height: "45px" }}>
        <NathanHeaderAtomTwo title="Vote" />
      </Header>

      <Content
        style={{
          background: "#ffffff",
          position: "relative",
          padding: "0px",
          height: "100%",
        }}
      >
        <Alert
          style={{ borderRadius: 0, border: 0, padding: "10px" }}
          description={
            <p className="text-sm">
              <span className="font-bold text-blue-600">10 FAO</span> will be
              deducted when voting is <br /> generated (Amount: 9 FAO)
            </p>
          }
          type="info"
        />

        <div style={{ padding: "15px 12px" }}>
          <form
            onSubmit={() => alert("Vote created successfully")}
            className="flex flex-col space-y-3"
          >
            <div>
              <label
                htmlFor="category"
                className="text-sm font-semibold text-black"
              >
                Category
              </label>
              <SelectAtom />
            </div>

            <div>
              <label
                htmlFor="voteTitle"
                className="text-sm font-semibold text-black"
              >
                Vote Title
              </label>
              <InputAtom />
            </div>

            <div>
              <div className="text-sm font-semibold text-black">Image</div>
              <label htmlFor="image" className="cursor-pointer">
                <div className="block h-[100px] overflow-hidden rounded-md bg-gray-100">
                  {image ? (
                    <div className="relative h-full w-full overflow-hidden">
                      <Image
                        src={URL.createObjectURL(image)}
                        alt="uploaded image"
                        width={100}
                        height={100}
                        className="h-full w-full object-cover"
                      />
                      <button
                        onClick={() => setImage(null)}
                        className="absolute right-0 top-0 m-2 rounded-full bg-white p-2 outline-none"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Camera size={20} className="text-gray-900" />
                    </div>
                  )}
                </div>
              </label>
              <input
                type="file"
                accept="image/png, image/jpeg"
                id="image"
                className="hidden"
                onChange={handleImageChange} // Add event handler
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="text-sm font-semibold text-black"
              >
                Description
              </label>
              <TextAreaAtom />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="startDate"
                className="text-sm font-semibold text-black"
              >
                Start
              </label>
              <DatePickerAtom />
            </div>

            <div className="flex flex-col">
              <ButtonAtom />
            </div>
          </form>
        </div>
      </Content>
    </Layout>
  );
};

export default TestPageTwoContainer;
