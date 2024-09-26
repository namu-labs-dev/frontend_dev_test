"use client";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { DanielEmptyContentAtom } from "~/components/Atoms/EmptyContentAtom/DanielEmptyContentAtom";
import DanielPreviewDisplayAtom from "~/components/Atoms/EmptyContentAtom/DanielPreviewDisplayAtom";
import { DanielFooterAtom } from "~/components/Atoms/FooterAtom/DanielFooterAtom";
import { DanielHeaderAtom } from "~/components/Atoms/HeaderAtom/DanielHeaderAtom";

const HomeContainer = () => {
  return (
    <Layout
      className='flex min-h-screen flex-col'
      style={{ height: "100dvh", background: "#1F1F1F" }}
    >
      <Header
        className='bg-[#1F1F1F] p-[5px]'
        style={{
          padding: "5px",
          background: "#1F1F1F",
        }}
      >
        <DanielHeaderAtom
          onClickLeftIcon={() => alert("You just clicked the cast icon")}
          onClickRightIcon={() => alert("You just clicked the settings icon")}
          title='Proxima OS'
        />

        <Content
          className='relative flex flex-grow flex-col bg-[#1F1F1F]'
          style={{
            padding: "15px 20px",
          }}
        >
          <DanielEmptyContentAtom />
          <DanielPreviewDisplayAtom />
        </Content>

        <Footer style={{ padding: "0px", backgroundColor: "#262626" }}>
          <DanielFooterAtom />
        </Footer>
      </Header>
    </Layout>
  );
};

export default HomeContainer;
