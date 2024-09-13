"use client";

import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import NathanAbsoluteEmptyContent from "~/components/Atoms/EmptyContentAtom/NathanAbsoluteEmptyContent";
import NathanEmptyContentAtom from "~/components/Atoms/EmptyContentAtom/NathanEmptyContentAtom";
import { NathanFooterAtom } from "~/components/Atoms/FooterAtom/NathanFooterAtom";
import { NathanHeaderAtom } from "~/components/Atoms/HeaderAtom/NathanHeaderAtom";

const HomeContainer = () => {
  const router = useRouter();

  return (
    <Layout style={{ height: "100%" }}>
      <Header style={{ padding: 0 }}>
        <NathanHeaderAtom
          title="Proxima OS"
          onClickLeftIcon={() => alert(`You clicked on the connected icon`)}
          onClickRightIcon={() => router.push("/nathan/testPage2")}
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
