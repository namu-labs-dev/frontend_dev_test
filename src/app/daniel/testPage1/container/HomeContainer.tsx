"use client";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { DanielEmptyContentAtom } from "~/components/Atoms/EmptyContentAtom/DanielEmptyContentAtom";
import DanielPreviewDisplayAtom from "~/components/Atoms/EmptyContentAtom/DanielPreviewDisplayAtom";
import { DanielFooterAtom } from "~/components/Atoms/FooterAtom/DanielFooterAtom";
import { DanielHeaderAtom } from "~/components/Atoms/HeaderAtom/DanielHeaderAtom";

const HomeContainer = () => {
  return (
    <Layout className='flex min-h-screen flex-col' style={{ height: "100vh" }}>
      <Header
        style={{
          padding: "0px",
        }}
      >
        <DanielHeaderAtom
          onClickLeftIcon={() => alert("You just clicked the cast icon")}
          onClickRightIcon={() => alert("You just clicked the settings icon")}
          title='Proxima OS'
        />
      </Header>

      <Content className='relative flex-grow flex-col bg-[#1F1F1F]'>
        <div
          style={{
            padding: "15px 20px",
          }}
        >
          <DanielEmptyContentAtom />
        </div>

        <div style={{ padding: "auto 0px" }}>
          <DanielPreviewDisplayAtom />
        </div>
      </Content>

      <Footer style={{ padding: "0px", backgroundColor: "#262626" }}>
        <DanielFooterAtom />
      </Footer>
    </Layout>
  );
};

export default HomeContainer;
