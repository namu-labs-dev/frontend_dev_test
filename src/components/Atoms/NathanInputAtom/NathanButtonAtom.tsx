import React from "react";
import { Button, Flex } from "antd";

const ButtonAtom: React.FC = () => (
  <Flex vertical gap="small" style={{ width: "100%" }}>
    <Button
      onClick={() => alert("Vote created successfully")}
      type="primary"
      block
    >
      Create Vote
    </Button>
  </Flex>
);

export default ButtonAtom;
