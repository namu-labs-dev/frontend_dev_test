"use client";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { type ChangeEvent, useState } from "react";
import { DanielEmptyContentAtom } from "~/components/Atoms/EmptyContentAtom/DanielEmptyContentAtom";
import { DanielFooterAtom } from "~/components/Atoms/FooterAtom/DanielFooterAtom";
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
    <Layout
      className='flex min-h-screen flex-col bg-white'
      style={{ height: "100dvh" }}
    >
      <Header
        style={{
          padding: "0px",
        }}
      >
        <DanielHeaderTwoAtom title='Vote' />
      </Header>

      <Content className='relative flex flex-grow flex-col bg-[#1F1F1F]'>
        <div
          style={{
            padding: "15px 20px",
          }}
        >
          <DanielEmptyContentAtom />
        </div>
      </Content>

      <Footer style={{ padding: "0px", backgroundColor: "#262626" }}>
        <DanielFooterAtom />
      </Footer>
    </Layout>
  );
};

export default HomeContainerTwo;
