"use client";
import { Alert, Layout } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { type ChangeEvent, useState } from "react";
import ButtonAtom from "~/components/Atoms/DanielWidgetsAtom/ButtonAtom";
import { DateAtom } from "~/components/Atoms/DanielWidgetsAtom/DateAtom";
import { DescriptionAtom } from "~/components/Atoms/DanielWidgetsAtom/DescriptionAtom";
import { ImageUploadAtom } from "~/components/Atoms/DanielWidgetsAtom/ImageUploadAtom";
import { InputAtom } from "~/components/Atoms/DanielWidgetsAtom/InputAtom";
import { SelectAtom } from "~/components/Atoms/DanielWidgetsAtom/SelectAtom";
import { DanielHeaderTwoAtom } from "~/components/Atoms/HeaderAtom/DanielHeaderTwoAtom";

const HomeContainerTwo: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImage(file);
    }
  };

  return (
    <Layout className='flex flex-col bg-white' style={{ height: "100%" }}>
      <Header
        style={{
          padding: "0px",
        }}
      >
        <DanielHeaderTwoAtom title='Vote' />
      </Header>

      <Content className='relative flex flex-grow flex-col bg-white'>
        <Alert
          style={{ borderRadius: 0, border: 0, padding: "15px" }}
          description={
            <p className='text-[15px]'>
              <span className='font-bold text-blue-600'>10 FAO</span> will be
              deducted when voting is <br /> generated (Amount: 9 FAO)
            </p>
          }
          type='info'
        />

        <div style={{ padding: "15px" }}>
          <form
            onSubmit={() => alert("Vote created successfully")}
            className='flex flex-col space-y-5'
          >
            <div>
              <SelectAtom
                label='Category'
                options={["Birthday AD", "Anniversay CD"]}
              />
            </div>

            <div>
              <InputAtom label='Vote Title' placeholder='Title' />
            </div>

            <div>
              <label htmlFor='Image Upload'>Image Upload</label>
              <ImageUploadAtom />
            </div>

            <div>
              <DescriptionAtom
                label='Description'
                placeholder='Please write down a description of the event'
              />
            </div>

            <div>
              <DateAtom label='Start' />
            </div>
          </form>
        </div>

        <div className='mx-3 mt-[120px]'>
          <ButtonAtom />
        </div>
      </Content>
    </Layout>
  );
};

export default HomeContainerTwo;
