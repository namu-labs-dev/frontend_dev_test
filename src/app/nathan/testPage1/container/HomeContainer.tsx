"use client";

import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import React, { useState } from "react";
import NathanAbsoluteEmptyContent from "~/components/Atoms/EmptyContentAtom/NathanAbsoluteEmptyContent";
import NathanEmptyContentAtom from "~/components/Atoms/EmptyContentAtom/NathanEmptyContentAtom";
import { NathanFooterAtom } from "~/components/Atoms/FooterAtom/NathanFooterAtom";
import { NathanHeaderAtom } from "~/components/Atoms/HeaderAtom/NathanHeaderAtom";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";

const HomeContainer = () => {
  const [settingsClicked, setSettingsClicked] = useState<boolean>(false);
  const [notificationsClicked, setNotificationsClicked] =
    useState<boolean>(false);

  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0 }}>
        <NathanHeaderAtom
          title="Proxima OS"
          onClickLeftIcon={() => setNotificationsClicked((prev) => !prev)}
          onClickRightIcon={() => setSettingsClicked((prev) => !prev)}
        />
      </Header>

      <Content
        style={{
          background: "#1F1F1F",
          position: "relative",
          padding: "10px 15px",
        }}
      >
        <NathanEmptyContentAtom />
        <NathanAbsoluteEmptyContent />
      </Content>

      <Footer style={{ backgroundColor: "#262626", padding: 0 }}>
        <NathanFooterAtom />
      </Footer>
    </Layout>
  );
};

export default HomeContainer;
