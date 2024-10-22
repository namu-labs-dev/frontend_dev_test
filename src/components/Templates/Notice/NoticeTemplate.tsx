import { Layout } from "antd";
import React from "react";
import { NoticeHeaderModule } from "~/components/Modules/Notice/NoticeHeaderModule";

type Props = {
  foo?: string;
  noticeHeaderModuleProps: React.ComponentProps<typeof NoticeHeaderModule>;
};

export function NoticeTemplate(props: Props) {
  return (
    <Layout style={{ width: "100%" }}>
      <NoticeHeaderModule {...props.noticeHeaderModuleProps} />
    </Layout>
  );
}
