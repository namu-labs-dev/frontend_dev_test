"use client";

import { Layout } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import { useState } from "react";
import { ContentAtom } from "~/components/Atoms/ContentAtomForCovenant/ContentAtom";
import { FooterAtom } from "~/components/Atoms/FooterAtomForCovenant/FooterAtom";
import { HeaderAtom } from "~/components/Atoms/HeaderAtomForCovenant/HeaderAtom";

export const HomeContainer = () => {
  const [settingClicked, setSettingClicked] = useState(false);

  return (
    <Layout
      style={{
        width: "70%",
        height: "130%",
        backgroundColor: "rgba(31, 31, 31, 1)",
      }}
    >
      <Header style={{ backgroundColor: "rgba(31, 31, 31, 1)" }}>
        <HeaderAtom isSettingsClicked={setSettingClicked} />
      </Header>

      <Content>
        <ContentAtom settingClicked={settingClicked} />
      </Content>

      <Footer style={{ backgroundColor: "rgba(38, 38, 38, 1)" }}>
        <FooterAtom />
      </Footer>
    </Layout>
  );
};
