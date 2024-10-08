import { Button, Form, Upload } from "antd";
import React from "react";
import SVGAtom from "~/components/Atoms/SVGAtom/SVGAtom";
import type { UploadProps } from "antd";
import type * as svgs from "public/svgs";
import { message } from "antd";

type Props = {
  label: string;
  name: string;
  icon: keyof typeof svgs;
};
const uploadProps: UploadProps = {
  name: "file",
  action: "",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      void message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      void message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const VoteFormUpload = (props: Props) => {
  return (
    <Form.Item
      label={props.label}
      style={{ fontWeight: 500 }}
      name={props.name}
    >
      <Upload {...uploadProps}>
        <Button
          style={{
            height: "150px",
            backgroundColor: "#00000015",
            minWidth: "390px",
            borderStyle: "solid",
          }}
        >
          <SVGAtom iconName={props.icon} width={20} height={20} />
        </Button>
      </Upload>
    </Form.Item>
  );
};

export default VoteFormUpload;
